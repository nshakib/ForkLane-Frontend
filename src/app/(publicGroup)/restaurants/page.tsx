import Link from 'next/link';

export default function RestaurantsListPage() {
  const restaurants = [
    { slug: 'mcdonalds-east-london', name: "McDonald's East London" },
    { slug: 'kfc-west-london', name: 'KFC West London' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurants.map((r) => (
          <Link 
            key={r.slug} 
            href={`/restaurants/${r.slug}`}
            className="p-4 border rounded-lg hover:border-orange-500 transition-colors"
          >
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}