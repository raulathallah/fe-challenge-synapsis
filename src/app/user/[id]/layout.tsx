import BackButton from "@/app/components/BackButton";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <BackButton />
      {children}
    </div>
  );
}
