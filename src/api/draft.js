//@ts-check

import * as schemas from "./draft.schema.js";
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
    const createDraft = async ctx => {
      const req = {
        body: ctx.request.body,
      };
      const res = await this.createDraft(req, ctx);
      ctx.body = res.content;
      ctx.status = 201;
    };

    const listDafts = async ctx => {
      const req = {
        query: ctx.query,
      };
      const res = await this.listDafts(req, ctx);
      ctx.body = res.content;
      ctx.set("X-Total-Count", res.headers["X-Total-Count"]);
      ctx.status = 200;
    };

    const getDraft = async ctx => {
      const req = {
        draftId: ctx.params.draftId,
      };
      const res = await this.getDraft(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const updateDraft = async ctx => {
      const req = {
        draftId: ctx.params.draftId,
        body: ctx.request.body,
      };
      const res = await this.updateDraft(req, ctx);
      ctx.body = res.content;
      ctx.status = 200;
    };

    const deleteDraft = async ctx => {
      const req = {
        draftId: ctx.params.draftId,
      };
      await this.deleteDraft(req, ctx);
      ctx.status = 204;
    };

    router.post(
      "/drafts",
      validate(schemas.createDraftReqSchema, schemas.createDraftResSchema),
      ...this.middlewares("createDraft"),
      createDraft
    );
    router.get(
      "/drafts",
      validate(schemas.listDaftsReqSchema, schemas.listDaftsResSchema),
      ...this.middlewares("listDafts"),
      listDafts
    );
    router.get(
      "/drafts/:draftId",
      validate(schemas.getDraftReqSchema, schemas.getDraftResSchema),
      ...this.middlewares("getDraft"),
      getDraft
    );
    router.put(
      "/drafts/:draftId",
      validate(schemas.updateDraftReqSchema, schemas.updateDraftResSchema),
      ...this.middlewares("updateDraft"),
      updateDraft
    );
    router.delete(
      "/drafts/:draftId",
      validate(schemas.deleteDraftReqSchema),
      ...this.middlewares("deleteDraft"),
      deleteDraft
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
   * Create a draft
   *
   * @abstract
   * @param {import("../api/draft").CreateDraftRequest} req createDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").CreateDraftResponse>} The draft created
   */
  createDraft(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * List all drafts
   *
   * @abstract
   * @param {import("../api/draft").ListDaftsRequest} req listDafts request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").ListDaftsResponse>} A paged array of drafts
   */
  listDafts(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Find draft by id
   *
   * @abstract
   * @param {import("../api/draft").GetDraftRequest} req getDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").GetDraftResponse>} Expected response to a valid request
   */
  getDraft(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   * Update draft
   *
   * @abstract
   * @param {import("../api/draft").UpdateDraftRequest} req updateDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").UpdateDraftResponse>} The draft
   */
  updateDraft(req, ctx) {
    throw new Error("not implemented");
  }

  /**
   *
   *
   * @abstract
   * @param {import("../api/draft").DeleteDraftRequest} req deleteDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   */
  deleteDraft(req, ctx) {
    throw new Error("not implemented");
  }
}
