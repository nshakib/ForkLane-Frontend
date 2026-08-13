import { Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { DeliveryDay } from '@/lib/types/restaurant';

interface OperationalTimesProps {
  hours: DeliveryDay[];
}

export function OperationalTimes({ hours }: OperationalTimesProps) {
  return (
    <Card className="p-6 bg-slate-900 text-white border-none shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5" />
        <h3 className="font-bold text-lg">Operational Times</h3>
      </div>
      <div className="space-y-2 text-sm">
        {hours.map((item: DeliveryDay) => (
          <div key={item.day} className="flex justify-between gap-4">
            <span className="font-semibold">{item.day}:</span>
            <span className="text-slate-300 text-right">{item.time.split(',')[0]}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}