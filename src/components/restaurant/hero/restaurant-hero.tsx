import { Star, Clock, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Restaurant } from '@/lib/types/restaurant';

interface RestaurantHeroProps {
  data: Restaurant;
}
  
export function RestaurantHero({data}:RestaurantHeroProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover opacity-60" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-white max-w-2xl">
            <p className="text-sm md:text-base font-medium text-slate-200">{data.tagline}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{data.name}</h1>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge variant="secondary" className="bg-slate-800/80 text-white border-slate-700 hover:bg-slate-800 px-3 py-1.5 text-xs md:text-sm backdrop-blur-sm">
                <ShoppingCart className="h-3 w-3 mr-2" /> Minimum Order: {data.minOrder} GBP
              </Badge>
              <Badge variant="secondary" className="bg-slate-800/80 text-white border-slate-700 hover:bg-slate-800 px-3 py-1.5 text-xs md:text-sm backdrop-blur-sm">
                <Clock className="h-3 w-3 mr-2" /> Delivery in {data.deliveryTime} Minutes
              </Badge>
            </div>
          </div>

          {/* Rating Card */}
          <div className="bg-white p-4 rounded-lg shadow-xl flex flex-col items-center justify-center min-w-[120px] self-start md:self-auto">
            <span className="text-3xl font-bold text-slate-900">{data.rating}</span>
            <div className="flex text-yellow-400 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(data.rating) ? 'fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <span className="text-xs text-slate-500">{data.reviewCount} reviews</span>
          </div>
        </div>
      </div>

      {/* Status Bar * */}
      <div className="absolute bottom-0 left-0  z-20 bg-orange-500 text-white font-medium text-xs md:text-sm py-2.5 px-8 rounded-tr-2xl rounded-tl-none flex items-center shadow-md">
        <Clock className="h-4 w-4 mr-2 shrink-0 stroke-[2.5]" />
        <span>Open until {data?.isOpenUntil}</span>
      </div>
    </div>
  );
}