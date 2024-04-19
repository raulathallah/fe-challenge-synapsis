export default function CardCustom({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) {
  return (
    <div
      className={`bg-white border p-4 duration-150 border-gainsboro ${
        type !== "display" ? "hover:border-primary hover:scale-105" : ""
      }  h-full`}
    >
      {children}
    </div>
  );
}
