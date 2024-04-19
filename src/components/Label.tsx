export default function LabelCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="font-bold">{children}</p>;
}
