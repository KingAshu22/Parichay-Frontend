"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useCart from "@/lib/hooks/useCart";
import {
  Heart,
  Home,
  ShoppingBag,
  Box,
  Search,
  CircleUserRound,
} from "lucide-react";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const cart = useCart();
  const { user } = useUser();

  const [query, setQuery] = useState("");

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
            <span className="bg-red-500 text-white rounded-3xl px-2 py-1 absolute -top-4 -right-6">
              {cart.cartItems.length}
            </span>
          )}
        </div>
      ),
      label: "Bag",
    },
  ];

  return (
    <>
      <div className="bottom-nav-container">
        <nav className="nav-container">
          {navItems.map(({ path, icon, label }) => (
            <Link
              href={path}
              key={path}
              className={`nav-item ${
                pathname === path ? "nav-item-active" : ""
              }`}
            >
              {icon}
            </Link>
          ))}
        </nav>
      </div>
      <header className="header-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="header-link" passHref>
            Anaiza International
          </Link>
          <div className="flex items-center">
            {user ? (
              <UserButton afterSignOutUrl="/sign-in" />
            ) : (
              <Link className="ml-10" href="/sign-in">
                <CircleUserRound className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
