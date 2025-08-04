export function ContactSkeleton() {
  return (
    <div className="min-h-screen w-full bg-black py-20 px-4 flex items-center justify-center animate-pulse">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Form Skeleton */}
        <div className="w-full md:w-1/2 lg:w-2/5 p-8 rounded-2xl bg-gray-800/80 border border-gray-700">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-700 rounded"></div>
            <div className="h-10 bg-gray-700 rounded"></div>
            <div className="h-24 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-600 rounded w-1/3"></div>
          </div>
        </div>

        {/* Globe Skeleton */}
        <div className="w-full md:w-1/2 lg:w-2/5 h-80 md:h-[30rem] bg-gray-800 rounded-2xl"></div>
      </div>
    </div>
  );
}