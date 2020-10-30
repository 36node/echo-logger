import BusOpSdk from "@36node/bus-op-sdk";
import { BUS_OP_ENDPOINT_BASE, BUS_OP_ENDPOINT_TOKEN } from "../config";

const busOpSdk = new BusOpSdk({
  base: BUS_OP_ENDPOINT_BASE,
  token: BUS_OP_ENDPOINT_TOKEN,
});

export default busOpSdk;
