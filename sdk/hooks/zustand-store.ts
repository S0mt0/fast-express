import { MobileMenuStore, ShipmentStore } from "../zustand-store";

export const useShipmentStore = () => {
  const {
    error,
    loading,
    setError,
    setLoading,
    setShipment,
    setSuccess,
    setTrackingNumber,
    setUnknownShipment,
    shipment,
    success,
    trackingNumber,
    unknownShipment,
  } = ShipmentStore((state) => ({
    shipment: state.shipment,
    loading: state.loading,
    success: state.success,
    error: state.error,
    trackingNumber: state.trackingNumber,
    unknownShipment: state.unknownShipment,
    setShipment: state.setShipment,
    setTrackingNumber: state.setTrackingNumber,
    setUnknownShipment: state.setUnknownShipment,
    setLoading: state.setLoading,
    setSuccess: state.setSuccess,
    setError: state.setError,
  }));

  return {
    error,
    loading,
    setError,
    setLoading,
    setShipment,
    setSuccess,
    setTrackingNumber,
    setUnknownShipment,
    shipment,
    success,
    trackingNumber,
    unknownShipment,
  };
};

export const useMobileMenuStore = () => {
  const { closeMenu, menuIsOpen, openMenu, toggleMenu } = MobileMenuStore(
    (state) => ({
      menuIsOpen: state.mobileMenuIsOpen,
      openMenu: state.openMenu,
      closeMenu: state.closeMenu,
      toggleMenu: state.toggleMenu,
    })
  );

  return {
    closeMenu,
    menuIsOpen,
    openMenu,
    toggleMenu,
  };
};
