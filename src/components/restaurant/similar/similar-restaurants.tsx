import Link from 'next/link';

const brands = [
  { name: "McDonald's London", color: "bg-red-600", initial: "M" },
  { name: "Papa Johns", color: "bg-green-700", initial: "PJ" },
  { name: "KFC West London", color: "bg-red-700", initial: "K" },
  { name: "Texas Chicken", color: "bg-blue-600", initial: "T" },
  { name: "Burger King", color: "bg-orange-600", initial: "BK" },
  { name: "Shaurma 1", color: "bg-yellow-500", initial: "S" },
];

export function SimilarRestaurants() {
  return (
    <section className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Similar Restaurants</h2>
      <div className="flex flex-wrap gap-4 justify-start">
        {brands.map((brand) => (
          <Link key={brand.name} href="#" className="group">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className={`flex-1 flex items-center justify-center ${brand.color} text-white font-bold text-2xl`}>
                {brand.initial}
              </div>
              <div className="h-8 bg-orange-500 flex items-center justify-center px-1">
                <span className="text-[10px] md:text-xs font-bold text-white truncate w-full text-center">{brand.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}