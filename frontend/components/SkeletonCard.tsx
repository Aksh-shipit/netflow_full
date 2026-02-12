export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white/5 rounded-2xl p-6">
      <div className="h-4 bg-white/10 rounded w-1/2 mb-4"></div>
      <div className="h-3 bg-white/10 rounded w-full mb-2"></div>
      <div className="h-3 bg-white/10 rounded w-3/4"></div>
    </div>
  );
}
