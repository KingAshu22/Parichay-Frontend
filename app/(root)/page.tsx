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
      <div className="desktop-header ml-2 mr-2">
        <div className="desktop-images">
          {desktopImages.map((image, index) => (
            <a key={index} href={image.link}>
              <img
                className="rounded-lg"
                src={image.src}
                alt={`Image ${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="mobile-bottom-nav">
        <Carousel images={mobileImages} />
      </div>
      <Collections />
      <ProductList />
      <div className="desktop-header instagram-embed-container my-8 mx-8 flex justify-center">
        <iframe
          src="https://www.instagram.com/parichaydesigner/embed"
          height="1200"
          scrolling="no"
          className="w-full"
        ></iframe>
      </div>
      <div className="mobile-bottom-nav instagram-embed-container my-8 mx-8 flex justify-center">
        <iframe
          src="https://www.instagram.com/parichaydesigner/embed"
          height="440"
          scrolling="no"
          className="w-full"
        ></iframe>
      </div>
      <div className="desktop-header">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://cdn.shopify.com/s/files/1/1746/5485/files/hn.webp?v=1675403410"
          alt="Header Image"
        />
      </div>
      <div className="mobile-bottom-nav">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://cdn.shopify.com/s/files/1/1746/5485/files/image_2.png?v=1675403265"
          alt="Mobile Image"
        />
      </div>
      <Details />
    </>
  );
}

export const dynamic = "force-dynamic";
