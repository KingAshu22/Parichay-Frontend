import Carousel from "@/components/Carousuel";
import Collections from "@/components/Collections";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const desktopImages = [
  {
    src: "1.webp",
    link: "/collections/662e71937ff2084190d84d53",
  },
  {
    src: "2.webp",
    link: "/collections/662d273f8509622013f73e66",
  },
  {
    src: "3.webp",
    link: "/collections/662d587b4395ec178081ba81",
  },
];

const mobileImages = [
  {
    src: "1.webp",
    link: "/collections/662e71937ff2084190d84d53",
  },
  {
    src: "2.webp",
    link: "/collections/662d273f8509622013f73e66",
  },
  {
    src: "3.webp",
    link: "/collections/662d587b4395ec178081ba81",
  },
];

export default function Home() {
  return (
    <>
      <Collections />
      <ProductList />
      <Details />
    </>
  );
}

export const dynamic = "force-dynamic";
