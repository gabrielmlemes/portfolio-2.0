export function ProjectsSkeleton() {
  return (
    <div className="min-h-screen w-full bg-black py-30 px-4 animate-pulse">
      <div className="mx-auto max-w-4xl text-center">
        <div className="h-6 bg-gray-700 rounded w-1/4 mx-auto"></div>
        <div className="h-10 bg-gray-700 rounded w-1/2 mx-auto mt-4"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto mt-6"></div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-start justify-between">
              <div className="relative w-full aspect-[16/9] bg-gray-700 rounded-2xl"></div>
              <div className="mt-6 w-full">
                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                <div className="h-6 bg-gray-700 rounded w-2/3 mt-3"></div>
                <div className="h-4 bg-gray-700 rounded w-full mt-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}