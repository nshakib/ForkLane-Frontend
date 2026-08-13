import { notFound } from 'next/navigation';
import { mockRestaurant } from '@/lib/data/restaurant-mock';
import { RestaurantHero } from '@/components/restaurant/hero/restaurant-hero';
import { MenuCategories } from '@/components/restaurant/menu/menu-categories';
import { MenuSection } from '@/components/restaurant/menu/menu-section';
import { OfferCard } from '@/components/restaurant/menu/offer-card';
import { DeliveryInfo } from '@/components/restaurant/info/delivery-info';
import { ContactInfo } from '@/components/restaurant/info/contact-info';
import { OperationalTimes } from '@/components/restaurant/info/operational-times';
import { LocationMap } from '@/components/restaurant/info/location-map';
import { ReviewsCarousel } from '@/components/restaurant/reviews/reviews-carousel';
import { SimilarRestaurants } from '@/components/restaurant/similar/similar-restaurants';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Restaurant } from '@/lib/types/restaurant';

interface RestaurantPageProps {
  params: {
    slug: string;
  };
}

export default async function RestaurantDetailsPage({ params }: RestaurantPageProps) {

  const {slug} = await params;
  // In a real app, fetch data based on params.slug
  const restaurant: Restaurant | undefined = 
    mockRestaurant.slug === slug ? mockRestaurant : undefined;

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* 1. Hero Section */}
     <div className="container mx-auto px-0 pt-0">
        <RestaurantHero data={restaurant} />
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Search Bar Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            All Offers from {restaurant.name}
          </h2>
          <div className="relative w-full md:w-64">
            <Input placeholder="Search from menu..." className="pl-10 rounded-full bg-white dark:bg-slate-900 border-slate-200" />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* 2. Sticky Categories */}
        <MenuCategories categories={restaurant.categories} />

        {/* 3. Offers Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurant.offers.map((offer) => (
            <OfferCard key={offer.id} data={offer} />
          ))}
        </section>

        {/* 4. Menu Sections */}
        {Object.entries(restaurant.menu).map(([category, items]) => (
          <MenuSection key={category} title={category} items={items} />
        ))}

        {/* 5. Info Grid (Delivery, Contact, Hours) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <DeliveryInfo info={restaurant.deliveryInfo} estimatedTime={restaurant.estimatedDelivery} />
            <ContactInfo contact={restaurant.contact} />
          </div>
          <OperationalTimes hours={restaurant.deliveryInfo} />
        </section>

        {/* 6. Map Section */}
        <LocationMap address={restaurant.contact.address} contact={restaurant.contact} />

        {/* 7. Reviews */}
        <ReviewsCarousel reviews={restaurant.reviews} overallRating={restaurant.rating} totalReviews={restaurant.reviewCount} />

        {/* 8. Similar Restaurants */}
        <SimilarRestaurants />
      </div>
    </div>
  );
}