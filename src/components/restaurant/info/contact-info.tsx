import { Phone, Globe, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Contact } from '@/lib/types/restaurant';

interface ContactInfoProps {
  contact: Contact;
}

export function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <Card className="p-6 bg-white dark:bg-slate-900 border-none shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
        <Utensils className="h-5 w-5" />
        <h3 className="font-bold text-lg">Contact information</h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
      </p>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Phone number</p>
          <p className="text-slate-600 dark:text-slate-400">{contact.phone}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Website</p>
          <a href={contact.website} className="text-slate-600 dark:text-slate-400 hover:underline">{contact.website}</a>
        </div>
      </div>
    </Card>
  );
}