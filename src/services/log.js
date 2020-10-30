import Debug from "debug";

import API from "../api/log";
import { plain, logger } from "../lib";

const debug = Debug("store:service:log");

export class Service extends API {
  _middleware = {};

  /**
   * Ability to inject some middlewares
   *
   * @override
   * @param {string} operation name of operation
   * @returns {Array<import("koa").Middleware<State>>} middlewares
   */
  middlewares(operation) {
    return this._middleware[operation] || [];
  }

  /**
   * Create a log
   *
   * @override
   * @param {import("../api/log").CreateLogRequest} req createLog request
   * @param {import("../api/log").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/log").CreateLogResponse>} The Log created
   */
  async createLog(req, ctx) {
    debug("create log with body %o", req.body);
    logger.info(req.body);
    return {
      content: plain(req.body),
    };
  }
}

const service = new Service();
export default service;
