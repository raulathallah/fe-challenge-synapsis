"use client";
import CardComments from "@/app/components/CardComments";
import {
  getCommentsSelector,
  getPostsSelector,
  getUsersSelector,
} from "@/lib/selectors/selectors";
import { getCommentsByPostId } from "@/lib/slices/comment";
import { getPostDetails } from "@/lib/slices/post";
import { getUserDetails } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const comment: CommentType = {
  id: 92488,
  post_id: 118679,
  name: "Mrs. Abhaya Khan",
  email: "khan_mrs_abhaya@denesik.test",
  body: "Illo labore eaque. Aut quasi eligendi.",
};

export default function BlogDetails() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail: postDetails } = useSelector(getPostsSelector);
  const { detail: userDetails } = useSelector(getUsersSelector);
  const { data: commentList } = useSelector(getCommentsSelector);

  useEffect(() => {
    if (params.id) {
      dispatch(getPostDetails(parseInt(params.id.toString())));
      console.log(1);
    }
  }, [params.id]);

  useEffect(() => {
    if (postDetails) {
      dispatch(getUserDetails(postDetails.user_id));
      dispatch(getCommentsByPostId(postDetails.id));
    }
  }, [postDetails]);

  return postDetails && userDetails ? (
    <div className="grid gap-6">
      <div className="space-y-2">
        <p className="font-bold text-xl">{postDetails.title}</p>
        <p className="text-xs font-semibold">{`${userDetails.name}`}</p>
        <p>{postDetails.body}</p>
      </div>
      <div className="grid gap-2">
        <p className="font-bold text-sm">Comments</p>
        <CardComments data={comment} />
        <CardComments data={comment} />
      </div>
    </div>
  ) : (
    <div className="w-full space-y-4">
      <p className="text-center">Error fetching data.</p>
      <a
        className="flex justify-center gap-2 items-center cursor-pointer hover:text-secondary"
        href="/blog"
      >
        <CiCircleChevLeft size={24} />
        <p className="text-sm">Back</p>
      </a>
    </div>
  );
}
