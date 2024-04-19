"use client";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getPostsSelector } from "@/lib/selectors/selectors";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/slices/post";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import CardCustom from "@/components/CardCustom";
import Link from "next/link";

export default function Blog() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(getPostsSelector);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  function onNext() {
    setPage(page + 1);
  }
  function onPrev() {
    setPage(page - 1);
  }
  useEffect(() => {
    dispatch(getPosts({ page, per_page: perPage }));
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" max-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data.map((e) => (
          <Link href={"/blog/" + e.id} key={e.id}>
            <CardCustom>
              <p className="text-xs opacity-50">{e.id}</p>
              <p className="font-bold text-lg">{e.title}</p>
              <p className="text-xs truncate">{e.body}</p>
            </CardCustom>
          </Link>
        ))}
      </div>
      <Pagination next={onNext} prev={onPrev} page={page} />
    </div>
  );
}
