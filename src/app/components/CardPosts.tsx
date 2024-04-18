import Link from "next/link";

export default function CardPosts({ data }: { data: PostType }) {
  return (
    <Link href={"/blog/" + data.id}>
      <div className="bg-white shadow-lg p-4 hover:scale-105 hover:border-secondary h-full">
        <p className="text-xs opacity-50">{data.id}</p>
        <p className="font-bold text-lg">{data.title}</p>
        <p className="text-xs truncate">{data.body}</p>
      </div>
    </Link>
  );
}
