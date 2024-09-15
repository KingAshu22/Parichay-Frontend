import Head from "next/head";

const ReturnRefundPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Return & Refund Policy - Anaiza International</title>
        <meta
          name="description"
          content="Return and Refund Policy for Anaiza International e-commerce website."
        />
      </Head>
      <h1 className="text-3xl font-semibold mb-4">Returns and Refunds</h1>
      <p className="mb-6">No Returns & Refunds</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Returns & Exchanges</h2>
        <p className="mb-4">
          We do not offer refund, if you do not like the product purchased from
          our website. Please refer to the details, process, and conditions
          below.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>No Return or Refund if you do not like the product.</li>
          <li>No Exchange with another product.</li>
          <li>No Return or Refund if the product doesn't fit you well.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-4">
          For any further queries or assistance, you can reach us at:
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+917021388809" className="text-blue-500">
            +917021388809
          </a>{" "}
          (Operates from 10 AM to 6 PM, Monday through Saturday)
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:anaizainternational@gmail.com"
            className="text-blue-500"
          >
            anaizainternational@gmail.com
          </a>
        </p>
      </div>
      <p className="text-sm text-gray-600">
        Please note, by purchasing from Anaiza International, you as the buyer
        agree to our shopping terms, conditions, and policies.
      </p>
    </div>
  );
};

export default ReturnRefundPage;
