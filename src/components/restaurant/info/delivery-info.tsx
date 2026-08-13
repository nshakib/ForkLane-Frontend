import { Truck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { DeliveryDay } from '@/lib/types/restaurant';

interface DeliveryInfoProps {
  info: DeliveryDay[];
  estimatedTime: string;
}

export function DeliveryInfo({ info, estimatedTime }: DeliveryInfoProps) {
  return (
    <Card className="p-6 bg-white dark:bg-slate-900 border-none shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
        <Truck className="h-5 w-5" />
        <h3 className="font-bold text-lg">Delivery information</h3>
      </div>
      <div className="space-y-2 text-sm">
        {info.map((item: DeliveryDay) => (
          <div key={item.day} className="flex gap-2">
            <span className="font-semibold text-slate-900 dark:text-white min-w-[80px]">{item.day}:</span>
            <span className="text-slate-600 dark:text-slate-400">{item.time}</span>
          </div>
        ))}
        <div className="pt-2 flex gap-2">
           <span className="font-semibold text-slate-900 dark:text-white">Estimated time until delivery:</span>
           <span className="text-slate-600 dark:text-slate-400">{estimatedTime}</span>
        </div>
      </div>
    </Card>
  );
}