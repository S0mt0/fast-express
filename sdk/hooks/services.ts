import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import { useMobileMenuStore, useShipmentStore } from ".";
import { useShipmentServices } from "../services";
import { CardDetails, TShipment } from "../interface";

export const useFetchShipmentFunc = (query?: string) => {
  const {
    setTrackingNumber,
    trackingNumber,
    unknownShipment,
    shipment: _shipment,
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
          `https://afrolay-server-c9bb6c205b41.herokuapp.com/api/v1/shipment/tracking?trackingId=${trackingId}`
        );

        onFetchShipmentSuccess(data?.data?.shipment as TShipment);
      } catch (error: any) {
        // console.log(error?.response?.data);
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

  const shipment =
    _shipment || typeof window !== "undefined"
      ? (JSON.parse(localStorage.getItem("shipment")!) as TShipment | null)
      : null;

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

// redeem shipment
export const useCheckoutFormData = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { shipment: _shipment } = useShipmentStore();

  const shipment =
    _shipment || typeof window !== "undefined"
      ? (JSON.parse(localStorage.getItem("shipment")!) as TShipment | null)
      : null;

  const formInit: CardDetails = {
    cardName: "",
    cardNumber: "",
    country: "",
    cvv: "",
    expMonth: "",
    expYear: "",
    trackingId: _shipment?.trackingId,
  };
  const [form, setForm] = useState<CardDetails>(formInit);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.persist();
    const { name, value } = e.target;

    setForm((current) => ({ ...current, [name]: value }));
  };

  const setInputOnlyIfTypeIsNumber = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;

    const regEx = /^\d+$/;

    if (regEx.test(value) || value === "") {
      setForm((current) => ({ ...current, [name]: value }));
    }
  };

  // const canSubmit = Object.values(form).every((field) => field?.trim() !== "");
  const canSubmit = useCallback(() => {
    return Object.values(form).every((value) => Boolean(value?.trim()));
  }, [form]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await axios.post(
        "https://afrolay-server-c9bb6c205b41.herokuapp.com/api/v1/checkout",
        form
      );

      setIsSubmitting(false);
      setForm(formInit);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } catch (error: any) {
      setIsSubmitting(false);
      setSuccess(false);
      console.log(error);
    }
  };

  return {
    form,
    isSubmitting,
    handleSubmit,
    handleChange,
    setInputOnlyIfTypeIsNumber,
    success,
    canSubmit,
    shipment,
  };
};
