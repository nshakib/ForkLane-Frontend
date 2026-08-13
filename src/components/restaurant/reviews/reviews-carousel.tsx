import { Star, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Review } from '@/lib/types/restaurant';

interface ReviewsCarouselProps {
  reviews: Review[];
  overallRating: number;
  totalReviews: number;
}


export function ReviewsCarousel({ reviews, overallRating, totalReviews }: ReviewsCarouselProps) {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Reviews</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full bg-orange-500 text-white border-none hover:bg-orange-600"><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon" className="rounded-full bg-orange-500 text-white border-none hover:bg-orange-600"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review: Review) => (
          <Card key={review.id} className="p-5 bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 border border-orange-200">
                  <AvatarFallback className="bg-orange-100 text-orange-600">{review.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">{review.user}</p>
                  <p className="text-xs text-orange-500">{review.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
              <Clock className="h-3 w-3" /> {review.date}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {review.text}
            </p>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center py-6 space-y-2">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">{overallRating}</span>
        <div className="flex text-yellow-400">
           {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < Math.floor(overallRating) ? 'fill-current' : 'text-slate-300'}`} />
          ))}
        </div>
        <span className="text-sm text-slate-500">{totalReviews} reviews</span>
      </div>
    </section>
  );
}