export function AboutSkeleton() {
  return (
    <div className="py-24 sm:py-32 min-h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-pulse">
        <div className="mx-auto max-w-2xl text-center">
          <div className="h-4 bg-gray-700 rounded w-1/4 mx-auto"></div>
          <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mt-4"></div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-full mt-2"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}