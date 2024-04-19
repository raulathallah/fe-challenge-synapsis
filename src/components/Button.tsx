export default function ButtonCustom({
  children,
  onClick,
  className,
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: string;
}) {
  let typeStyle;
  if (type === "danger") typeStyle = "bg-red";
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-fit border bg-primary text-white hover:scale-105  font-bold duration-150 active:scale-95" ${typeStyle} ${className}`}
    >
      {children}
    </button>
  );
}
