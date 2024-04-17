"use client";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getPostsSelector } from "@/lib/selectors/selectors";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/slices/post";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import CardPosts from "../components/CardPosts";

export default function Blog() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(getPostsSelector);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    dispatch(getPosts({ page, per_page: perPage }));
  }, [page]);

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data.map((e) => (
          <CardPosts data={e} key={e.id} />
        ))}
      </div>

      <div className="flex gap-2 justify-center p-4">
        <button
          onClick={() => setPage(page - 1)}
          className={`${
            page === 1 && "opacity-0"
          } hover:text-secondary duration-150`}
          disabled={page === 1}
        >
          <CiCircleChevLeft size={28} />
        </button>
        <p className="bg-secondary text-white px-4 py-2 font-bold rounded-xl duration-150">
          {page}
        </p>

        <button
          onClick={() => setPage(page + 1)}
          className="hover:text-secondary"
        >
          <CiCircleChevRight size={28} />
        </button>
      </div>
    </>
  );
}
