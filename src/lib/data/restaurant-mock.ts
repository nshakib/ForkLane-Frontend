// lib/data/restaurant-mock.ts
import { Restaurant } from "@/lib/types/restaurant";

export const mockRestaurant: Restaurant = {
  slug: "mcdonalds-east-london",
  name: "McDonald's East London",
  tagline: "I'm lovin' it!",
  rating: 3.4,
  reviewCount: 1360,
  minOrder: 12,
  deliveryTime: "20-25",
  isOpenUntil: "3:00 AM",
  heroImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=2000",
  categories: ["Offers", "Burgers", "Fries", "Snacks", "Salads", "Cold drinks", "Happy Meal®", "Desserts", "Hot drinks", "Sauces", "Orbit®"],
  offers: [
    { id: 1, title: "First Order Discount", discount: "-20%", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=500" },
    { id: 2, title: "Vegan Discount", discount: "-20%", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=500" },
    { id: 3, title: "Free ice Cream Offer", discount: "-100%", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=500" },
  ],
  menu: {
    Burgers: [
      { id: 101, name: "Royal Cheese Burger with extra Fries", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500" },
      { id: 102, name: "The classics for 3", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=500" },
      { id: 103, name: "The classics for 3", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=500" },
    ],
    Fries: [
      { id: 201, name: "Royal Cheese Burger with extra Fries", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?auto=format&fit=crop&q=80&w=500" },
      { id: 202, name: "The classics for 3", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?auto=format&fit=crop&q=80&w=500" },
    ],
    "Cold Drinks": [
      { id: 301, name: "Royal Cheese Burger with extra Fries", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=500" },
      { id: 302, name: "The classics for 3", desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: 23.10, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=500" },
    ]
  },
  deliveryInfo: [
    { day: "Monday", time: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
    { day: "Tuesday", time: "8:00 AM–3:00 AM" },
    { day: "Wednesday", time: "8:00 AM–3:00 AM" },
    { day: "Thursday", time: "8:00 AM–3:00 AM" },
    { day: "Friday", time: "8:00 AM–3:00 AM" },
    { day: "Saturday", time: "8:00 AM–3:00 AM" },
    { day: "Sunday", time: "8:00 AM–12:00 AM" },
  ],
  estimatedDelivery: "20 min",
  contact: {
    phone: "+934443-43",
    website: "http://mcdonalds.uk/",
    address: "Tooley St, London Bridge, London SE1 2TF, United Kingdom"
  },
  reviews: [
    { id: 1, user: "St Gix", location: "South London", date: "24th September, 2023", rating: 5, text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying." },
    { id: 2, user: "St Gix", location: "South London", date: "24th September, 2023", rating: 5, text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying." },
    { id: 3, user: "St Gix", location: "South London", date: "24th September, 2023", rating: 5, text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying." },
  ]
};