"use client";

import React from "react";

export function ProjectDialogSkeleton() {
  return (
    <div className="max-w-[90%] max-h-[90vh] sm:max-w-3xl px-8 pt-8 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950 border-neutral-800/50 flex flex-col animate-pulse">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-neutral-800/50 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-neutral-800"></div>
          <div className="h-8 w-48 bg-neutral-800 rounded"></div>
          <div className="h-px flex-1 bg-neutral-800"></div>
        </div>
        <div className="h-4 bg-neutral-800 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 space-y-8 overflow-y-auto pr-4 py-6">
        {/* Funcionalidades Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-neutral-800"></div>
            <div className="h-6 w-32 bg-neutral-800 rounded"></div>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <div className="h-5 w-5 bg-neutral-800 rounded-full flex-shrink-0"></div>
              <div className="h-4 bg-neutral-800 rounded w-full"></div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="h-5 w-5 bg-neutral-800 rounded-full flex-shrink-0"></div>
              <div className="h-4 bg-neutral-800 rounded w-11/12"></div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="h-5 w-5 bg-neutral-800 rounded-full flex-shrink-0"></div>
              <div className="h-4 bg-neutral-800 rounded w-10/12"></div>
            </div>
          </div>
        </div>

        {/* Tecnologias Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-neutral-800"></div>
            <div className="h-6 w-40 bg-neutral-800 rounded"></div>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="!mx-0 !bg-transparent flex-col sm:flex-row gap-3 py-3 mt-auto border-t border-neutral-800/50 px-0">
        <div className="h-10 w-full sm:flex-1 bg-neutral-800 rounded-md"></div>
        <div className="h-10 w-full sm:flex-1 bg-neutral-800 rounded-md"></div>
        <div className="h-10 w-full sm:flex-1 bg-neutral-800 rounded-md"></div>
      </div>
    </div>
  );
}