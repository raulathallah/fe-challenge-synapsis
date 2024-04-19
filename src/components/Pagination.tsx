import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Pagination({
  next,
  prev,
  page,
}: {
  next: () => void;
  prev: () => void;
  page: number;
}) {
  return (
    <div className="flex gap-2 justify-center p-4">
      <button
        onClick={prev}
        className={`${
          page === 1 && "opacity-0"
        } hover:text-primary duration-150`}
        disabled={page === 1}
      >
        <CiCircleChevLeft size={28} />
      </button>
      <p className="bg-primary text-white px-4 py-2 font-bold rounded-xl duration-150">
        {page}
      </p>

      <button onClick={next} className="hover:text-primary">
        <CiCircleChevRight size={28} />
      </button>
    </div>
  );
}
