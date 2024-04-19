import BackButton from "@/components/BackButton";

export default function BlogDetailsLayout({
  children,
  comments,
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <p className="font-bold">Blog Details</p>

      <BackButton />
      {children}
      {comments}
    </div>
  );
}
