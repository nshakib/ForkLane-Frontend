import { z } from 'zod';

// §3.1 Registration - Role selection default
export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['USER', 'MANAGER']), // Admin cannot self-register §2
});

// §5.2 Order Placement - Server computes total, client sends items
export const placeOrderSchema = z.object({
  restaurantId: z.string().uuid(),
  items: z.array(z.object({
    menuItemId: z.string().uuid(),
    quantity: z.number().int().positive(),
  })).min(1, "Cart cannot be empty"),
});

// §9 Review Schema
export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(10).max(500),
});