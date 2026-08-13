import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { z } from 'zod';

// 1. Zod Schema for Location Validation
export const locationSchema = z.object({
  postcode: z.string().min(5, "Postcode must be at least 5 characters").max(10),
});

export type LocationInput = z.infer<typeof locationSchema>;

// 2. Define the User Interface
interface User {
  name: string;
  email: string;
  avatar?: string;
}

// 3. Define the NavbarState Interface (This was missing)
interface NavbarState {
  // Auth State
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;

  // Cart State
  cartItems: number;
  cartTotal: number;
  
  // Location State
  currentLocation: string;
  updateLocation: (location: string) => void;

  // UI State
  isScrolled: boolean;
  setScrolled: (val: boolean) => void;
}

// 4. Create the Store with Persist Middleware
export const useNavbarStore = create<NavbarState>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),

      // Mock Cart Data
      cartItems: 23,
      cartTotal: 79.89,

      // Location
      currentLocation: "Regent Street, A4, A4201, London",
      updateLocation: (location) => set({ currentLocation: location }),

      // Scroll effect
      isScrolled: false,
      setScrolled: (val) => set({ isScrolled: val }),
    }),
    {
      name: 'order-uk-storage', // Key in localStorage
      // Only persist auth and location, not UI state like isScrolled
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated,
        currentLocation: state.currentLocation,
        cartItems: state.cartItems,
        cartTotal: state.cartTotal
      }),
    }
  )
);