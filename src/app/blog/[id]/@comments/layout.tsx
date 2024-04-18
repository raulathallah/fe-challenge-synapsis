import Loading from "@/app/components/Loading";
import { Suspense } from "react";

export default function CommentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <p className="font-bold text-sm">Comments</p>
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
