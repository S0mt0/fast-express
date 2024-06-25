"use client";

import { useCheckoutFormData } from "../../../sdk/hooks";
import { PayPal } from "./paypal";
import { CardPay } from "./card";

export const CheckoutForm = () => {
  const data = useCheckoutFormData();

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <section className="pt-28 sm:pt-40 px-6">
      <div className="w-full max-w-[900px] mx-auto">
        <div className="rounded-tl-lg rounded-tr-lg px-4 py-5 bg-green-700">
          <h3 className="border-b capitalize font-bold pb-1 text-orange-300">
            Shipment overview
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-2 capitalize">
            <div className="text-white text-sm">
              <span className="font-bold">Shipment: </span>{" "}
              <span>
                {data.shipment ? data.shipment?.trackingId : "unavailable"}
              </span>
            </div>
            <div className="text-white text-sm">
              <span className="font-bold">Status: </span>{" "}
              <span>
                {data.shipment ? data.shipment?.status.status : "unavailable"}
              </span>
            </div>
            <div className="text-white text-sm">
              <span className="font-bold">Current Location: </span>{" "}
              <span>
                {data.shipment
                  ? data.shipment?.status.location.address.addressLocality
                  : "unavailable"}
              </span>
            </div>
            <div className="text-white text-sm">
              <span className="font-bold">Fee: </span>{" "}
              <span>
                {data.shipment && data.shipment.status.bill
                  ? currencyFormatter.format(data.shipment?.status?.bill)
                  : "unavailable"}
              </span>
            </div>
          </div>
        </div>

        {/* <CardPay {...data} /> */}
        <PayPal />
      </div>
    </section>
  );
};

export default CheckoutForm;
