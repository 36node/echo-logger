//@ts-check

import * as schemas from "./maintain.schema.js";
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
    const createMaintain = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createMaintain(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listMaintains = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listMaintains(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getMaintain = async ctx => {
      const req = {
        maintainId: ctx.params.maintainId,
      };
      const res = await this.getMaintain(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateMaintain = async ctx => {
      const req = {
        maintainId: ctx.params.maintainId,
        body: ctx.request.body,
      };
      const res = await this.updateMaintain(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deleteMaintain = async ctx => {
      const req = {
        maintainId: ctx.params.maintainId,
      };
      await this.deleteMaintain(req, ctx);
      ctx.status = 204;
    };

    const updateAppearanceRecord = async ctx => {
      const req = {
        maintainId: ctx.params.maintainId,
        body: ctx.request.body,
      };
      const res = await this.updateAppearanceRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateSoftwareRecord = async ctx => {
      const req = {
        maintainId: ctx.params.maintainId,
        body: ctx.request.body,
      };
      const res = await this.updateSoftwareRecord(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    router.post(
      "/maintains",
      validate(
        schemas.createMaintainReqSchema,
        schemas.createMaintainResSchema
      ),
      ...this.middlewares("createMaintain"),
      createMaintain
    );
    router.get(
      "/maintains",
      validate(schemas.listMaintainsReqSchema, schemas.listMaintainsResSchema),
      ...this.middlewares("listMaintains"),
      listMaintains
    );
    router.get(
      "/maintains/:maintainId",
      validate(schemas.getMaintainReqSchema, schemas.getMaintainResSchema),
      ...this.middlewares("getMaintain"),
      getMaintain
    );
    router.put(
      "/maintains/:maintainId",
      validate(
        schemas.updateMaintainReqSchema,
        schemas.updateMaintainResSchema
      ),
      ...this.middlewares("updateMaintain"),
      updateMaintain
    );
    router.delete(
      "/maintains/:maintainId",
      validate(schemas.deleteMaintainReqSchema),
      ...this.middlewares("deleteMaintain"),
      deleteMaintain
    );
    router.put(
      "/maintains/:maintainId/appearanceRecord",
      validate(
        schemas.updateAppearanceRecordReqSchema,
        schemas.updateAppearanceRecordResSchema
      ),
      ...this.middlewares("updateAppearanceRecord"),
      updateAppearanceRecord
    );
    router.put(
      "/maintains/:maintainId/softwareRecord",
      validate(
        schemas.updateSoftwareRecordReqSchema,
        schemas.updateSoftwareRecordResSchema
      ),
      ...this.middlewares("updateSoftwareRecord"),
      updateSoftwareRecord
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
   * Create a maintain order
   *
   * @abstract
   * @param {import("../api/maintain").CreateMaintainRequest} req createMaintain request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").CreateMaintainResponse>} The maintain order created
   */
  createMaintain(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all maintain orders
   *
   * @abstract
   * @param {import("../api/maintain").ListMaintainsRequest} req listMaintains request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").ListMaintainsResponse>} A paged array of maintain orders
   */
  listMaintains(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find maintain order by id
   *
   * @abstract
   * @param {import("../api/maintain").GetMaintainRequest} req getMaintain request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").GetMaintainResponse>} Expected response to a valid request
   */
  getMaintain(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * update maintain order
   *
   * @abstract
   * @param {import("../api/maintain").UpdateMaintainRequest} req updateMaintain request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").UpdateMaintainResponse>} The maintain order
   */
  updateMaintain(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/maintain").DeleteMaintainRequest} req deleteMaintain request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   */
  deleteMaintain(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * update maintain order appearance record
   *
   * @abstract
   * @param {import("../api/maintain").UpdateAppearanceRecordRequest} req updateAppearanceRecord request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").UpdateAppearanceRecordResponse>} The maintain order
   */
  updateAppearanceRecord(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * update maintain order software record
   *
   * @abstract
   * @param {import("../api/maintain").UpdateSoftwareRecordRequest} req updateSoftwareRecord request
   * @param {import("../api/maintain").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/maintain").UpdateSoftwareRecordResponse>} The maintain order
   */
  updateSoftwareRecord(req, ctx) {
    throw new Error("not implemented");
  }
}
