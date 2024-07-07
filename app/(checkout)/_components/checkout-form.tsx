"use client";

import Image from "next/image";
import { useState } from "react";

import { useCheckoutFormData } from "../../../sdk/hooks";
import { PayPal } from "./paypal";
import { CardPay } from "./card";
import { cn } from "@/lib/utils";

type Tabs = "card" | "paypal";

export const CheckoutForm = () => {
  const data = useCheckoutFormData();

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [active, setActive] = useState<Tabs>("card");
  const toggleActive = (tab: Tabs) => setActive(tab);

  return (
    <section className="pt-28 sm:pt-40 px-6">
      <div className="w-full max-w-[900px] mx-auto">
        <div className="w-full">
          <p className=" flex text-sm items-center justify-between gap-2 p-3 text-white bg-[#004F6D]">
            <span>
              #{data.shipment ? data.shipment?.trackingId : "Unavailable"}
            </span>
            <span>
              {data.shipment && data?.shipment?.status?.bill
                ? currencyFormatter.format(
                    parseFloat(data?.shipment?.status?.bill.toString())
                  )
                : "$ Unavailable"}
            </span>
          </p>
        </div>

        <div className="w-full mt-8 bg-white border-x border-b rounded-sm">
          <div className="flex">
            <div
              className={cn(
                "flex-1 bg-slate-200/70 border-t border-b border-r rounded-t flex items-center justify-center gap-2 p-1",
                active === "card" &&
                  "bg-white border-b-0 shadow-[0_-2px_0_0_#004F6D]"
              )}
              onClick={() => toggleActive("card")}
            >
              <Image
                src={"/images/visa-logo.jpg"}
                alt="credit cards logos"
                width={200}
                height={200}
                className="h-[15px] sm:h-[17px] w-[22px] sm:w-[28px]"
              />
              <Image
                src={"/images/master-card-logo.jpg"}
                alt="credit cards logos"
                width={200}
                height={200}
                className="h-[15px] sm:h-[17px] w-[22px] sm:w-[28px]"
              />
              <Image
                src={"/images/discover.png"}
                alt="credit cards logos"
                width={200}
                height={200}
                className="h-[15px] sm:h-[17px] w-[22px] sm:w-[28px]"
              />
              <Image
                src={"/images/amex-logo.jpg"}
                alt="credit cards logos"
                width={200}
                height={200}
                className="h-[15px] sm:h-[17px] w-[22px] sm:w-[28px]"
              />
            </div>
            <div
              className={cn(
                "flex-1 bg-slate-200/70 border-t border-b border-l rounded-t flex items-center justify-center gap-2 p-1",
                active === "paypal" &&
                  "bg-white border-b-0 shadow-[0_-2px_0_0_#004F6D]"
              )}
              onClick={() => toggleActive("paypal")}
            >
              <Image
                src={"/images/paypal-logo.png"}
                alt="paypal logo"
                width={200}
                height={200}
                className="h-[20px] sm:h-[35px] w-[50px] sm:w-[80px]"
              />
            </div>
          </div>

          {active === "card" ? <CardPay {...data} /> : <PayPal {...data} />}
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
