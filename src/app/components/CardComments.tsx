export default function CardComments({ data }: { data: CommentType }) {
  return (
    <>
      <div className="w-full bg-white border border-gainsboro p-4 space-y-2 rounded-xl h-full text-xs">
        <div className="grid">
          <p className="font-semibold">{data.name}</p>
          <p className="">{data.email}</p>
        </div>

        <p className="">{data.body}</p>
      </div>
    </>
  );
}
