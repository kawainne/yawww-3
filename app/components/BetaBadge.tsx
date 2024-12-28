export default function BetaBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 text-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 animate-shine" />
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        Welcome to the beta version!
      </div>
    </div>
  );
}