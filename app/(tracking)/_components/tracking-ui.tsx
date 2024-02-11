"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import moment from "moment";
import { ChevronDown, ChevronUp, Info, Newspaper } from "lucide-react";

import { useFetchShipmentFunc } from "../../../sdk/hooks";
import { Event, EventStatus, faq } from ".";
import { formatLocalTime } from "../../../sdk/utils";
import { PrintButton } from "@/components/print-button";
import { cn } from "@/lib/utils";
import { TrackFormInput } from "./track-form-input";

export const TrackingUI = () => {
  const trackingId = useSearchParams().get("tracking-id")?.trim();

  const { fetchShipment, error, loading, shipment, success, unknownShipment } =
    useFetchShipmentFunc();

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

  return (
    <div>
      <div className="my-10 mx-7 bg-white px-6">
        <h2 className="text-center font-light text-2xl sm:text-[2rem] md:text-[2.6rem] uppercase font-title">
          {!error ? "Track: Express" : "Track & Trace"}
        </h2>
      </div>
      <div className="bg-[#f2f2f2] min-h-[40%] py-7 px-6">
        <div className="w-full max-w-xl mx-auto">
          <TrackFormInput />
        </div>
        {loading ? (
          <div className="mt-14 mb-6 flex justify-center items-center">
            <Image
              width={100}
              height={100}
              priority
              src="/loaders/loader-01.svg"
              alt="please wait..."
            />
          </div>
        ) : (
          <>
            <div className="w-full max-w-[810px] mx-auto mt-6 border border-[#1d1d1d8a] rounded-[3px] bg-white">
              {success && shipment?.trackingId ? (
                <>
                  {/* 1 */}
                  <div className="flex justify-between flex-col md:flex-row gap-y-6 gap-x-4 p-4 border-b border-[#1d1d1d8a] sm:p-6">
                    <div>
                      <p className="text-[0.8rem] mb-[1.1rem]">
                        Tracking Code: {shipment.trackingId}
                      </p>
                      <p className="text-[0.8rem] mb-[1.1rem]">
                        This shipment is handled by:{" "}
                        <span className="font-semibold">
                          DHLShipping Express
                        </span>
                      </p>
                    </div>
                    <PrintButton />
                  </div>
                  {/* - 2*/}
                  <div className="p-4 sm:p-6 border-b border-[#1d1d1d8a]">
                    <h2
                      // style={{
                      //   color:
                      //     shipment.status.status === "delivered"
                      //       ? "#67A31D"
                      //       : shipment.status.status === "pending"
                      //       ? "#6b6b6b"
                      //       : shipment.status.status === "shipping"
                      //       ? "#aaaaaa"
                      //       : "#d40511",
                      // }}
                      className={cn(
                        "sm:text-[1.1rem] md:text-xl flex justify-between items-center cursor-default leading-normal capitalize mb-2 hover:text-[#eb131e] text-base ",
                        shipment.status.status === "delivered"
                          ? "text-[#67A31D]"
                          : shipment.status.status === "pending"
                          ? "text-[#6b6b6b]"
                          : shipment.status.status === "shipping"
                          ? "text-[#aaaaaa]"
                          : "text-[#d40511]"
                      )}
                    >
                      {shipment.status.status}
                    </h2>

                    <p className="text-[0.7rem] sm:text-[0.8rem] block leading-normal mb-[0.8rem]">
                      {moment(shipment.status.timestamp).format("LL")}{" "}
                      {formatLocalTime(shipment.status.timestamp)}, Service
                      Area:{" "}
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
                      <div className="w-full h-2 bg-#32832bd3 relative before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-2 before:h-[0.9rem] before:bg-inherit before:rounded-br-lg" />
                      <div className="w-full h-2 bg-#32832bd3 rounded-tr-lg rounded-br-lg" />
                      <div className="w-full h-2 bg-#32832bd3 rounded-tr-lg relative before:absolute before:content-[''] before:right-0 before:top-0 before:w-2 before:h-[0.9rem] before:bg-inherit before:rounded-tr-lg" />
                    </div>

                    <div className="text-center">
                      <strong className="text-[0.7rem] sm:text-[0.8rem] block leading-normal">
                        Destination Service Area:{" "}
                        <span className="uppercase">
                          {shipment.destination.address.addressLocality}
                        </span>
                      </strong>
                    </div>
                  </div>
                  {/* -3 */}
                  <div className="p-6 border-b border-[#1d1d1d8a]">
                    <h3
                      onClick={() => toggleTab("a")}
                      className="text-[1.2rem] flex justify-between flex-row items-center cursor-default leading-normal capitalize text-base sm:text-[1.1rem] md:text-[1.2rem] hover:text-[#eb131e]"
                    >
                      <span>More Shipment Details</span>
                      <span className="ml-10">
                        {activeTab.a ? (
                          <ChevronUp className="hover:text-[#eb131e] text-[#d40511]" />
                        ) : (
                          <ChevronDown className="hover:text-[#eb131e] text-[#d40511]" />
                        )}
                      </span>
                    </h3>
                    {activeTab.a && (
                      // more details
                      <div>
                        {/* 1 title */}
                        <div className="flex flex-col md:flex-row gap-y-4 gap-x-2 bg-[#f2f2f2] mb-2 p-[6px]">
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
                          <p className="flex-[0.6]">
                            {moment(shipment.status.timestamp).format(
                              "MMMM D, YYYY"
                            )}{" "}
                            {formatLocalTime(shipment.status.timestamp)}
                          </p>
                        </div>
                        {/* 2 row */}
                        <div className="flex flex-col md:flex-row gap-y-4 gap-x-2">
                          {/* col1 */}
                          <p className="text-sm flex-[0.4] leading-normal">
                            To protect your privacy, more delivery details are
                            available after validation
                          </p>
                          {shipment.status.status === "seized" && (
                            // col2
                            <p className="flex-[0.6] leading-normal">
                              <Link
                                href={"/checkout"}
                                className="text-white text-sm font-semibold inline-flex items-center gap-2 bg-[#d40511] rounded-sm py-2 px-4"
                              >
                                <span>Redeem Shipment</span> <Newspaper />
                              </Link>
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* - 4*/}
                  <div className="p-6 border-b border-[#1d1d1d8a]">
                    <h3
                      onClick={() => toggleTab("b")}
                      className="text-[1.2rem] flex justify-between flex-row items-center cursor-default leading-normal capitalize text-base sm:text-[1.1rem] md:text-[1.2rem] hover:text-[#eb131e]"
                    >
                      <span>All Shipment Updates</span>
                      <span className="ml-10">
                        {activeTab.b ? (
                          <ChevronUp className="hover:text-[#eb131e] text-[#d40511]" />
                        ) : (
                          <ChevronDown className="hover:text-[#eb131e] text-[#d40511]" />
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
                </>
              ) : null}

              {/* - */}
              {/* - */}
              {error && (
                <div className="flex gap-4 sm:gap-[1.7rem] border-none">
                  <div>
                    <Info className="text-[1.3rem] sm:text-[1.7rem]" />
                  </div>
                  <div>
                    <h4 className="text-sm">{unknownShipment}</h4>
                    <p className="my-4 text-sm">
                      Sorry, your tracking attempt was not successful. Please
                      check your tracking number.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {!loading && (
        <div className="w-full max-w-2xl mx-auto text-center py-4 border-b border-[]#cacaca">
          <p className="leading-normal font-extralight mb-9 text-[0.8rem] sm:text-[0.9rem]">
            If you would prefer to speak to someone personally about the
            location of your shipment, please
            <br />
            <a
              href="mailto:DHLShipping.office@gmail.com"
              rel="noreferrer noopener"
              className="underline text-[#d40511]"
            >
              contact DHLShipping Express Customer Service
            </a>
          </p>

          <h2 className="font-title text-base sm:text-xl md:text-2xl">
            Quick Answers to Common Tracking Questions
          </h2>
        </div>
      )}

      {!loading && success && (
        <div className="w-full max-w-2xl mb-3 mx-auto text-sm">
          {faq.faqSuccess.map((data, i) => (
            <div className="py-4 border-b border-[#cacaca]" key={i}>
              <h3
                onClick={() => toggleQA(i)}
                className="sm:text-sm flex justify-between items-center cursor-default leading-tight sm:leading-normal hover:text-[#d40511] group"
              >
                <span>{data.q}</span>
                <span className="ml-10">
                  {activeQA === i ? (
                    <ChevronUp className="group-hover:text-red-600 text-lg text-[#d40511]" />
                  ) : (
                    <ChevronDown className="group-hover:text-red-600 text-lg text-[#d40511]" />
                  )}
                </span>
              </h3>
              {activeQA === i && (
                <p className="my-8 sm:my-10 text-sm sm:text-base sm:leading-normal text-black/65">
                  {data.a}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="w-full max-w-2xl mb-3 mx-auto text-sm">
          {faq.faqNotFound.map((data, i) => (
            <div className="py-4 border-b border-[#cacaca]" key={i}>
              <h3
                onClick={() => toggleQA(i)}
                className="sm:text-sm flex justify-between items-center cursor-default leading-tight sm:leading-normal hover:text-[#d40511] group"
              >
                <span>{data.q}</span>
                <span className="ml-10">
                  {activeQA === i ? (
                    <ChevronUp className="group-hover:text-red-600 text-lg text-[#d40511]" />
                  ) : (
                    <ChevronDown className="group-hover:text-red-600 text-lg text-[#d40511]" />
                  )}
                </span>
              </h3>
              {activeQA === i && (
                <p className="my-8 sm:my-10 text-sm sm:text-base sm:leading-normal text-black/65">
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
