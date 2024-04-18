import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function CardUsers({ data }: { data: UserType }) {
  return (
    <>
      <div className="w-full grid lg:grid-cols-6 grid-cols-8 px-6 py-2 border-gainsboro border border-opacity-50">
        <div className="lg:col-span-5 col-span-7">
          <Link href={"/user/" + data.id} className="space-y-2">
            <div>
              <p className="font-bold text-lg">{data.name}</p>
              <p className="">{data.email}</p>
            </div>
            <p
              className={`${
                data.status !== "active" ? "bg-red" : "bg-green"
              } text-white px-4 py-1 rounded-xl w-fit text-xs`}
            >
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </p>{" "}
          </Link>
        </div>

        <div className="col-span-1 flex gap-4 items-center text-secondary w-full">
          <FaEdit className="cursor-pointer hover:scale-125" size={20} />
          <FaTrash className="cursor-pointer hover:scale-125" size={20} />
        </div>
      </div>
    </>
  );
}
