export default function CardComments({ data }: { data: CommentType }) {
  return (
    <>
      <div className="w-full bg-white border-l-2 border-gainsboro px-2 space-y-2 h-full text-xs">
        <div className="gap-2">
          <p className="font-semibold">{data.name}</p>
          <p className="">{data.email}</p>
        </div>

        <p className="pl-4">{data.body}</p>
      </div>
    </>
  );
}
