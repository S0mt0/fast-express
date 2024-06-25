import Image from "next/image";

export const PayPal = () => {
  return (
    <div className="w-full rounded-lg mt-6 bg-stone-100 p-6 border">
      <div>
        <Image
          width={150}
          height={100}
          alt="PayPal Logo"
          src={"/images/paypal-logo.png"}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row p-4 w-full justify-between gap-4">
        <div className="w-full border-t border-gray-300 flex-1">
          <p className="mt-10 text-2xl text-gray-600">Pay with PayPal</p>
          <form className="space-y-4 mt-2">
            <p>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-4 border-gray-400 border rounded-sm"
                placeholder="Email"
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-4 border-gray-400 border rounded-sm"
                placeholder="Password"
              />
            </p>

            <p className="flex space-x-1">
              <input type="checkbox" name="persist" id="persist" />
              <span>Stay logged in with One Touch&trade;</span>
            </p>

            <p>
              <button className="w-full p-3 rounded-sm bg-blue-500 text-white">
                Log In
              </button>
            </p>

            <p className="text-blue-500 text-center">
              Having trouble logging in?
            </p>
          </form>
        </div>
        <div className="flex-[0.8] flex items-center justify-start flex-col ">
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
      </div>
    </div>
  );
};
