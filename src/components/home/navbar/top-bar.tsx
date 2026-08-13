"use client";

import { MapPin, ShoppingBag, Download, Sparkles } from "lucide-react";
import { useNavbarStore } from "@/store/use-navbar-store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { locationSchema } from "@/store/use-navbar-store";

export function TopBar() {
  const { cartItems, cartTotal, currentLocation, updateLocation } = useNavbarStore();
  const [newLocation, setNewLocation] = useState("");
  const [error, setError] = useState("");

  const handleLocationChange = () => {
    const result = locationSchema.safeParse({ postcode: newLocation });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError("");
    updateLocation(`London, ${newLocation.toUpperCase()}`);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs hidden md:block">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between text-slate-600 dark:text-slate-400">
        
        {/* Left: Promo */}
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="h-3 w-3 text-orange-500" />
          <span>
            Get 5% off your first order, Promo:{" "}
            <span className="text-orange-600 font-bold">ORDER5</span>
          </span>
        </div>

        {/* Center: Location */}
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          <span className="truncate max-w-[200px]">{currentLocation}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-orange-600 hover:underline font-medium ml-1">
                Change Location
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 p-3">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold">Enter Postcode</label>
                <Input 
                  placeholder="e.g. EC4R 3TE" 
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="h-8 text-sm"
                />
                {error && <p className="text-red-500 text-[10px]">{error}</p>}
                <Button size="sm" onClick={handleLocationChange} className="bg-orange-500 hover:bg-orange-600 h-8">
                  Update
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right: Cart Summary */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="h-4 w-4 text-green-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] rounded-full h-3 w-3 flex items-center justify-center">
                {cartItems}
              </span>
            </div>
            <span className="font-medium text-slate-900 dark:text-white">{cartItems} Items</span>
          </div>
          
          <div className="flex items-center bg-green-600 text-white rounded-full pl-3 pr-1 py-0.5 gap-2">
            <span className="font-bold">GBP {cartTotal}</span>
            <div className="bg-green-700 rounded-full p-1">
              <Download className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}