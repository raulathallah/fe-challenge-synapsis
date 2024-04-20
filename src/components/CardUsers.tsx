import Link from "next/link";

export default function CardUsers({ data }: { data: UserType }) {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-4 text-center">
      <div className="space-y-2 text-center lg:text-left">
        <Link
          href={"/user/" + data.id}
          className="space-y-2 grid justify-center lg:justify-start"
        >
          <div>
            <p className="font-bold text-lg">{data.name}</p>
            <p className="">{data.email}</p>
          </div>
          <p
            className={`${
              data.status !== "active" ? "bg-red" : "bg-green"
            } text-white px-4 py-1 rounded-xl w-fit text-xs place-self-center lg:place-self-start`}
          >
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </p>
        </Link>
      </div>
    </div>
  );
}
