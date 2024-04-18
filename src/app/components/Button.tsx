export default function ButtonCustom({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "px-6 py-2 w-fit border bg-secondary text-white rounded-xl hover:bg-primary font-semibold hover:scale-105 duration-150 active:scale-95" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
