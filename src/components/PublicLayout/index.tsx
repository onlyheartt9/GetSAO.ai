export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-8 py-2">
      <div className="text-black text-[24px] font-bold">GetSAO.ai</div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
