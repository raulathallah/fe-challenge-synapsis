export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <p className="font-bold">Users</p>
      {children}
    </div>
  );
}
