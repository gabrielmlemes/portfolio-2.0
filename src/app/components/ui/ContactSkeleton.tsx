export function ContactSkeleton() {
  return (
    <div className="min-h-screen w-full py-20 px-4 flex items-center justify-center animate-pulse">
      <div className="w-full max-w-xl mx-auto">
        {/* Form Skeleton */}
        <div className="w-full p-8 rounded-2xl bg-gray-800/80 border border-gray-700">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-700 rounded"></div>
            <div className="h-10 bg-gray-700 rounded"></div>
            <div className="h-24 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-600 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}