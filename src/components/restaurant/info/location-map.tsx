import { MapPin, Phone, Globe } from 'lucide-react';
import { Contact } from '@/lib/types/restaurant';

interface LocationMapProps {
  address: string;
  contact: Contact;
}

export function LocationMap({ address, contact }: LocationMapProps) {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
         <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=London+Bridge" 
            allowFullScreen
            className="opacity-80 grayscale dark:grayscale-dark"
          >
          </iframe>
          {/* Fallback if no API key */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <span className="text-slate-400 bg-white/50 px-4 py-2 rounded">Map View (Requires API Key)</span>
          </div>
      </div>

      {/* Floating Address Card */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-[300px] bg-slate-900/95 backdrop-blur text-white p-6 rounded-lg shadow-xl">
        <h3 className="font-bold text-lg mb-1">McDonald's</h3>
        <p className="text-orange-500 text-sm font-medium mb-4">South London</p>
        
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex gap-2">
            <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <p>{address}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
            <p>{contact.phone}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Globe className="h-4 w-4 text-orange-500 flex-shrink-0" />
            <a href={contact.website} className="hover:underline text-orange-400">{contact.website}</a>
          </div>
        </div>
      </div>
    </div>
  );
}