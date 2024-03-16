"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import useCart from "@/lib/hooks/useCart";
import { Heart, Home, ShoppingBag, Box, Search } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const cart = useCart();

  const navItems = [
    { path: "/", icon: <Home />, label: "Home" },
    { path: "/wishlist", icon: <Heart />, label: "Wishlist" },
    { path: "/orders", icon: <Box />, label: "Orders" },
    {
      path: "/bag",
      icon: (
        <div className="relative">
          <ShoppingBag />
          {cart.cartItems.length > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute -top-1 right-6">
              {cart.cartItems.length}
            </span>
          )}
        </div>
      ),
      label: "Bag",
    },
  ];

  return (
    <div className="bg-gray-900 fixed bottom-0 left-0 right-0">
      <nav className="container mx-auto pl-10 pr-10 py-2">
        <div className="flex justify-between">
          {navItems.map(({ path, icon, label }) => (
            <Link href={path} key={path}>
              <a
                className={`flex flex-col items-center justify-center text-white py-2 ${
                  router.pathname === path ? "bg-red-500 px-4 rounded-lg" : ""
                }`}
              >
                {icon}
                <span className="text-sm">{label}</span>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
