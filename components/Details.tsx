"use client";

import React from "react";
import { Truck, ShieldCheck, Wallet, Phone, Box } from "lucide-react";

const Container = ({ children }) => (
  <div className="flex flex-wrap justify-center items-center gap-10 md:gap-8 px-8 py-10 max-w-screen-xl mx-auto md:py-20">
    {children}
  </div>
);

const Item = ({ children }) => (
  <div className="flex flex-col items-center text-center">{children}</div>
);

const IconContainer = ({ children }) => (
  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-black rounded-full bg-gray-900 text-white">
    {children}
  </div>
);

const Text = ({ children }) => (
  <div className="text-xs md:text-sm max-w-[80px]">{children}</div>
);

const DetailItem = ({ icon, text }) => (
  <Item>
    <IconContainer>{icon}</IconContainer>
    <Text>{text}</Text>
  </Item>
);

const Details = () => {
  return (
    <Container>
      <DetailItem icon={<Truck />} text="Free Shipping" />
      <DetailItem icon={<Wallet />} text="Cash On Delivery" />
      <DetailItem icon={<ShieldCheck />} text="Secured Payments" />
      <DetailItem icon={<Phone />} text="Easy Support" />
      <DetailItem icon={<Box />} text="Easy Returns" />
    </Container>
  );
};

export default Details;
