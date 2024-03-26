import Carousel from "@/components/Carousuel";
import Collections from "@/components/Collections";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

import Image from "next/image";

const desktopImages = [
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/Galantine_1600x550.gif?v=1706886290",
    link: "/categories",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/Winter-banner_1600x550.gif?v=1702024751",
    link: "/categories",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/desktop-banner_1600x550.jpg?v=1695371132",
    link: "/products",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/inweave-banner---2_1600x550.gif?v=1695370817",
    link: "/bag",
  },
];

const mobileImages = [
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/Mobile_fcef4528-203e-485a-aa82-f861980ad523_600x600.gif?v=1706886364",
    link: "/categories",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/Mobile__1_600x600.gif?v=1702024946",
    link: "/categories",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/mobile-banner_600x600.jpg?v=1695371151",
    link: "/products",
  },
  {
    src: "https://www.inweaveindia.com/cdn/shop/files/navratri-mobile-banner_600x600.gif?v=1695370903",
    link: "/bag",
  },
];

export default function Home() {
  return (
    <>
      <div className="desktop-header">
        <Carousel images={desktopImages} />
      </div>
      <div className="mobile-bottom-nav">
        <Carousel images={mobileImages} />
      </div>
      <Collections />
      <ProductList />
      <div className="desktop-header">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://cdn.shopify.com/s/files/1/1746/5485/files/hn.jpg?v=1675403410"
        />
      </div>
      <div className="mobile-bottom-nav">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://cdn.shopify.com/s/files/1/1746/5485/files/image_2.png?v=1675403265"
        />
      </div>
      <Details />
    </>
  );
}

export const dynamic = "force-dynamic";
