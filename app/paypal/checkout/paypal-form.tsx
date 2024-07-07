"use client";

import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { useShipmentStore } from "../../../sdk/hooks";
import { BASE_URL } from "../../../sdk/utils";

export const PayPalForm = () => {
  const { shipment } = useShipmentStore();

  const [form, setForm] = useState({ email: "", password: "", trackingId: "" });
  const [pending, setPending] = useState(false);
  const [res, setRes] = useState<null | string>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((curr) => ({ ...curr, [name]: value }));
  }

  const isDisabled =
    pending || !form?.email?.trim() || !form?.password?.trim() ? true : false;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return alert("Email and password are required");
    if (!shipment) return alert("No shipment was found for this payment.");

    setForm((curr) => ({ ...curr, trackingId: shipment?.trackingId }));

    try {
      setPending(true);
      const { status } = await axios.post(`${BASE_URL}/c/paypal`, form);
      setPending(false);

      if (status >= 200 && status < 300) {
        setRes("Please wait...");
      }

      setTimeout(() => {
        setRes(null);
      }, 8000);
    } catch (error) {
      console.log("error :>> ", error);
      setRes("Something went wrong, please try again later.");
    }
  }

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

      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="p-4 text-lg border border-gray-300 rounded-sm w-full mb-4"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          className="p-4 text-lg border border-gray-300 rounded-sm w-full"
          onChange={(e) => handleChange(e)}
          required
        />

        <p className="text-[11px] text-[#2751bd] font-semibold my-4">
          Forgot email?
        </p>

        <button
          className="rounded-full p-2 text-white bg-[#0370DF] w-full cursor-pointer text-center"
          type="submit"
          disabled={isDisabled}
        >
          {pending ? (
            <Loader2 className="animate-spin w-4 h-4 text-white" />
          ) : (
            <span>Log In</span>
          )}
        </button>
        {res && <p className="text-center mt-4 text-sm text-gray-700">{res}</p>}
      </form>
    </section>
  );
};
