import { useCallback, useEffect } from "react";
import axios from "axios";

import { useMobileMenuStore, useShipmentStore } from ".";
import { useShipmentServices } from "../services";
import { TShipment } from "../interface";

export const useFetchShipmentFunc = (query?: string) => {
  const {
    setTrackingNumber,
    trackingNumber,
    unknownShipment,
    shipment,
    success,
    error,
    loading,
  } = useShipmentStore();

  const {
    initializeFetchShipmentState,
    onFetchShipmentSuccess,
    onFetchShipmentError,
  } = useShipmentServices();

  const { closeMenu } = useMobileMenuStore();

  useEffect(() => {
    if (query) {
      setTrackingNumber(query);
    }
  }, [query, setTrackingNumber]);

  const fetchShipment = useCallback(
    async (trackingId: string) => {
      initializeFetchShipmentState();

      try {
        const { data } = await axios.get(
          `https://dashboard-01-server-4fd151ce1921.herokuapp.com/api/v1/shipment/tracking?trackingId=${trackingId}`
        );

        onFetchShipmentSuccess(data?.data?.shipment as TShipment);
      } catch (error: any) {
        console.log(error?.response?.data);
        onFetchShipmentError(error?.response?.data?.data?.trackingId as string);
      } finally {
        closeMenu();
      }
    },
    [
      closeMenu,
      initializeFetchShipmentState,
      onFetchShipmentError,
      onFetchShipmentSuccess,
    ]
  );

  //   const handleInputChange = (input: string) => {
  //     shipDispatch({
  //       type: ShipmentActions.SET_TRACKING_NUMBER,
  //       payload: input,
  //     });
  //   };

  return {
    fetchShipment,
    shipment,
    error,
    success,
    loading,
    trackingNumber,
    // handleInputChange,
    unknownShipment,
    setTrackingNumber,
  };
};
