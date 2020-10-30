import logger from "./log";
import busOpSdk from "./busOpSdk";

export { logger, busOpSdk };

export function plain(obj) {
  return JSON.parse(JSON.stringify(obj));
}
