"use client";

import Link from "next/link";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  CircleUserRound,
  Search,
  Home,
  Archive,
  ShoppingBag,
  Box,
  Heart,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";
import { useState } from "react";

export default function BottomNav() {
  const cart = useCart();
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");

  // Function to get the title based on the path
  function getTitle(path, cart) {
    switch (path) {
      case "/":
        return "Home | Parichay Designer";
      case "/wishlist":
        return "Wishlist | Parichay Designer";
      case "/search":
        return "Search | Parichay Designer";
      case "/orders":
        return "Orders | Parichay Designer";
      case "/bag":
        return `Bag (${cart.cartItems.length}) | Parichay Designer`;
      default:
        return "Parichay Designer";
    }
  }

  return (
    <>
      <div className="bg-gray-900 fixed bottom-0 left-0 right-0">
        <nav className="container mx-auto pl-10 pr-10 py-2">
          <div className="flex justify-between">
            <Link
              href="/"
              className={`flex flex-col items-center justify-center text-white py-2 ${
                pathname === "/" ? "bg-red-500 px-4 rounded-lg" : ""
              }`}
            >
              <Home />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              href="/wishlist"
              className={`flex flex-col items-center justify-center text-white py-2 ${
                pathname === "/wishlist" ? "bg-red-500 px-4 rounded-lg" : ""
              }`}
            >
              <Heart />
              <span className="text-sm">Wishlist</span>
            </Link>
            {/* <Link
              href="/search"
              className={`flex flex-col items-center justify-center text-white py-2 ${
                pathname === "/search" ? "bg-red-500 px-4 rounded-lg" : ""
              }`}
            >
              <Search />
              <span className="text-sm">Search</span>
            </Link> */}
            <Link
              href="/orders"
              className={`flex flex-col items-center justify-center text-white py-2 ${
                pathname === "/orders" ? "bg-red-500 px-4 rounded-lg" : ""
              }`}
            >
              <Box />
              <span className="text-sm">Orders</span>
            </Link>
            <Link
              href="/bag"
              className={`flex flex-col items-center justify-center text-white py-2 ${
                pathname === "/bag" ? "bg-red-500 px-4 rounded-lg" : ""
              }`}
            >
              <ShoppingBag />
              <span className="text-sm">Bag</span>
              {cart.cartItems.length > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute -top-1 right-6">
                  {cart.cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
      <header className="bg-gray-800 sticky top-0 z-50">
        <Head>
          <title>{getTitle(pathname, cart)}</title>
        </Head>
        <div className="flex justify-between items-center py-4 px-8">
          <Link
            href="/"
            className="text-white text-lg font-bold -ml-5"
            passHref
          >
            Parichay Designer
          </Link>
          <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
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
          </div>
          <div className="flex items-center">
            {user ? (
              <UserButton afterSignOutUrl="/sign-in" />
            ) : (
              <Link className="ml-10" href="/sign-in">
                <CircleUserRound />
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
