import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import CardCustom from "./CardCustom";

export default function CardUsers({ data }: { data: UserType }) {
  return (
    <CardCustom>
      <div className="w-full grid lg:grid-cols-6 grid-cols-8 border-gainsboro">
        <div className="lg:col-span-5 col-span-7 space-y-2">
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
            </p>
          </Link>
        </div>
        <div className="col-span-1 flex gap-4 text-black items-center w-full ">
          <Link href={"#"}>
            <FaEdit className="cursor-pointer hover:scale-125" size={20} />
          </Link>
          <Link href={"#"}>
            <FaTrash className="cursor-pointer hover:scale-125" size={20} />
          </Link>
        </div>
      </div>
    </CardCustom>
  );
}
