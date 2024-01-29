import { ShipmentActions } from "..";

// single event
export type TEvent = {
  _id?: string;

  eventId: string;

  timestamp: string;

  location: {
    address: {
      addressLocality: string;
    };
  };

  description: string;
};

// all shipment events
export type TEvents = TEvent[];

// single shipment
export type TShipment = {
  trackingId: string;

  origin: {
    address: {
      addressLocality: string;
      label: string;
    };
  };

  destination: {
    address: {
      addressLocality: string;
      label: string;
    };
  };

  status: {
    timestamp: string;

    location: {
      address: {
        addressLocality: string;
      };
    };

    status: "pending" | "seized" | "delivered" | "shipping";

    description: string;

    bill?: number;
  };

  events: TEvents;
};

export type APISingleShipResponse = {
  shipment: TShipment;
};

export type APIResponseMessage = {
  message: string;
};

export type TShipmentAction = {
  type: ShipmentActions;
  payload?: any;
};

export type ReducerState = {
  state: {
    loading: boolean;
    success: boolean;
    error: boolean;
    trackingNumber: string;
    unknownShipment: string;
  };
  shipment: TShipment;
};

// provider
export type TGlobalContext = {
  shipmentStore: {
    state: {
      loading: boolean;
      success: boolean;
      error: boolean;
      trackingNumber: string;
      unknownShipment: string;
    };
    shipment: TShipment;
    actions: {
      shipDispatch: React.Dispatch<TShipmentAction>;
    };
  };

  mobileMenuStore: {
    isMobileMenuOpen: boolean;
    closeMenu: () => void;
    openMenu: () => void;
  };
};

// checkout
export type CardDetails = {
  cardName: string;
  country: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
  trackingId: string;
};
