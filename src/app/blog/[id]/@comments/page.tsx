"use client";
import CommentCustom from "@/components/CommentCustom";
import { getCommentsSelector } from "@/lib/selectors/selectors";
import { getCommentsByPostId } from "@/lib/slices/comment";
import { AppDispatch } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
export default function Comments() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(getCommentsSelector);
  useEffect(() => {
    dispatch(getCommentsByPostId(parseInt(params.id.toString())));
  }, []);

  return (
    <div className="space-y-4">
      {data.length ? (
        <>
          <p className="text-xs">Showing {data.length} comment</p>
          {data.map((e) => (
            <CommentCustom key={e.id} data={e} />
          ))}
        </>
      ) : (
        <p className="text-xs">No Comments.</p>
      )}
    </div>
  );
}
