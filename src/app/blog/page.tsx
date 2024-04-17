"use client";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getPostsSelector } from "@/lib/selectors/selectors";
import { useEffect } from "react";
import { getPosts } from "@/lib/slices/post";
export default function Blog() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(getPostsSelector);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(data);
  return (
    <main>
      {data.map((e) => (
        <p key={e.id}>{e.title}</p>
      ))}
    </main>
  );
}
