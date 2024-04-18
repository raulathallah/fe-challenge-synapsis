"use client";
import Loading from "@/app/components/Loading";
import { getPostsSelector, getUsersSelector } from "@/lib/selectors/selectors";
import { getPostDetails } from "@/lib/slices/post";
import { getUserDetails } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
export default function BlogDetails() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail: postDetails, loading: loadingPD } =
    useSelector(getPostsSelector);
  const { detail: userDetails } = useSelector(getUsersSelector);
  useEffect(() => {
    if (params.id) {
      dispatch(getPostDetails(parseInt(params.id.toString())));
    }
  }, [params.id]);

  useEffect(() => {
    if (postDetails) {
      dispatch(getUserDetails(postDetails.user_id));
    }
  }, [postDetails]);

  console.log(userDetails);
  return (
    <div className="grid lg:grid-cols-6 gap-6">
      {!loadingPD ? (
        <div className="lg:col-span-5 space-y-2 shadow-lg p-6">
          <p className="font-bold text-xl">{postDetails?.title}</p>
          <p>{postDetails?.body}</p>
        </div>
      ) : (
        <Loading />
      )}
      <div className="col-span-1 lg:border-l lg:px-4 border-gainsboro">
        <p className="font-bold">Posted by</p>
        {userDetails ? (
          <div>
            <div className="text-xs">
              <p>{userDetails?.name}</p>
              <p>{userDetails?.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm">Deleted User</p>
        )}
      </div>
    </div>
  );
}
