"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Users, 
  Handshake, 
  LifeBuoy, 
  ChevronRight,
  BellRing,
  MapPin,
  PackageCheck,
  PlusCircle,
  Target,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Data for the FAQ Accordion
const faqs = [
  {
    question: "How does Order.UK work?",
    answer: "Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!",
    isActive: true,
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, debit cards, and digital wallets like Apple Pay and Google Pay.",
    isActive: false,
  },
  {
    question: "Can I track my order in real-time?",
    answer: "Yes! Once your order is confirmed, you can track your rider's location in real-time until they reach your doorstep.",
    isActive: false,
  },
  {
    question: "Are there any special discounts or promotions available?",
    answer: "Absolutely. Check our 'Special Offers' section or use promo codes like ORDER5 for discounts on your first order.",
    isActive: false,
  },
  {
    question: "Is Order.UK available in my area?",
    answer: "Enter your postcode at the top of the page to see if we deliver to your location. We are constantly expanding!",
    isActive: false,
  },
];

// Data for the Process Steps
const steps = [
  {
    title: "Place an Order!",
    description: "Place order through our website or Mobile app",
    icon: BellRing,
    illustration: "🛎️", // Using emoji as placeholder for the illustration
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    title: "Track Progress",
    description: "Your can track your order status with delivery time",
    icon: Target,
    illustration: "🍔",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Get your Order!",
    description: "Receive your order at a lighting fast speed!",
    icon: CheckCircle2,
    illustration: "📱",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
];

export function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Know more about us!
          </h2>
          
          {/* Tabs Navigation */}
          <Tabs defaultValue="faq" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <TabsTrigger 
                value="faq" 
                className="rounded-full py-2.5 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                Frequent Questions
              </TabsTrigger>
              <TabsTrigger 
                value="who-we-are" 
                className="rounded-full py-2.5 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                Who we are?
              </TabsTrigger>
              <TabsTrigger 
                value="partner" 
                className="rounded-full py-2.5 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                Partner Program
              </TabsTrigger>
              <TabsTrigger 
                value="help" 
                className="rounded-full py-2.5 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                Help & Support
              </TabsTrigger>
            </TabsList>

            {/* Tab Content: FAQ */}
            <TabsContent value="faq" className="mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left: Accordion List */}
                <div className="space-y-4">
                  {/* Custom Active Button Style for the first item as per design */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start h-auto py-4 px-6 bg-orange-500 text-white hover:bg-orange-600 hover:text-white rounded-xl shadow-lg shadow-orange-200 dark:shadow-none text-left font-semibold text-base"
                  >
                    How does Order.UK work?
                  </Button>

                  {faqs.slice(1).map((faq, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all font-medium border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>

                {/* Right: Process Steps Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps.map((step, index) => (
                    <Card 
                      key={index} 
                      className="border-none shadow-lg bg-white dark:bg-slate-800 overflow-hidden flex flex-col items-center text-center p-6 relative group hover:-translate-y-1 transition-transform duration-300"
                    >
                      {/* Illustration Placeholder */}
                      <div className={cn(
                        "w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner",
                        step.bgColor
                      )}>
                        {step.illustration}
                      </div>
                      
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Connector Line (Visual only for desktop) */}
                      {index < steps.length - 1 && (
                        <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                           {/* Optional: Add an arrow icon here if needed */}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

              </div>
              
              {/* Bottom Description Text */}
              <div className="mt-10 text-center max-w-2xl mx-auto">
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Order.UK simplifies the food ordering process. Browse through our diverse menu, 
                  select your favorite dishes, and proceed to checkout. Your delicious meal will be on its 
                  way to your doorstep in no time!
                </p>
              </div>
            </TabsContent>

            {/* Placeholder for other tabs */}
            <TabsContent value="who-we-are" className="mt-10 text-center py-10">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">We are Order.UK</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We are a team of food lovers and tech enthusiasts dedicated to bringing the best local restaurants to your doorstep. Our mission is to make food delivery fast, reliable, and delicious.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="partner" className="mt-10 text-center py-10">
               <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Partner with Us</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Grow your business with Order.UK. Reach thousands of new customers and manage your orders seamlessly with our partner dashboard.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 mt-4">Get Started</Button>
              </div>
            </TabsContent>

            <TabsContent value="help" className="mt-10 text-center py-10">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Help & Support</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Need assistance? Our support team is available 24/7 to help you with your orders, account, or any other queries.
                </p>
                <Button variant="outline" className="mt-4">Contact Support</Button>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
}