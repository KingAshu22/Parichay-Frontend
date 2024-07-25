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
      <div className="bg-gray-900 fixed bottom-2 left-20 opacity-75 right-8 rounded-3xl w-60">
        <nav className="container w-60 pl-2 pr-2 py-2">
          <div className="flex justify-between">
            {navItems.map(({ path, icon, label }) => (
              <Link
                href={path}
                key={path}
                className={`flex flex-col items-center justify-center text-white py-2 ${
                  pathname === path ? "bg-red-500 px-2 rounded-3xl" : ""
                }`}
              >
                {icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <header className="bg-gray-800 sticky top-0 z-50">
        <div className="flex justify-between items-center py-2 px-2 pl-32">
          <Link
            href="/"
            className="text-white text-lg font-bold tracking-widest"
            passHref
          >
            PARICHAY DESIGNER
          </Link>
          {/* <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
            <input
              className="outline-none max-sm:max-w-[120px] bg-transparent"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="text-white cursor-pointer h-4 w-4 hover:text-red-1" />
            </button>
          </div> */}
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
