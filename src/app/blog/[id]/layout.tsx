import BackButton from "@/app/components/BackButton";

export default function BlogDetailsLayout({
  children,
  comments,
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <BackButton />
      {children}
      {comments}
    </div>
  );
}
