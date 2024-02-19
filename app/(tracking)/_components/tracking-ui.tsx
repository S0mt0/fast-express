"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import moment from "moment";
import { ChevronDown, ChevronUp, Info, Newspaper } from "lucide-react";

import { useFetchShipmentFunc } from "../../../sdk/hooks";
import { Event, EventStatus, faq } from ".";
import { formatLocalTime } from "../../../sdk/utils";
import { PrintButton } from "@/components/print-button";
import { cn } from "@/lib/utils";
import { TrackFormInput } from "@/components/track-form-input";

export const TrackingUI = () => {
  const trackingId = useSearchParams().get("tracking-id")?.trim();

  const {
    fetchShipment,
    error,
    loading,
    shipment,
    success,
    unknownShipment,
    trackingNumber,
  } = useFetchShipmentFunc();

  useEffect(() => {
    trackingId && fetchShipment(trackingId);
  }, [trackingId]);

  const [activeTab, setActiveTab] = useState({ a: false, b: false });
  const toggleTab = (tab: "a" | "b") => {
    if (tab === "a") {
      setActiveTab((prev) => ({ ...prev, a: !prev.a }));
    } else if (tab === "b") {
      setActiveTab((prev) => ({ ...prev, b: !prev.b }));
    }
  };

  const [activeQA, setActiveQA] = useState<number>(-1);
  const toggleQA = (index: number) => {
    setActiveQA((prev) => (prev === index ? -1 : index));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchShipment(trackingNumber!);
  };

  return (
    <div>
      <div className="my-10 mx-7 bg-white px-2">
        <h2 className="text-center font-light text-2xl sm:text-3xl md:text-4xl uppercase font-title">
          {!error ? "Track: Express" : "Track & Trace"}
        </h2>
      </div>
      <div className="bg-[#eeeeee] py-12 px-6">
        <div className="w-full max-w-xl mx-auto">
          <TrackFormInput handleSubmit={(e) => handleSubmit(e)} />
        </div>
        {loading ? (
          <div className="mt-12 pb-4 flex justify-center items-center">
            <Image
              width={50}
              height={50}
              priority
              src="/loaders/loader-01.svg"
              alt="please wait..."
            />
          </div>
        ) : shipment ? (
          <div className="w-full max-w-[810px] mx-auto mt-6 shadow-sm border border-stone-300 rounded-[3px] bg-white font-medium">
            {/* 1 */}
            <div className="flex justify-between flex-col md:flex-row gap-4 p-4 border-b border-stone-300 sm:p-6">
              <div>
                <p className="text-[0.8rem] mb-[1.1rem]">
                  Tracking Code: {shipment.trackingId}
                </p>
                <p className="text-[0.8rem] mb-[1.1rem]">
                  This shipment is handled by:{" "}
                  <span className="font-bold">Fastexpress-Courier</span>
                </p>
              </div>
              <PrintButton />
            </div>
            {/* - 2*/}
            <div className="p-4 sm:p-6 border-b border-stone-300">
              <p
                className={cn(
                  "sm:text-[1.1rem] md:text-xl flex justify-between items-center cursor-default leading-normal mb-2 hover:text-red-500 text-sm font-bold ",
                  shipment.status.status === "delivered"
                    ? "text-[#67A31D]"
                    : shipment.status.status === "pending"
                    ? "text-[#6b6b6b]"
                    : shipment.status.status === "shipping"
                    ? "text-[#aaaaaa]"
                    : "text-red-600"
                )}
              >
                <span className="text-base font-bold uppercase">
                  {shipment.status.status}
                </span>
              </p>

              <p className="text-[0.7rem] sm:text-[0.8rem] block leading-normal mb-[0.8rem]">
                {moment(shipment.status.timestamp).format("LL")}{" "}
                {formatLocalTime(shipment.status.timestamp)}, Service Area:{" "}
                <span className="uppercase">
                  {shipment.destination.address.addressLocality}
                </span>
              </p>

              <div>
                <strong className="text-[0.7rem] sm:text-[0.8rem] block leading-normal">
                  Origin Service Area:{" "}
                  <span className="uppercase">
                    {shipment.origin.address.addressLocality}
                  </span>
                </strong>
              </div>

              <div className="grid w-full grid-cols-3 my-2 gap-[6px]">
                <div className="w-full h-1 bg-green-700 relative rounded-tr-full rounded-br-full rounded-bl-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-1 before:h-2 before:bg-green-700 before:rounded-bl-full" />
                <div className="w-full h-1 bg-green-700 relative rounded-tr-full rounded-br-full" />
                <div className="w-full h-1 bg-green-700 relative rounded-tr-full before:content-[''] before:absolute before:right-0 before:top-0 before:w-1 before:h-2 before:bg-green-700 before:rounded-tr-full before:rounded-bl-full before:rounded-br-full" />
              </div>

              <div className="text-right">
                <strong className="text-[0.7rem] sm:text-[0.8rem] block leading-normal">
                  Destination Service Area:{" "}
                  <span className="uppercase">
                    {shipment.destination.address.addressLocality}
                  </span>
                </strong>
              </div>
            </div>
            {/* -3 */}
            <div className="p-6 border-b border-stone-300">
              <h3
                onClick={() => toggleTab("a")}
                className="text-[1.2rem] flex justify-between flex-row items-center cursor-default leading-normal capitalize sm:text-[1.1rem] md:text-[1.2rem] hover:text-red-500"
              >
                <span className="text-base font-bold">
                  More Shipment Details
                </span>
                <span className="ml-10">
                  {activeTab.a ? (
                    <ChevronUp className="hover:text-red-500 text-red-600 text-base" />
                  ) : (
                    <ChevronDown className="hover:text-red-500 text-red-600 text-base" />
                  )}
                </span>
              </h3>
              {activeTab.a && (
                // more details
                <div>
                  {/* 1 title */}
                  <div className="flex flex-col md:flex-row gap-4 bg-[#f2f2f2] mb-2 p-[6px] mt-2">
                    {/* col1 */}
                    <p className="text-sm flex-[0.4]">
                      {shipment.status.status === "delivered"
                        ? "Delivery"
                        : shipment.status.status === "seized"
                        ? "Seizure"
                        : "Status"}{" "}
                      Date / Time
                    </p>
                    {/* col2 */}
                    <p className="flex-[0.6] text-sm">
                      {moment(shipment.status.timestamp).format("MMMM D, YYYY")}{" "}
                      {formatLocalTime(shipment.status.timestamp)}
                    </p>
                  </div>
                  {/* 2 row */}
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    {/* col1 */}
                    <p className="text-sm flex-[0.4] leading-normal">
                      To protect your privacy, more delivery details are
                      available after validation
                    </p>
                    {shipment.status.status === "seized" && (
                      // col2
                      <p className="flex-[0.6] leading-normal">
                        <Link
                          href={"/redeem-shipment"}
                          className="text-white text-[0.8rem] font-semibold inline-flex items-center gap-2 bg-red-600 rounded-sm py-1 px-3"
                        >
                          <span>Redeem Shipment</span>{" "}
                          <Newspaper className="h-4 w-4" />
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* - 4*/}
            <div className="p-6 border-b border-stone-300">
              <h3
                onClick={() => toggleTab("b")}
                className="text-[1.2rem] flex justify-between flex-row items-center cursor-default leading-normal capitalize text-base sm:text-[1.1rem] md:text-[1.2rem] hover:text-red-500"
              >
                <span className="text-base font-bold">
                  All Shipment Updates
                </span>
                <span className="ml-10">
                  {activeTab.b ? (
                    <ChevronUp className="hover:text-red-500 text-red-600" />
                  ) : (
                    <ChevronDown className="hover:text-red-500 text-red-600" />
                  )}
                </span>
              </h3>
              {activeTab.b && (
                <div className="pt-[1.7rem]">
                  <EventStatus status={shipment.status} />
                  {shipment?.events?.length &&
                    shipment.events.map((event, i) => {
                      return <Event event={event} key={i} />;
                    })}
                </div>
              )}
            </div>
          </div>
        ) : trackingId && trackingNumber ? (
          <div className="w-full max-w-[810px] mx-auto mt-6 rounded-[3px] bg-white shadow-sm border border-stone-300">
            <div className="flex gap-2 sm:gap-[1.7rem] border-none p-4">
              <div>
                <Info className="text-[1.3rem] sm:text-[1.7rem]" />
              </div>
              <div>
                <h2 className="text-sm font-bold">{unknownShipment}</h2>
                <p className="my-4 text-[0.8rem] sm:text-[0.9rem]">
                  Sorry, your tracking attempt was not successful. Please check
                  your tracking number.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {!loading && trackingId && trackingNumber && (
        <div className="w-11/12 max-w-2xl mx-auto text-center mt-4 p-4 border-b border-[]#cacaca">
          <p className="leading-normal mb-9 text-[0.8rem] sm:text-[0.9rem] font-semibold">
            If you would prefer to speak to someone personally about the
            location of your shipment, please
            <br />
            <a
              href="mailto:FastExpress Courier@gmail.com"
              rel="noreferrer noopener"
              className="underline text-red-600"
            >
              contact FastExpress-Courier Customer Service
            </a>
          </p>

          <h2 className="font-title text-lg sm:text-xl md:text-2xl font-bold">
            Quick Answers to Common Tracking Questions
          </h2>
        </div>
      )}

      {!loading && success && (
        <div className="w-10/12 max-w-2xl mb-3 mx-auto text-sm">
          {faq.faqSuccess.map((data, i) => (
            <div className="py-4 border-b border-[#cacaca]" key={i}>
              <h3
                onClick={() => toggleQA(i)}
                className="font-bold flex justify-between items-center cursor-default leading-tight sm:leading-normal hover:text-red-600 group"
              >
                <span>{data.q}</span>
                <span className="ml-10">
                  {activeQA === i ? (
                    <ChevronUp className="group-hover:text-red-600 text-lg text-red-600" />
                  ) : (
                    <ChevronDown className="group-hover:text-red-600 text-lg text-red-600" />
                  )}
                </span>
              </h3>
              {activeQA === i && (
                <p className="my-8 sm:my-10 text-[0.82rem] sm:leading-normal text-black/65">
                  {data.a}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="w-10/12 max-w-2xl mb-3 mx-auto text-sm">
          {faq.faqNotFound.map((data, i) => (
            <div className="py-4 border-b border-[#cacaca]" key={i}>
              <h3
                onClick={() => toggleQA(i)}
                className="font-bold flex justify-between items-center cursor-default leading-tight sm:leading-normal hover:text-red-600 group"
              >
                <span>{data.q}</span>
                <span className="ml-10">
                  {activeQA === i ? (
                    <ChevronUp className="group-hover:text-red-600 text-lg text-red-600" />
                  ) : (
                    <ChevronDown className="group-hover:text-red-600 text-lg text-red-600" />
                  )}
                </span>
              </h3>
              {activeQA === i && (
                <p className="my-8 sm:my-10 text-[0.82rem] sm:leading-normal text-black/65">
                  {data.a}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
