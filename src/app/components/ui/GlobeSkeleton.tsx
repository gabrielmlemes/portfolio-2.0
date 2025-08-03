import React from "react";

export function GlobeSkeleton() {
  return (
    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center animate-pulse">
      <div className="text-gray-500 dark:text-gray-400 text-lg"></div>
    </div>
  );
}

