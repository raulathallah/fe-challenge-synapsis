"use client";
import { useRouter } from "next/navigation";
import { CiCircleChevLeft } from "react-icons/ci";

export default function BackButton() {
  const router = useRouter();

  return (
    <a
      className="flex items-center gap-2 cursor-pointer hover:text-secondary"
      onClick={router.back}
    >
      <CiCircleChevLeft size={24} />
      <p className="text-sm">Back</p>
    </a>
  );
}
