"use client";
import CardComments from "@/app/components/CardComments";
import { getCommentsSelector } from "@/lib/selectors/selectors";
import { getCommentsByPostId } from "@/lib/slices/comment";
import { AppDispatch } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Comments() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(getCommentsSelector);
  useEffect(() => {
    dispatch(getCommentsByPostId(parseInt(params.id.toString())));
  }, []);

  return (
    <div className="space-y-6">
      {data.length ? (
        data.map((e) => {
          return <CardComments data={e} key={e.id} />;
        })
      ) : (
        <p className="text-xs">No Comments.</p>
      )}
    </div>
  );
}
