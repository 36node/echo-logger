import Debug from "debug";
import { toMongooseQuery } from "@36node/query-normalizr";

import API from "../api/vehicle";
import { Vehicle } from "../models";
import { plain, busOpSdk } from "../lib";
import { withRole } from "../middlewares";
import loadVehicle from "../middlewares/loadVehicle";
import { Role } from "../constants";
const debug = Debug("store:service:vehicle");

export class Service extends API {
  _middleware = {
    getVehicle: [loadVehicle],
    updateVehicle: [loadVehicle, withRole(Role.ADMIN)],
    deleteVehicle: [loadVehicle, withRole(Role.ADMIN)],
    listVehicleAlerts: [loadVehicle],
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
   * Create a vehicle
   *
   * @override
   * @param {import("../api/vehicle").CreateVehicleRequest} req createVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").CreateVehicleResponse>} The Vehicle created
   */
  async createVehicle(req, ctx) {
    debug("create vehicle with body %o", req.body);
    const vehicle = await Vehicle.create(req.body);

    return {
      content: plain(vehicle),
    };
  }

  /**
   * List all vehicles
   *
   * @override
   * @param {import("../api/vehicle").ListVehiclesRequest} req listVehicles request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").ListVehiclesResponse>} A paged array of vehicles
   */
  async listVehicles(req, ctx) {
    const query = toMongooseQuery(req.query);
    const docs = await Vehicle.list(query);
    const count = await Vehicle.count(query.filter);

    return {
      content: plain(docs),
      headers: {
        "X-Total-Count": count,
      },
    };
  }

  /**
   * Find vehicle by id
   *
   * @override
   * @param {import("../api/vehicle").GetVehicleRequest} req getVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").GetVehicleResponse>} Expected response to a valid request
   */
  async getVehicle(req, ctx) {
    const { vehicle } = ctx.state;

    return {
      content: plain(vehicle),
    };
  }

  /**
   * Update vehicle
   *
   * @override
   * @param {import("../api/vehicle").UpdateVehicleRequest} req updateVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").UpdateVehicleResponse>} The vehicle
   */
  async updateVehicle(req, ctx) {
    const { vehicle } = ctx.state;
    debug("update vehicle with body %o", req.body);
    await vehicle.set(req.body).save();
    return { content: plain(vehicle) };
  }

  /**
   * @override
   * @param {import("../api/vehicle").DeleteVehicleRequest} req deleteVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   */
  async deleteVehicle(req, ctx) {
    const { vehicle } = ctx.state;
    await vehicle.softDelete();
  }

  /**
   * @override
   * @param {import("../api/vehicle").ListVehicleAlertsRequest} req listVehicleAlerts request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").ListVehicleAlertsResponse>} A paged array of vehicle alerts
   */
  async listVehicleAlerts(req, ctx) {
    const { vehicle } = ctx.state;
    const query = {
      ...req.query,
      vehicle: vehicle.vin,
    };

    const { body, headers } = await busOpSdk.alert.listAlerts({ query });

    return {
      content: plain(body),
      headers: {
        "X-Total-Count": headers["x-total-count"],
      },
    };
  }
}

const service = new Service();

export default service;
