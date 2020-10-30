//@ts-check

import * as schemas from "./park.schema.js";
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
    const createPark = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createPark(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listParks = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listParks(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getPark = async ctx => {
      const req = {
        parkId: ctx.params.parkId,
      };
      const res = await this.getPark(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updatePark = async ctx => {
      const req = {
        parkId: ctx.params.parkId,
        body: ctx.request.body,
      };
      const res = await this.updatePark(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deletePark = async ctx => {
      const req = {
        parkId: ctx.params.parkId,
      };
      await this.deletePark(req, ctx);
      ctx.status = 204;
    };

    router.post(
      "/parks",
      validate(schemas.createParkReqSchema, schemas.createParkResSchema),
      ...this.middlewares("createPark"),
      createPark
    );
    router.get(
      "/parks",
      validate(schemas.listParksReqSchema, schemas.listParksResSchema),
      ...this.middlewares("listParks"),
      listParks
    );
    router.get(
      "/parks/:parkId",
      validate(schemas.getParkReqSchema, schemas.getParkResSchema),
      ...this.middlewares("getPark"),
      getPark
    );
    router.put(
      "/parks/:parkId",
      validate(schemas.updateParkReqSchema, schemas.updateParkResSchema),
      ...this.middlewares("updatePark"),
      updatePark
    );
    router.delete(
      "/parks/:parkId",
      validate(schemas.deleteParkReqSchema),
      ...this.middlewares("deletePark"),
      deletePark
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
   * Create a park
   *
   * @abstract
   * @param {import("../api/park").CreateParkRequest} req createPark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").CreateParkResponse>} The Park created
   */
  createPark(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all parks
   *
   * @abstract
   * @param {import("../api/park").ListParksRequest} req listParks request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").ListParksResponse>} A paged array of parks
   */
  listParks(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find park by id
   *
   * @abstract
   * @param {import("../api/park").GetParkRequest} req getPark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").GetParkResponse>} Expected response to a valid request
   */
  getPark(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Update park
   *
   * @abstract
   * @param {import("../api/park").UpdateParkRequest} req updatePark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/park").UpdateParkResponse>} The park
   */
  updatePark(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/park").DeleteParkRequest} req deletePark request
   * @param {import("../api/park").Context<State>} [ctx] koa context
   */
  deletePark(req, ctx) {
    throw new Error("not implemented");
  }
}
