export default function AibouLoader() {
  return (
    <div className="relative flex w-64 animate-pulse gap-2 p-4">
      <div className="h-12 w-12 rounded-full bg-panel" />
      <div className="flex-1">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-panel text-lg" />
        <div className="h-5 w-[90%] rounded-lg bg-panel text-sm" />
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-panel" />
    </div>
  );
}
