"use client";
import BackButton from "@/components/BackButton";
import { usePathname } from "next/navigation";

export default function CuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="space-y-6">
      <p className="font-bold">
        {pathname.includes("add") ? "Add User" : "Update User"}
      </p>
      <BackButton />
      {children}
    </div>
  );
}
