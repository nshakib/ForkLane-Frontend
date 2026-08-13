import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Offer } from '@/lib/types/restaurant';

interface OfferCardProps {
  data: Offer;
}

export function OfferCard({ data }: OfferCardProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden h-48 shadow-md cursor-pointer">
      <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <Badge className="absolute top-3 right-3 bg-slate-900 text-white font-bold">{data.discount}</Badge>
      
      <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-end">
        <div>
          <p className="text-orange-400 text-xs font-bold mb-1">McDonald's East London</p>
          <h3 className="text-white font-bold text-lg leading-tight">{data.title}</h3>
        </div>
        <Button size="icon" className="h-8 w-8 rounded-full bg-white text-slate-900 hover:bg-slate-100 shadow-lg">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}