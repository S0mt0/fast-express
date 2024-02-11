import { Suspense } from "react";
import { TrackingUI } from "../_components";

const TrackingPage = () => {
  return (
    <main className="py-44 sm:pt-52">
      <Suspense>
        <TrackingUI />
      </Suspense>
    </main>
  );
};

export default TrackingPage;
