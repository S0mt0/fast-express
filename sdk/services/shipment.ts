import { useShipmentStore } from "../hooks";
import { TShipment } from "../interface";

export const useShipmentServices = () => {
  const { setLoading, setError, setSuccess, setShipment, setUnknownShipment } =
    useShipmentStore();

  const initializeFetchShipmentState = () => {
    setLoading(true);
    setSuccess(false);
    setError(false);
  };

  const onFetchShipmentSuccess = (shipment: TShipment) => {
    setLoading(false);
    setSuccess(true);
    setError(false);
    setShipment(shipment);
    localStorage.setItem("shipment", JSON.stringify(shipment));
    localStorage.setItem("trackingId", JSON.stringify(shipment.trackingId));
  };

  const onFetchShipmentError = (trackingNumber: string) => {
    setLoading(false);
    setSuccess(false);
    setError(true);
    setShipment(null);
    setUnknownShipment(trackingNumber);
    localStorage.removeItem("shipment");
  };

  return {
    initializeFetchShipmentState,
    onFetchShipmentSuccess,
    onFetchShipmentError,
  };
};
