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
        "px-6 py-2 w-fit border bg-gainsboro text-black hover:bg-primary hover:text-white font-bold duration-150 active:scale-95" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
