export default function Status({ status }: { status: string }) {
  return (
    <p
      className={`${
        status !== "active" ? "bg-red" : "bg-green"
      } text-white px-4 py-1 rounded-xl w-full text-center text-xs`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </p>
  );
}
