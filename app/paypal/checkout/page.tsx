import { Suspense } from "react";
import { PayPalForm } from "./paypal-form";
import { Loader2 } from "lucide-react";

const PayPalPage = () => {
  return (
    <main className="grid place-items-center py-20">
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center backdrop-blur bg-white/90">
            Please wait...
          </div>
        }
      >
        <PayPalForm />
      </Suspense>
    </main>
  );
};

export default PayPalPage;
