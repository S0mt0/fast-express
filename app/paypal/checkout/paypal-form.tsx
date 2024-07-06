"use client";

import Image from "next/image";

export const PayPalForm = () => {
  return (
    <section className="w-[93%] max-w-lg p-2 flex flex-col items-center justify-center gap-8">
      <div>
        <Image
          src={"/images/paypal-logo.png"}
          alt="paypal logo"
          width={300}
          height={300}
          className="h-auto w-32"
        />

        <p className="text-xl font-medium">Pay With PayPal</p>
      </div>

      <div className="w-full">
        <input
          type="email"
          placeholder="Email address"
          className="p-4 text-lg border border-gray-300 rounded-sm w-full mb-4"
        />
        <input
          type="password"
          placeholder="Your password"
          className="p-4 text-lg border border-gray-300 rounded-sm w-full"
        />

        <p className="text-[12px] text-[#265be1] my-4">Forgot email?</p>

        <button className="rounded-full p-2 text-white bg-[#0370DF] w-full">
          Log In
        </button>
      </div>
    </section>
  );
};
