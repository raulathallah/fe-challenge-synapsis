import Link from "next/link";

export default function CardPosts({ data }: { data: PostType }) {
  return (
    <Link href={"/blog/" + data.id}>
      <div className="bg-white border border-gainsboro p-4 rounded-xl card-hover hover:border-secondary h-full">
        <p className="text-xs">{data.user_id}</p>
        <p className="font-bold text-lg">{data.title}</p>
        <p className="text-xs truncate">{data.body}</p>
      </div>
    </Link>
  );
}
