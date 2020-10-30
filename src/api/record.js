//@ts-check

import * as schemas from "./record.schema.js";
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
    const createRecord = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listRecords = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listRecords(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getRecord = async ctx => {
      const req = {
        recordId: ctx.params.recordId,
      };
      const res = await this.getRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateRecord = async ctx => {
      const req = {
        recordId: ctx.params.recordId,
        body: ctx.request.body,
      };
      const res = await this.updateRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deleteRecord = async ctx => {
      const req = {
        recordId: ctx.params.recordId,
      };
      await this.deleteRecord(req, ctx);
      ctx.status = 204;
    };

    router.post(
      "/records",
      validate(schemas.createRecordReqSchema, schemas.createRecordResSchema),
      ...this.middlewares("createRecord"),
      createRecord
    );
    router.get(
      "/records",
      validate(schemas.listRecordsReqSchema, schemas.listRecordsResSchema),
      ...this.middlewares("listRecords"),
      listRecords
    );
    router.get(
      "/records/:recordId",
      validate(schemas.getRecordReqSchema, schemas.getRecordResSchema),
      ...this.middlewares("getRecord"),
      getRecord
    );
    router.put(
      "/records/:recordId",
      validate(schemas.updateRecordReqSchema, schemas.updateRecordResSchema),
      ...this.middlewares("updateRecord"),
      updateRecord
    );
    router.delete(
      "/records/:recordId",
      validate(schemas.deleteRecordReqSchema),
      ...this.middlewares("deleteRecord"),
      deleteRecord
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
   * Create a record
   *
   * @abstract
   * @param {import("../api/record").CreateRecordRequest} req createRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").CreateRecordResponse>} The repair order created
   */
  createRecord(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all records
   *
   * @abstract
   * @param {import("../api/record").ListRecordsRequest} req listRecords request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").ListRecordsResponse>} A paged array of repair orders
   */
  listRecords(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find record by id
   *
   * @abstract
   * @param {import("../api/record").GetRecordRequest} req getRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").GetRecordResponse>} Expected response to a valid request
   */
  getRecord(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Update record
   *
   * @abstract
   * @param {import("../api/record").UpdateRecordRequest} req updateRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").UpdateRecordResponse>} The record
   */
  updateRecord(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/record").DeleteRecordRequest} req deleteRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   */
  deleteRecord(req, ctx) {
    throw new Error("not implemented");
  }
}
