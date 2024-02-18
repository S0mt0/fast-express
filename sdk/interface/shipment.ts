import { ShipmentActions } from "../actions";

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

// checkout
export type CardDetails = {
  cardName: string;
  country: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
  trackingId: string | undefined;
};
