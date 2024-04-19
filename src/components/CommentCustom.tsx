import { FaUserCircle } from "react-icons/fa";

export default function CommentCustom({ data }: { data: CommentType }) {
  return (
    <>
      <div className="w-full bg-white border-l-2 border-gainsboro px-2 space-y-4 h-full text-xs">
        <div className="flex gap-2 items-center">
          <FaUserCircle size={24} />
          <p className="font-semibold">{data.name}</p>
        </div>

        <p className="">{data.body}</p>
      </div>
    </>
  );
}
