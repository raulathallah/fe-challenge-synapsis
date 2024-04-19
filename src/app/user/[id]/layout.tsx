import BackButton from "@/components/BackButton";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <p className="font-bold">User Details</p>
      <BackButton />
      {children}
    </div>
  );
}
