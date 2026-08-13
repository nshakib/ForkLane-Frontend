import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MenuItem } from '@/lib/types/restaurant';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex-1 space-y-2">
        <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{item.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">{item.desc}</p>
        <p className="font-bold text-slate-900 dark:text-white pt-2">GBP {item.price.toFixed(2)}</p>
      </div>
      
      <div className="relative w-full md:w-32 h-32 md:h-24 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
        <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg border-2 border-white dark:border-slate-900">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}