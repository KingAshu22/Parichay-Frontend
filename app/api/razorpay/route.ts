
import { NextRequest, NextResponse } from "next/server";
import shortid from "shortid";
import Razorpay from "razorpay";

export const POST = async (req: NextRequest) => {
    try {

        const {
            amount
        }: {
            amount: number;
        } = await req.json();

        // Data validation
        if (!amount) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        // Create Razorpay order
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID.toString() : '',
            key_secret: process.env.RAZORPAY_KEY_SECRET ? process.env.RAZORPAY_KEY_SECRET.toString() : '',
        });


        const options = {
            amount: (amount * 100).toString(),
            currency: 'INR',
            receipt: shortid.generate(),
            payment_capture: 1,
        };

        const response = await razorpay.orders.create(options);
        const orderId = response.id;

        return new NextResponse(JSON.stringify({
            id: orderId,
            amount: response.amount,
            currency: response.currency,
            status: response.status,
        }), { status: 200 });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        return new NextResponse("Failed to create Razorpay order", { status: 400 });
    }
};
