import { TShipment } from "../interface";

export const shipInit: TShipment = {
  trackingId: "",

  origin: {
    address: {
      addressLocality: "",
      label: "",
    },
  },

  destination: {
    address: {
      addressLocality: "",
      label: "",
    },
  },

  status: {
    timestamp: "",

    location: {
      address: {
        addressLocality: "",
      },
    },

    status: "pending",

    description: "",

    bill: 0,
  },

  events: [],
};
