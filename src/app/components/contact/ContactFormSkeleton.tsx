export function ContactFormSkeleton() {
  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800 animate-pulse">
      <div className="h-8 bg-slate-700 rounded w-3/4 mb-6"></div>
      <div className="space-y-4">
        <div className="h-12 bg-slate-700 rounded"></div>
        <div className="h-12 bg-slate-700 rounded"></div>
        <div className="h-32 bg-slate-700 rounded"></div>
        <div className="h-12 bg-slate-700 rounded w-1/2 ml-auto"></div>
      </div>
    </div>
  );
}
