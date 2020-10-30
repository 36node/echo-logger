//@ts-check

import * as schemas from "./vehicle.schema.js";
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
    const createVehicle = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createVehicle(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listVehicles = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listVehicles(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getVehicle = async ctx => {
      const req = {
        vehicleId: ctx.params.vehicleId,
      };
      const res = await this.getVehicle(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateVehicle = async ctx => {
      const req = {
        vehicleId: ctx.params.vehicleId,
        body: ctx.request.body,
      };
      const res = await this.updateVehicle(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deleteVehicle = async ctx => {
      const req = {
        vehicleId: ctx.params.vehicleId,
      };
      await this.deleteVehicle(req, ctx);
      ctx.status = 204;
    };

    const listVehicleAlerts = async ctx => {
      const req = {
        vehicleId: ctx.params.vehicleId,
        query: ctx.query,
      };
      const res = await this.listVehicleAlerts(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    router.post(
      "/vehicles",
      validate(schemas.createVehicleReqSchema, schemas.createVehicleResSchema),
      ...this.middlewares("createVehicle"),
      createVehicle
    );
    router.get(
      "/vehicles",
      validate(schemas.listVehiclesReqSchema, schemas.listVehiclesResSchema),
      ...this.middlewares("listVehicles"),
      listVehicles
    );
    router.get(
      "/vehicles/:vehicleId",
      validate(schemas.getVehicleReqSchema, schemas.getVehicleResSchema),
      ...this.middlewares("getVehicle"),
      getVehicle
    );
    router.put(
      "/vehicles/:vehicleId",
      validate(schemas.updateVehicleReqSchema, schemas.updateVehicleResSchema),
      ...this.middlewares("updateVehicle"),
      updateVehicle
    );
    router.delete(
      "/vehicles/:vehicleId",
      validate(schemas.deleteVehicleReqSchema),
      ...this.middlewares("deleteVehicle"),
      deleteVehicle
    );
    router.get(
      "/vehicles/:vehicleId/alerts",
      validate(
        schemas.listVehicleAlertsReqSchema,
        schemas.listVehicleAlertsResSchema
      ),
      ...this.middlewares("listVehicleAlerts"),
      listVehicleAlerts
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
   * Create a vehicle
   *
   * @abstract
   * @param {import("../api/vehicle").CreateVehicleRequest} req createVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").CreateVehicleResponse>} The Vehicle created
   */
  createVehicle(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all vehicles
   *
   * @abstract
   * @param {import("../api/vehicle").ListVehiclesRequest} req listVehicles request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").ListVehiclesResponse>} A paged array of vehicles
   */
  listVehicles(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find vehicle by id
   *
   * @abstract
   * @param {import("../api/vehicle").GetVehicleRequest} req getVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").GetVehicleResponse>} Expected response to a valid request
   */
  getVehicle(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Update vehicle
   *
   * @abstract
   * @param {import("../api/vehicle").UpdateVehicleRequest} req updateVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").UpdateVehicleResponse>} The vehicle
   */
  updateVehicle(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/vehicle").DeleteVehicleRequest} req deleteVehicle request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   */
  deleteVehicle(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all alerts by vehicleId
   *
   * @abstract
   * @param {import("../api/vehicle").ListVehicleAlertsRequest} req listVehicleAlerts request
   * @param {import("../api/vehicle").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/vehicle").ListVehicleAlertsResponse>} A paged array of vehicle alerts
   */
  listVehicleAlerts(req, ctx) {
    throw new Error("not implemented");
  }
}
