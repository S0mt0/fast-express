import Image from "next/image";

export const PayPal = (props: any) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const url = `/paypal/checkout?trackingId=${props.shipment?.trackingId}`;

  function openNewWindow() {
    const width = 700;
    const height = 600;
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;

    // const url = `/paypal/checkout`;

    window.open(
      url,
      "_blank",
      `noopener,noreferrer,scrollbars=yes,resizable=yes,width=${width},height=${height},top=${top},left=${left}`
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-4">
      <div className="flex items-center justify-start flex-col flex-1">
        <Image
          width={180}
          height={150}
          src={"/images/paypal-user.png"}
          alt="card image"
        />
        <p className="text-2xl -mt-1 text-gray-600">New. Fast. Easier.</p>
        <p className="text-center text-gray-500 mt-2 leading-tight text-[0.9rem]">
          Welcome to the new PayPal checkout!
          <br />
          The security you rely on - now even faster.
          <br />
          It&apos;s everything checkout should be.
        </p>
      </div>

      <div className="my-2 sm:m-0 flex-1">
        <p className="text-[11px]">
          By clicking on &quot;PayPal&quot;, you will be redirected to
          PayPal&trade; checkout page and you agree to be charged{" "}
          <strong>
            {props.shipment?.status?.bill
              ? currencyFormatter.format(
                  parseFloat(props.shipment?.status?.bill.toString())
                )
              : "$ Unavailable"}
          </strong>
          .
        </p>
        <button
          className="italic font-extrabold text-2xl rounded-full w-full p-2 bg-[#ffc439] mt-6"
          onClick={openNewWindow}
        >
          <span className="text-[#04338D]">Pay</span>
          <span className="text-[#039CDB]">Pal</span>
        </button>
      </div>
    </div>
  );
};
