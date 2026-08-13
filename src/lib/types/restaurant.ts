// lib/types/restaurant.ts
import { z } from "zod";

// --- Schemas ---

export const MenuItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  desc: z.string(),
  price: z.number(),
  image: z.string().url(),
});

export const OfferSchema = z.object({
  id: z.number(),
  title: z.string(),
  discount: z.string(),
  image: z.string().url(),
});

export const ReviewSchema = z.object({
  id: z.number(),
  user: z.string(),
  location: z.string(),
  date: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
});

export const DeliveryDaySchema = z.object({
  day: z.string(),
  time: z.string(),
});

export const ContactSchema = z.object({
  phone: z.string(),
  website: z.string().url(),
  address: z.string(),
});

export const RestaurantSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  minOrder: z.number(),
  deliveryTime: z.string(),
  isOpenUntil: z.string(),
  heroImage: z.string().url(),
  categories: z.array(z.string()),
  offers: z.array(OfferSchema),
  menu: z.record(z.string(), z.array(MenuItemSchema)), // Record<CategoryName, Items[]>
  deliveryInfo: z.array(DeliveryDaySchema),
  estimatedDelivery: z.string(),
  contact: ContactSchema,
  reviews: z.array(ReviewSchema),
});

// --- Inferred Types ---

export type MenuItem = z.infer<typeof MenuItemSchema>;
export type Offer = z.infer<typeof OfferSchema>;
export type Review = z.infer<typeof ReviewSchema>;
export type DeliveryDay = z.infer<typeof DeliveryDaySchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Restaurant = z.infer<typeof RestaurantSchema>;