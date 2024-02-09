import moment from "moment";
import Link from "next/link";

import _ from "../styles/tracking.module.scss";
import { TShipment } from "../../../sdk/interface";
import { formatLocalTime } from "../../../sdk/utils";
import { AlertTriangle, BusFront, CheckCircle2 } from "lucide-react";

export const EventStatus = ({ status }: { status: TShipment["status"] }) => {
  return (
    <article className={_.status}>
      <div className={_.timestamp}>
        <small>{moment(status.timestamp).format("dddd")}</small>
        <h3>{moment(status.timestamp).format("LL")}</h3>
        <small>{formatLocalTime(status.timestamp)}</small>
      </div>
      <div className={_.description}>
        <strong
          style={status.status === "delivered" ? { color: "#67A31D" } : {}}
        >
          {status.description}
        </strong>
        <p>{status.location.address.addressLocality}</p>
        {/*  */}
        {status.status === "seized" && (
          <small>
            To redeem your shipment, kindly{" "}
            <Link href="/checkout">PAY EXTRA COST OF SHIPPING</Link>
          </small>
        )}
        {/*  */}
        <span>
          {status.status === "delivered" ? (
            <CheckCircle2 fill="#67A31D" />
          ) : status.status === "seized" ? (
            <AlertTriangle fill="#d40511" />
          ) : (
            <BusFront fill="#868686" />
          )}
        </span>
        {/*  */}
      </div>
    </article>
  );
};
