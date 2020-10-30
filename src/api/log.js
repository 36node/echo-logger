//@ts-check

import * as schemas from "./log.schema.js";
import { validate } from "../middlewares";

/**
 * @typedef {Object} State
 */

export default class {
  /**
   * Bind service to router
   *
   * @param {import("koa-tree-router")} router the koa compatible router
   * @returns {this}
   */
  bind(router) {
    const createLog = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createLog(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    router.post(
      "/logs",
      validate(schemas.createLogReqSchema, schemas.createLogResSchema),
      ...this.middlewares("createLog"),
      createLog
    );

    return this;
  }

  /**
   * implement following abstract methods in the inherited class
   */

  /**
   * Ability to inject some middlewares
   *
   * @abstract
   * @param {string} operation name of operation
   * @returns {Array<import("koa").Middleware<State>>} middlewares
   */
  middlewares(operation) {
    return [];
  }

  /**
   * Create a log
   *
   * @abstract
   * @param {import("../api/log").CreateLogRequest} req createLog request
   * @param {import("../api/log").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/log").CreateLogResponse>} The Log created
   */
  createLog(req, ctx) {
    throw new Error("not implemented");
  }
}
