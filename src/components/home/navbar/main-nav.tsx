"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, LogOut, Settings, CreditCard, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/store/use-navbar-store";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

// Route Configuration
const LOGGED_OUT_ROUTES = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse Menu" },
  { href: "/offers", label: "Special Offers" },
  { href: "/restaurants", label: "Restaurants" },
];

const LOGGED_IN_ROUTES = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse Menu" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/orders", label: "Track Order" },
  { href: "/blog", label: "Blog" },
];

export function MainNav() {
  const pathname = usePathname();
  const { isAuthenticated, user, login, logout } = useNavbarStore();
  const [isOpen, setIsOpen] = useState(false);

  // Determine routes based on auth state
  const routes = isAuthenticated ? LOGGED_IN_ROUTES : LOGGED_OUT_ROUTES;

  // Mock Login for demonstration
  const handleMockLogin = () => {
    login({ name: "Aycan", email: "aycan@example.com", avatar: "/avatars/aycan.png" });
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Order
          </span>
          <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-md mt-1 group-hover:bg-orange-600 transition-colors">
            .uk
          </span>
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-200 dark:shadow-none"
                    : "text-slate-600 dark:text-slate-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-slate-900"
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </div>

        {/* 3. Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Auth Section */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-orange-100 text-orange-600">
                      {user?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              onClick={handleMockLogin}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 hidden sm:flex"
            >
              <User className="mr-2 h-4 w-4" />
              Login / Signup
            </Button>
          )}

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
              <div className="p-6 border-b">
                <SheetTitle className="text-left flex items-center gap-1">
                   <span className="text-xl font-bold">Order</span>
                   <span className="bg-orange-500 text-white text-[10px] px-1 rounded">.uk</span>
                </SheetTitle>
              </div>
              <div className="flex flex-col gap-2 p-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)} // Ensures menu closes on click
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === route.href
                        ? "bg-orange-50 text-orange-600"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                
                {!isAuthenticated && (
                  <Button 
                    onClick={() => { handleMockLogin(); setIsOpen(false); }}
                    className="mt-4 bg-slate-900 text-white w-full"
                  >
                    Login / Signup
                  </Button>
                )}
                 {isAuthenticated && (
                  <Button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    variant="outline"
                    className="mt-4 text-red-600 border-red-200 w-full"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}