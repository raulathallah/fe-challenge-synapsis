"use client";

import { getUsersSelector } from "@/lib/selectors/selectors";
import { getPosts } from "@/lib/slices/post";
import { getUsers } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import CardUsers from "../../components/CardUsers";
import ButtonCustom from "../../components/Button";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import CardCustom from "@/components/CardCustom";
import { FaSearch } from "react-icons/fa";

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
        <Link href={"/user/create-update/add"}>
          <ButtonCustom>Add User</ButtonCustom>
        </Link>
      </div>

      <CardCustom type="display">
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <input placeholder="search..."></input>
            <FaSearch size={20} />
          </div>

          <div className="w-full font-medium p-4 bg-primary text-white">
            <p className="text-center lg:text-left">User</p>
          </div>
          {data.map((e) => (
            <CardUsers data={e} key={e.id} />
          ))}
        </div>
      </CardCustom>

      <Pagination next={onNext} prev={onPrev} page={page} />
    </div>
  );
}
