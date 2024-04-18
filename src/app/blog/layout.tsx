export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <p className="font-bold">Blog</p>
      {children}
    </div>
  );
}
