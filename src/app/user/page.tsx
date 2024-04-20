"use client";

import { getUsersSelector } from "@/lib/selectors/selectors";
import { getPosts } from "@/lib/slices/post";
import { deleteUser, getUsers } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import CardUsers from "../../components/CardUsers";
import ButtonCustom from "../../components/Button";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import CardCustom from "@/components/CardCustom";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import Confirmation from "@/components/Confirmation";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, response } = useSelector(getUsersSelector);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userId, setUserId] = useState(0);
  const [code, setCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    if (response) {
      setCode(response.status);
      if (response.response) {
        response.response.data.map((e: any) =>
          setErrorMessage((current) => [...current, `${e.field}: ${e.message}`])
        );
      }
    }
  }, [response]);
  console.log(code);
  useEffect(() => {
    if (code !== 0) {
      if (code !== 201 && code !== 200 && code !== 204) {
        setShowError(true);
      } else {
        setShowSuccess(true);
        setTimeout(() => {
          dispatch(getUsers({ page, per_page: perPage }));
          setShowSuccess(false);
        }, 2000);
      }
    }
    setCode(0);
  }, [code]);
  function onNext() {
    setPage(page + 1);
  }
  function onPrev() {
    setPage(page - 1);
  }
  useEffect(() => {
    dispatch(getUsers({ page, per_page: perPage }));
  }, [page]);

  const onDelete = (id: number) => {
    setUserId(id);
    setShowConfirmation(true);
  };

  const onCloseConfirm = () => {
    setShowConfirmation(false);
  };

  const submitDelete = () => {
    //API HERE
    dispatch(deleteUser(userId));
    setShowConfirmation(false);
  };

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
      {showError && (
        <div className="bg-red text-white py-2 px-6">
          <ul className="list-disc space-y-2">
            {errorMessage.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      {showSuccess && (
        <div className="bg-green text-white py-2 px-6">
          <p>Delete user success!</p>
        </div>
      )}
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
            <div className="border-gainsboro border p-6 flex" key={e.id}>
              <CardUsers data={e} />
              <div className="flex gap-4 text-black items-center w-full justify-center">
                <Link
                  href={"/user/" + e.id}
                  className="flex gap-2 items-center cursor-pointer hover:scale-105 hover:text-primary"
                >
                  <FaEdit size={20} />
                  <p>Edit</p>
                </Link>
                <div
                  className="flex gap-2 items-center cursor-pointer hover:scale-105 hover:text-red"
                  onClick={() => onDelete(e.id)}
                >
                  <FaTrash size={20} />
                  <p>Delete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardCustom>

      {showConfirmation && (
        <Confirmation
          message="Are you sure you want to delete"
          onCancel={onCloseConfirm}
          onSave={submitDelete}
        />
      )}

      <Pagination next={onNext} prev={onPrev} page={page} />
    </div>
  );
}
