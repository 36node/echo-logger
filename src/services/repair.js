import Debug from "debug";
import { toMongooseQuery } from "@36node/query-normalizr";

import API from "../api/repair";
import { Repair } from "../models";
import { plain } from "../lib";
import loadRepair from "../middlewares/loadRepair";

const debug = Debug("store:service:repair");

export class Service extends API {
  _middleware = {
    getRepair: [loadRepair],
    createRepair: [],
    updateRepair: [loadRepair],
    deleteRepair: [loadRepair],
    updateRecord: [loadRepair],
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
   * Create a repair
   *
   * @override
   * @param {import("../api/repair").CreateRepairRequest} req createRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").CreateRepairResponse>} The Repair created
   */
  async createRepair(req, ctx) {
    debug("create repair with body %o", req.body);
    const repair = await Repair.create(req.body);

    return {
      content: plain(repair),
    };
  }

  /**
   * List all repairs
   *
   * @override
   * @param {import("../api/repair").ListRepairsRequest} req listRepairs request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").ListRepairsResponse>} A paged array of repair
   */
  async listRepairs(req, ctx) {
    const query = toMongooseQuery(req.query);
    const docs = await Repair.list(query);
    const count = await Repair.count(query.filter);

    return {
      content: plain(docs),
      headers: {
        "X-Total-Count": count,
      },
    };
  }

  /**
   * Find repair by id
   *
   * @override
   * @param {import("../api/repair").GetRepairRequest} req getRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").GetRepairResponse>} Expected response to a valid request
   */
  getRepair(req, ctx) {
    const { repair } = ctx.state;

    return {
      content: plain(repair),
    };
  }

  /**
   * Update repair
   *
   * @override
   * @param {import("../api/repair").UpdateRepairRequest} req updateRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").UpdateRepairResponse>} The repair
   */
  async updateRepair(req, ctx) {
    const { repair } = ctx.state;
    debug("update repair with body %o", req.body);
    await repair.set(req.body).save();
    return { content: plain(repair) };
  }

  /**
   *
   * @override
   * @param {import("../api/repair").DeleteRepairRequest} req deleteRepair request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   */
  async deleteRepair(req, ctx) {
    const { repair } = ctx.state;
    await repair.softDelete();
  }

  /**
   * update repair order record
   *
   * @abstract
   * @param {import("../api/repair").UpdateRecordRequest} req updateRecord request
   * @param {import("../api/repair").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/repair").UpdateRecordResponse>} The repair order
   */
  async updateRecord(req, ctx) {
    const record = req.body;

    const { repair } = ctx.state;
    repair.record = record;
    await repair.set(repair).save();

    return { content: plain(record) };
  }
}

const service = new Service();
export default service;
