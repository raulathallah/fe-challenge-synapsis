"use client";

import { getUsersSelector } from "@/lib/selectors/selectors";
import { getPosts } from "@/lib/slices/post";
import { getUsers } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import CardUsers from "../components/CardUsers";
import ButtonCustom from "../components/Button";
import Link from "next/link";
import Pagination from "../components/Pagination";

export default function User() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(getUsersSelector);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  function onNext() {
    setPage(page + 1);
  }
  function onPrev() {
    setPage(page - 1);
  }
  useEffect(() => {
    dispatch(getUsers({ page, per_page: perPage }));
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input className="border px-4" placeholder="search..."></input>
        <Link href={"/user/create"}>
          <ButtonCustom>Add User</ButtonCustom>
        </Link>
      </div>

      <div className="shadow-lg">
        <div className="w-full grid lg:grid-cols-6 grid-cols-8 font-medium p-4 bg-primary text-white text-lg">
          <p className="lg:col-span-5 col-span-7">User</p>
          <p className="col-span-1">Action</p>
        </div>
        <div className="divide-y">
          {data.map((e) => (
            <CardUsers data={e} key={e.id} />
          ))}
        </div>
      </div>

      <Pagination next={onNext} prev={onPrev} page={page} />
    </div>
  );
}
