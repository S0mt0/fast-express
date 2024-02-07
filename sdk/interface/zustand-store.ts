import { TShipment } from ".";

export interface IShipmentStore {
  // states
  shipment: TShipment | null;
  loading: boolean;
  success: boolean;
  error: boolean;
  trackingNumber: string;
  unknownShipment: string;

  //   setters
  setShipment: (shipment: TShipment | null) => void;
  setTrackingNumber: (trackingNumber: string) => void;
  setUnknownShipment: (trackingNumber: string) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (success: boolean) => void;
  setError: (error: boolean) => void;
}

export interface IMobileMenuStore {
  mobileMenuIsOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}
