import { IShipmentStore, TShipment } from "@/sdk/interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const ShipmentStore = create<IShipmentStore>()(
  devtools((set) => ({
    // states
    shipment: null,
    loading: false,
    success: false,
    error: false,
    trackingNumber: "",
    unknownShipment: "",

    // setters
    setShipment: (shipment: TShipment | null) => set({ shipment }),
    setLoading: (loading: boolean) => set({ loading }),
    setSuccess: (success: boolean) => set({ success }),
    setError: (error: boolean) => set({ error }),
    setTrackingNumber: (trackingNumber: string) => set({ trackingNumber }),
    setUnknownShipment: (trackingNumber: string) => set({ trackingNumber }),
  }))
);
