// Declare Razorpay property on window object
declare global {
  interface Window {
    Razorpay: any; // Adjust the type accordingly if possible
  }
}

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useCart from "@/lib/hooks/useCart";

export default function PayButton({
  amount,
  name,
  user,
  email,
  mobile,
  streetAddress,
  city,
  postalCode,
  country,
}: {
  amount: number;
  name: string;
  user: any; // Adjust the type accordingly
  email: string;
  mobile: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
}) {
  const router = useRouter();

  const cart = useCart();
  const cartProducts = cart.cartItems;

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [keyId, setKeyId] = useState("");

  useEffect(() => {
    async function fetchConfig() {
      try {
        if (!user) {
          router.push("sign-in");
        } else {
          const response = await axios.get("/api/config");
          setKeyId(response.data.RAZORPAY_KEY_ID);
        }
      } catch (error) {
        console.error("Error fetching config:", error);
      }
    }

    fetchConfig();
  }, []);

  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      // Make API call to the serverless API
      const data = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      }).then((t) => t.json());
      console.log(data);

      var options = {
        key: keyId,
        name: "Parichay Designer",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your Order",
        image: "https://manuarora.in/logo.png",
        handler: async function (response: any) {
          if (response.status_code == 200) {
            console.log("Inside 200");
            const saveOrder = await axios.post("/api/orders", {
              amount,
              name,
              email,
              mobile,
              streetAddress,
              city,
              postalCode,
              country,
              cartProducts,
            });
            console.log("After orders");
            if (saveOrder.status == 200) {
              router.push("/payment_success");
            } else {
              router.push("/payment_failed");
            }
          } else {
            console.log("Payment Authentication Failed");
            alert("Payment Authentication Failed");
          }
        },
        prefill: {
          name,
          email,
          contact: mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Check if Razorpay is loaded before creating paymentObject
      if (window.Razorpay) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error("Error making payment:", error);
      // Handle error gracefully
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div>
      {!isPaymentSuccess && (
        <button
          className="border rounded-lg text-body-bold text-white bg-black py-3 w-full hover:bg-white hover:text-black"
          onClick={() => makePayment()}
        >
          Pay now
        </button>
      )}
    </div>
  );
}
