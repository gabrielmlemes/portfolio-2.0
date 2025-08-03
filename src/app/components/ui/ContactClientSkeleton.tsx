import React from 'react';

export function ContactClientSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-pulse">
      <div className="w-full md:w-1/2 lg:w-2/5 h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-lg"></div>
      <div className="w-full md:w-1/2 lg:w-3/5 h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-lg"></div>
    </div>
  );
}
