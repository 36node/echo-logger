import Debug from "debug";
import { toMongooseQuery } from "@36node/query-normalizr";

import API from "../api/record";
import { Record } from "../models";
import { plain } from "../lib";
import { withRole } from "../middlewares";
import loadRecord from "../middlewares/loadRecord";
import { Role } from "../constants";

const debug = Debug("store:service:record");

export class Service extends API {
  _middleware = {
    getRecord: [loadRecord],
    createRecord: [withRole(Role.ADMIN)],
    updateRecord: [loadRecord, withRole(Role.ADMIN)],
    deleteRecord: [loadRecord, withRole(Role.ADMIN)],
  };

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
   * Create a record
   *
   * @override
   * @param {import("../api/record").CreateRecordRequest} req createRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").CreateRecordResponse>} The Record created
   */
  async createRecord(req, ctx) {
    debug("create record with body %o", req.body);
    const record = await Record.create(req.body);

    return {
      content: plain(record),
    };
  }

  /**
   * List all records
   *
   * @override
   * @param {import("../api/record").ListRecordsRequest} req listRecords request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").ListRecordsResponse>} A paged array of record
   */
  async listRecords(req, ctx) {
    const query = toMongooseQuery(req.query);
    const docs = await Record.list(query);
    const count = await Record.count(query.filter);

    return {
      content: plain(docs),
      headers: {
        "X-Total-Count": count,
      },
    };
  }

  /**
   * Find record by id
   *
   * @override
   * @param {import("../api/record").GetRecordRequest} req getRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").GetRecordResponse>} Expected response to a valid request
   */
  getRecord(req, ctx) {
    const { record } = ctx.state;

    return {
      content: plain(record),
    };
  }

  /**
   * Update record
   *
   * @override
   * @param {import("../api/record").UpdateRecordRequest} req updateRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/record").UpdateRecordResponse>} The record
   */
  async updateRecord(req, ctx) {
    const { record } = ctx.state;
    debug("update record with body %o", req.body);
    await record.set(req.body).save();
    return { content: plain(record) };
  }

  /**
   *
   * @override
   * @param {import("../api/record").DeleteRecordRequest} req deleteRecord request
   * @param {import("../api/record").Context<State>} [ctx] koa context
   */
  async deleteRecord(req, ctx) {
    const { record } = ctx.state;
    await record.softDelete();
  }
}

const service = new Service();
export default service;
