import { MenuItemCard } from './menu-item-card';
import { MenuItem } from '@/lib/types/restaurant';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}


export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section className="space-y-4 scroll-mt-32" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}