import Debug from "debug";
import { toMongooseQuery } from "@36node/query-normalizr";

import API from "../api/park";
import { Park } from "../models";
import { plain } from "../lib";
import { withRole } from "../middlewares";
import loadPark from "../middlewares/loadPark";
import { Role } from "../constants";

const debug = Debug("store:service:park");

export class Service extends API {
  _middleware = {
    getPark: [loadPark],
    createPark: [withRole(Role.ADMIN)],
    updatePark: [loadPark, withRole(Role.ADMIN)],
    deletePark: [loadPark, withRole(Role.ADMIN)],
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
   * Create a park
   *
   * @override
   * @param {import("../api/park").CreateParkRequest} req createPark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").CreateParkResponse>} The Park created
   */
  async createPark(req, ctx) {
    debug("create park with body %o", req.body);
    const park = await Park.create(req.body);

    return {
      content: plain(park),
    };
  }

  /**
   * List all parks
   *
   * @override
   * @param {import("../api/park").ListParksRequest} req listParks request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").ListParksResponse>} A paged array of parks
   */
  async listParks(req, ctx) {
    const query = toMongooseQuery(req.query);
    const docs = await Park.list(query);
    const count = await Park.count(query.filter);

    return {
      content: plain(docs),
      headers: {
        "X-Total-Count": count,
      },
    };
  }

  /**
   * Find park by id
   *
   * @override
   * @param {import("../api/park").GetParkRequest} req getPark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").GetParkResponse>} Expected response to a valid request
   */
  getPark(req, ctx) {
    const { park } = ctx.state;

    return {
      content: plain(park),
    };
  }

  /**
   * Update park
   *
   * @override
   * @param {import("../api/park").UpdateParkRequest} req updatePark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").UpdateParkResponse>} The park
   */
  async updatePark(req, ctx) {
    const { park } = ctx.state;
    debug("update park with body %o", req.body);
    await park.set(req.body).save();
    return { content: plain(park) };
  }

  /**
   *
   * @override
   * @param {import("../api/park").DeleteParkRequest} req deletePark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   */
  async deletePark(req, ctx) {
    const { park } = ctx.state;
    await park.softDelete();
  }
}

const service = new Service();
export default service;
