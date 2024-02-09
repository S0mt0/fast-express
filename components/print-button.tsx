"use client";
import { Printer } from "lucide-react";

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      id="no-print"
      className="printBtn"
    >
      <span>Print</span>
      <Printer />
    </button>
  );
};

export default PrintButton;
