"use client";
import CardCustom from "@/components/CardCustom";
import Loading from "@/components/Loading";
import { getPostsSelector, getUsersSelector } from "@/lib/selectors/selectors";
import { getPostDetails } from "@/lib/slices/post";
import { getUserDetails } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
export default function BlogDetails() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail: postDetails, loading: loadingPD } =
    useSelector(getPostsSelector);
  const { detail: userDetails } = useSelector(getUsersSelector);

  useEffect(() => {
    if (params.id) {
      const get = dispatch(getPostDetails(parseInt(params.id.toString())));
      return () => get.abort();
    }
  }, [params.id]);

  useEffect(() => {
    if (postDetails) {
      const get = dispatch(getUserDetails(postDetails.user_id));
      return () => get.abort();
    }
  }, [postDetails]);

  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="col-span-6">
        {!loadingPD ? (
          <CardCustom type="display">
            <p className="font-bold text-xl">{postDetails?.title}</p>
            <p>{postDetails?.body}</p>
          </CardCustom>
        ) : (
          <Loading />
        )}
      </div>
      <div className="col-span-2 lg:border-l lg:px-4 border-gainsboro flex flex-col gap-4">
        <p className="font-bold">Posted by</p>
        {!userDetails ? (
          <p className="text-sm">Deleted User</p>
        ) : (
          <Link
            href={"/user/" + userDetails?.id}
            className="space-y-2 hover:text-primary"
          >
            <FaUserCircle size={24} />
            <div className="text-xs">
              <p className="font-bold">{userDetails?.name}</p>
              <p>{userDetails?.email}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
