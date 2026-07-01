export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute -bottom-40 -left-40 h-150 w-150 rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/10 to-black" />
    </div>
  );
}
