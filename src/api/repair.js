//@ts-check

import * as schemas from "./repair.schema.js";
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
    const createRepair = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createRepair(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listRepairs = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listRepairs(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getRepair = async ctx => {
      const req = {
        repairId: ctx.params.repairId,
      };
      const res = await this.getRepair(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateRepair = async ctx => {
      const req = {
        repairId: ctx.params.repairId,
        body: ctx.request.body,
      };
      const res = await this.updateRepair(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deleteRepair = async ctx => {
      const req = {
        repairId: ctx.params.repairId,
      };
      await this.deleteRepair(req, ctx);
      ctx.status = 204;
    };

    const updateRecord = async ctx => {
      const req = {
        repairId: ctx.params.repairId,
        body: ctx.request.body,
      };
      const res = await this.updateRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    router.post(
      "/repairs",
      validate(schemas.createRepairReqSchema, schemas.createRepairResSchema),
      ...this.middlewares("createRepair"),
      createRepair
    );
    router.get(
      "/repairs",
      validate(schemas.listRepairsReqSchema, schemas.listRepairsResSchema),
      ...this.middlewares("listRepairs"),
      listRepairs
    );
    router.get(
      "/repairs/:repairId",
      validate(schemas.getRepairReqSchema, schemas.getRepairResSchema),
      ...this.middlewares("getRepair"),
      getRepair
    );
    router.put(
      "/repairs/:repairId",
      validate(schemas.updateRepairReqSchema, schemas.updateRepairResSchema),
      ...this.middlewares("updateRepair"),
      updateRepair
    );
    router.delete(
      "/repairs/:repairId",
      validate(schemas.deleteRepairReqSchema),
      ...this.middlewares("deleteRepair"),
      deleteRepair
    );
    router.put(
      "/repairs/:repairId/record",
      validate(schemas.updateRecordReqSchema, schemas.updateRecordResSchema),
      ...this.middlewares("updateRecord"),
      updateRecord
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
   * Create a repair order
   *
   * @abstract
   * @param {import("../api/repair").CreateRepairRequest} req createRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").CreateRepairResponse>} The repair order created
   */
  createRepair(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all repair orders
   *
   * @abstract
   * @param {import("../api/repair").ListRepairsRequest} req listRepairs request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").ListRepairsResponse>} A paged array of repair orders
   */
  listRepairs(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find repair order by id
   *
   * @abstract
   * @param {import("../api/repair").GetRepairRequest} req getRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").GetRepairResponse>} Expected response to a valid request
   */
  getRepair(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * update repair order
   *
   * @abstract
   * @param {import("../api/repair").UpdateRepairRequest} req updateRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").UpdateRepairResponse>} The repair order
   */
  updateRepair(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/repair").DeleteRepairRequest} req deleteRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   */
  deleteRepair(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * update repair order record
   *
   * @abstract
   * @param {import("../api/repair").UpdateRecordRequest} req updateRecord request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").UpdateRecordResponse>} The repair order
   */
  updateRecord(req, ctx) {
    throw new Error("not implemented");
  }
}
