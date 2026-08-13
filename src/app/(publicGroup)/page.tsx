import Link from "next/link";
import { Search, ChevronRight, Star, Utensils, Salad, Pizza, Soup, Coffee, Beef } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KnowMoreSection } from "@/components/home/know-more";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-slate-900 text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070" 
            alt="Delicious Food" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center md:text-left md:items-start">
          <div className="max-w-2xl space-y-6">
            <p className="text-orange-400 font-medium tracking-wide uppercase text-sm">
              Order Restaurant food, takeaway and groceries.
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Feast Your Senses, <br />
              <span className="text-orange-500">Fast and Fresh</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-md mx-auto md:mx-0">
              Enter a postcode to see what we deliver
            </p>

            {/* Search Form */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0 mt-4">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="e.g. EC4R 3TE" 
                  className="h-12 pl-4 pr-10 rounded-full border-none bg-white text-slate-900 focus-visible:ring-orange-500"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
              <Button className="h-12 rounded-full bg-orange-500 hover:bg-orange-600 px-8 text-base font-bold shadow-lg shadow-orange-500/30">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DISCOUNT OFFERS SECTION */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Up to -40% Discount Offers
            </h2>
            <Badge variant="secondary" className="bg-orange-100 text-orange-600 hover:bg-orange-200">
              🔥 Hot
            </Badge>
          </div>
          
          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {["Pizza & Fast Food", "Vegan", "Sushi", "Others"].map((filter) => (
              <Button 
                key={filter} 
                variant="outline" 
                className="rounded-full border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-500 hover:text-orange-500 whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Chef Burgers London", discount: "-40%", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500" },
            { name: "Grand Ai Cafe London", discount: "-20%", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" },
            { name: "Butterbrot Caf'e London", discount: "-17%", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=500" },
          ].map((offer) => (
            <Card key={offer.name} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.img} 
                  alt={offer.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-slate-900 text-white font-bold text-sm px-3 py-1 rounded-md">
                  {offer.discount}
                </Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-orange-500 font-semibold mb-1">Restaurant</p>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                  {offer.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. POPULAR CATEGORIES */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            Order.uk Popular Categories <span>😋</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Burgers & Fast food", count: 21, icon: Beef, color: "bg-yellow-50" },
              { name: "Salads", count: 32, icon: Salad, color: "bg-green-50" },
              { name: "Pasta & Casuals", count: 4, icon: Utensils, color: "bg-orange-50" },
              { name: "Pizza", count: 32, icon: Pizza, color: "bg-red-50" },
              { name: "Breakfast", count: 4, icon: Coffee, color: "bg-blue-50" },
              { name: "Soups", count: 32, icon: Soup, color: "bg-purple-50" },
            ].map((cat) => (
              <Link href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} key={cat.name}>
                <Card className="border-none shadow-sm hover:shadow-md transition-all h-full overflow-hidden group cursor-pointer">
                  <div className={`h-32 flex items-center justify-center ${cat.color} dark:bg-slate-800 relative overflow-hidden`}>
                    {/* Placeholder for category image - using icon for demo */}
                    <cat.icon className="h-12 w-12 text-slate-400 group-hover:scale-110 transition-transform duration-300 opacity-50" />
                    <img 
                      src={`https://placehold.co/200x200/png?text=${cat.name.split(' ')[0]}`} 
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <CardContent className="p-3 text-center md:text-left">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate group-hover:text-orange-500">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {cat.count} Restaurants
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR RESTAURANTS (Logos) */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Popular Restaurants
        </h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {[
            { name: "McDonald's", color: "bg-red-600" },
            { name: "Papa Johns", color: "bg-green-700" },
            { name: "KFC", color: "bg-red-700" },
            { name: "Texas Chicken", color: "bg-blue-600" },
            { name: "Burger King", color: "bg-orange-600" },
          ].map((brand) => (
            <div key={brand.name} className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className={`flex-1 flex items-center justify-center ${brand.color} text-white font-bold text-xl`}>
                {brand.name.charAt(0)}
              </div>
              <div className="h-8 bg-orange-500 flex items-center justify-center">
                <span className="text-[10px] md:text-xs font-bold text-white truncate px-1">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 5. KNOW MORE ABOUT US SECTION */}
      <KnowMoreSection />

    </div>
  );
}