import { cn } from "@/lib/utils";
import { countries } from "countries-list";
import { CreditCard } from "lucide-react";
import Image from "next/image";

export const CardPay = (props: any) => {
  const buttonText = () => {
    if (props.isSubmitting) {
      return "Please wait...";
    } else if (props.success) {
      return "Payment successful";
    }

    return "Make Payment";
  };

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  // List of all countries
  const countriesOptions = Object.values(countries).map(
    (country) => country.name
  );

  return (
    <form
      className="w-full rounded-lg mt-6 bg-stone-100"
      onSubmit={(e) => props.handleSubmit(e)}
    >
      <div className="flex flex-col-reverse sm:flex-row border-b p-4 w-full justify-between gap-4">
        <div className="flex gap-2 items-center text-sm font-medium">
          <CreditCard className="h-5 w-5 text-red-600" />
          Credit or debit
        </div>
        <div className="flex gap-2">
          <Image
            src={"/images/discover.png"}
            alt="credit card"
            width={60}
            height={20}
            className="max-w-[200px] max-h-6 h-auto"
          />
          <Image
            src={"/images/mastercard.png"}
            alt="credit card"
            width={60}
            height={20}
            className="max-w-[200px] max-h-6 h-auto"
          />
          <Image
            src={"/images/visa.png"}
            alt="credit card"
            width={60}
            height={20}
            className="max-w-[200px] max-h-6 h-auto"
          />
        </div>
      </div>

      {/* form body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        <div>
          <div className="flex flex-col gap-3">
            <p>
              <input
                type="text"
                placeholder="Card number"
                value={props.form.cardNumber}
                onChange={(e) => props.setInputOnlyIfTypeIsNumber(e)}
                name="cardNumber"
                className="w-full bg-white border p-2"
                required
              />
            </p>
            <div className="flex gap-2">
              <p className="flex items-center border bg-white flex-1 justify-center">
                <input
                  type="text"
                  name="expMonth"
                  placeholder="MM"
                  value={props.form.expMonth}
                  onChange={(e) => props.setInputOnlyIfTypeIsNumber(e)}
                  maxLength={2}
                  className="w-full bg-white text-center p-2"
                  required
                />
                <span className="text-stone-400">/</span>
                <input
                  type="text"
                  name="expYear"
                  placeholder="YY"
                  value={props.form.expYear}
                  onChange={(e) => props.setInputOnlyIfTypeIsNumber(e)}
                  maxLength={2}
                  className="w-full bg-white text-center p-2"
                  required
                />
              </p>
              <p className="flex-1">
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={props.form.cvv}
                  onChange={(e) => props.setInputOnlyIfTypeIsNumber(e)}
                  maxLength={3}
                  className="w-full bg-white border p-2"
                  required
                />
              </p>
            </div>
            <p>
              <input
                type="text"
                name="cardName"
                placeholder="Name on card"
                value={props.form.cardName}
                onChange={(e) => props.handleChange(e)}
                className="w-full bg-white border p-2"
                required
              />
            </p>
            <p>
              <select
                onChange={(e) => props.handleChange(e)}
                aria-label="Select your country"
                required
                value={props.form.country}
                name="country"
                id="country"
                className="w-full bg-white border p-2"
              >
                <option value={""}>Select country</option>
                {countriesOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </p>
            <p>
              {/* unused and uncontrolled input*/}
              <input
                type="text"
                placeholder="Postal code"
                className="w-full bg-white border p-2"
              />
            </p>
          </div>

          <div className="flex justify-between gap-3 items-center border-y border-stone-300 mt-4 py-3">
            <strong className="text-[0.8rem]">Total</strong>
            <p className="text-[0.8rem]">
              <strong className="text-stone-300">USD</strong>{" "}
              <strong>
                {props.shipment && props.shipment.status.bill
                  ? currencyFormatter.format(props.shipment?.status?.bill)
                  : "unavailable"}
              </strong>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className={cn(
                "capitalize mt-4 px-4 py-2 bg-green-700 text-white text-[0.8rem]"
                // !canSubmit() && "cursor-not-allowed",
                // isSubmitting && "opacity-35 cursor-not-allowed"
              )}
              disabled={props.isSubmitting}
            >
              {buttonText()}
            </button>
          </div>
        </div>

        {/* terms and conditions */}
        <div className="pb-4">
          <p className="text-stone-700/90 text-[0.7rem]">
            By utilizing FastExpress-courier logistics services, you acknowledge
            and expressly agree to adhere to the{" "}
            <span className="text-red-600 underline">terms and conditions</span>{" "}
            regarding shipment seizure, customs clearance, and associated
            payments.
          </p>
        </div>
      </div>
    </form>
  );
};
