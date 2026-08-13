"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import {  Ghost, Apple, Play, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  TiktokIcon, 
  SnapchatIcon 
} from "@/components/icons/brand-icons";

// Zod Schema for Email Validation
const emailSchema = z.string().email("Please enter a valid email address");

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false);

    // Validate with Zod
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.message);
      return;
    }

    // Simulate API call
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: TwitterIcon, href: "#", label: "Twitter" }, // Or X
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: TiktokIcon, href: "#", label: "TikTok" },
    { icon: Ghost, href: "#", label: "Snapchat" }, // Using Ghost as placeholder for Snapchat if needed, or custom SVG
  ];

  const legalLinks = [
    { label: "Terms and conditions", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
    { label: "Modern Slavery Statement", href: "/modern-slavery" },
  ];

  const importantLinks = [
    { label: "Get help", href: "/help" },
    { label: "Add your restaurant", href: "/partner" },
    { label: "Sign up to deliver", href: "/rider" },
    { label: "Create a business account", href: "/business" },
  ];

  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & App Download */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Order
              </span>
              <span className="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-md mt-1">
                .uk
              </span>
            </Link>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="h-12 px-4 bg-black text-white hover:bg-slate-800 border-none rounded-lg flex items-center gap-2">
                <Apple className="h-5 w-5" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px]">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
              <Button variant="outline" className="h-12 px-4 bg-black text-white hover:bg-slate-800 border-none rounded-lg flex items-center gap-2">
                <Play className="h-5 w-5 text-green-500 fill-current" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px]">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[250px]">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* 2. Newsletter Subscription */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Get Exclusive Deals in your Inbox
            </h3>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "h-12 rounded-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 pl-4 pr-10",
                      error && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {isSuccess && (
                    <div className="absolute right-3 top-3.5 text-green-500">
                      ✓
                    </div>
                  )}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-12 rounded-full bg-orange-500 hover:bg-orange-600 px-6 font-bold shadow-md shadow-orange-200 dark:shadow-none min-w-[120px]"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
                </Button>
              </div>
              
              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}
              {isSuccess && (
                <p className="text-xs text-green-600 font-medium">Thanks for subscribing!</p>
              )}
              
              <p className="text-xs text-slate-500 dark:text-slate-400">
                we wont spam, read our{" "}
                <Link href="/email-policy" className="underline hover:text-orange-500">
                  email policy
                </Link>
              </p>
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label} 
                  href={social.href}
                  className="text-slate-900 dark:text-white hover:text-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Legal Pages */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Legal Pages
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Important Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Important Links
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-orange-500">Terms</Link>
              <Link href="/pricing" className="hover:text-orange-500">Pricing</Link>
              <Link href="/do-not-sell" className="hover:text-orange-500">Do not sell or share my personal information</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}