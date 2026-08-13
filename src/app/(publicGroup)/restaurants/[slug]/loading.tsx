import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function RestaurantLoading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 animate-in fade-in duration-500">
      
      {/* 1. Hero Skeleton */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl w-full">
                <Skeleton className="h-4 w-32 bg-slate-300 dark:bg-slate-700" />
                <Skeleton className="h-10 w-3/4 md:w-1/2 bg-slate-300 dark:bg-slate-700" />
                <div className="flex gap-3 pt-2">
                  <Skeleton className="h-8 w-40 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <Skeleton className="h-8 w-48 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>
              {/* Rating Card Skeleton */}
              <Skeleton className="w-[120px] h-[100px] rounded-lg bg-white dark:bg-slate-800 shadow-xl" />
            </div>
          </div>
        </div>
        {/* Status Bar Skeleton */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-orange-200 dark:bg-orange-900/30" />
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Header Row Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Skeleton className="h-8 w-64 bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-10 w-full md:w-64 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* 2. Categories Tabs Skeleton */}
        <div className="flex gap-2 overflow-hidden pb-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full bg-orange-100 dark:bg-slate-800 flex-shrink-0" />
          ))}
        </div>

        {/* 3. Offers Grid Skeleton */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl bg-slate-200 dark:bg-slate-800" />
          ))}
        </section>

        {/* 4. Menu Items Skeleton (Repeated for 2 sections) */}
        {[...Array(2)].map((_, sectionIndex) => (
          <section key={sectionIndex} className="space-y-4">
            <Skeleton className="h-8 w-32 bg-orange-100 dark:bg-slate-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, itemIndex) => (
                <Card key={itemIndex} className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800" />
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full bg-slate-100 dark:bg-slate-800" />
                      <Skeleton className="h-3 w-5/6 bg-slate-100 dark:bg-slate-800" />
                    </div>
                    <Skeleton className="h-5 w-20 bg-slate-200 dark:bg-slate-800 pt-2" />
                  </div>
                  <Skeleton className="w-full md:w-32 h-32 md:h-24 rounded-md bg-slate-200 dark:bg-slate-800 flex-shrink-0" />
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* 5. Info Grid Skeleton */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Delivery Info */}
            <Card className="p-6 bg-white dark:bg-slate-900 border-none shadow-sm h-full space-y-4">
              <Skeleton className="h-6 w-40 bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="h-4 w-20 bg-slate-100 dark:bg-slate-800" />
                    <Skeleton className="h-4 w-32 bg-slate-100 dark:bg-slate-800" />
                  </div>
                ))}
              </div>
            </Card>
            {/* Contact Info */}
            <Card className="p-6 bg-white dark:bg-slate-900 border-none shadow-sm h-full space-y-4">
              <Skeleton className="h-6 w-40 bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-16 w-full bg-slate-100 dark:bg-slate-800" />
              <div className="space-y-2">
                 <Skeleton className="h-4 w-24 bg-slate-100 dark:bg-slate-800" />
                 <Skeleton className="h-4 w-32 bg-slate-100 dark:bg-slate-800" />
              </div>
            </Card>
          </div>
          {/* Operational Times (Dark Card) */}
          <Card className="p-6 bg-slate-200 dark:bg-slate-800 border-none shadow-sm h-full space-y-4">
             <Skeleton className="h-6 w-40 bg-slate-300 dark:bg-slate-700" />
             <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <Skeleton className="h-4 w-20 bg-slate-300 dark:bg-slate-700" />
                    <Skeleton className="h-4 w-24 bg-slate-300 dark:bg-slate-700" />
                  </div>
                ))}
              </div>
          </Card>
        </section>

        {/* 6. Map Skeleton */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 text-sm">Loading Map...</span>
           </div>
           {/* Floating Card Skeleton */}
           <div className="absolute top-4 left-4 md:top-8 md:left-8 w-[300px] h-[200px] bg-slate-300 dark:bg-slate-700 rounded-lg shadow-xl" />
        </div>

        {/* 7. Reviews Skeleton */}
        <section className="space-y-6">
           <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-48 bg-slate-200 dark:bg-slate-800" />
              <div className="flex gap-2">
                 <Skeleton className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                 <Skeleton className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-5 bg-slate-100 dark:bg-slate-900 border-none space-y-3">
                   <div className="flex justify-between">
                      <div className="flex gap-3">
                         <Skeleton className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                         <div className="space-y-2">
                            <Skeleton className="h-4 w-20 bg-slate-200 dark:bg-slate-800" />
                            <Skeleton className="h-3 w-16 bg-slate-200 dark:bg-slate-800" />
                         </div>
                      </div>
                   </div>
                   <Skeleton className="h-16 w-full bg-slate-200 dark:bg-slate-800" />
                </Card>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
}