import { Suspense } from "react";
import { TrackingUI } from "../_components";

const TrackingPage = () => {
  return (
    <Suspense>
      <TrackingUI />
    </Suspense>
  );
};

export default TrackingPage;
