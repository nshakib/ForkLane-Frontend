"use client";
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function MenuCategories({ categories }: { categories: string[] }) {
  const [active, setActive] = useState("Offers");

  return (
    <div className="sticky top-[80px] md:top-[100px] z-30 -mx-4 px-4 bg-orange-500 py-3 mb-8 shadow-md overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max container mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              active === cat 
                ? "bg-slate-900 text-white" 
                : "bg-orange-500 text-white hover:bg-orange-600 border border-orange-400"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}