"use client";
import ButtonCustom from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import NoData from "@/app/components/NoData";
import Status from "@/app/components/Status";
import { getUsersSelector } from "@/lib/selectors/selectors";
import { getUserDetails } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetails() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail, loading } = useSelector(getUsersSelector);

  const onEdit = () => {};

  useEffect(() => {
    dispatch(getUserDetails(parseInt(params.id.toString())));
  }, []);
  if (loading) {
    return <Loading />;
  }
  return detail ? (
    <div className="grid gap-4">
      <div className="shadow-lg p-6 gap-4 w-fit flex justify-between">
        <div className="flex gap-4 space-x-6">
          <div className="space-y-2">
            <FaUserCircle size={100} />
            <Status status={detail.status} />
          </div>
          <div className=" grid items-center">
            <div className="flex flex-col justify-center gap-2">
              <div className="flex divide-opacity-50 items-center gap-2">
                <p className="text-xs">{detail.id}</p>
                <MdCircle size={6} className="text-gainsboro" />
                <p className="text-xs">
                  {detail.gender === "female" ? "Female" : "Male"}
                </p>
              </div>

              <p className="font-bold text-2xl">{detail.name}</p>
              <p className="text-xs">{detail.email}</p>
            </div>
          </div>
        </div>
        <div>
          <Link href={`/user/${params.id}/edit`}>
            <ButtonCustom onClick={onEdit}>Edit User</ButtonCustom>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <NoData />
  );
}
