import Debug from "debug";
import { toMongooseQuery } from "@36node/query-normalizr";

import API from "../api/draft";
import { Draft } from "../models";
import { plain } from "../lib";
import loadDraft from "../middlewares/loadDraft";

const debug = Debug("store:service:draft");

export class Service extends API {
  _middleware = {
    getDraft: [loadDraft],
    updateDraft: [loadDraft],
    deleteDraft: [loadDraft],
  };

  /**
   * Ability to inject some middlewares
   *
   * @override
   * @override
   * @param {string} operation name of operation
   * @returns {Array<import("koa").Middleware<State>>} middlewares
   */
  middlewares(operation) {
    return this._middleware[operation] || [];
  }

  /**
   * Create a draft
   *
   * @override
   * @param {import("../api/draft").CreateDraftRequest} req createDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").CreateDraftResponse>} The draft created
   */
  async createDraft(req, ctx) {
    debug("create draft with body %o", req.body);
    const draft = await Draft.create(req.body);

    return {
      content: plain(draft),
    };
  }

  /**
   * List all drafts
   *
   * @override
   * @param {import("../api/draft").ListDaftsRequest} req listDafts request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").ListDaftsResponse>} A paged array of drafts
   */
  async listDafts(req, ctx) {
    const query = toMongooseQuery(req.query);
    const docs = await Draft.list(query);
    const count = await Draft.count(query.filter);

    return {
      content: plain(docs),
      headers: {
        "X-Total-Count": count,
      },
    };
  }

  /**
   * Find draft by id
   *
   * @override
   * @param {import("../api/draft").GetDraftRequest} req getDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").GetDraftResponse>} Expected response to a valid request
   */
  async getDraft(req, ctx) {
    const { draft } = ctx.state;

    return {
      content: plain(draft),
    };
  }

  /**
   * Update draft
   *
   * @override
   * @param {import("../api/draft").UpdateDraftRequest} req updateDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   * @returns {Promise<import("../api/draft").UpdateDraftResponse>} The draft
   */
  async updateDraft(req, ctx) {
    const { draft } = ctx.state;
    debug("update draft with body %o", req.body);
    await draft.set(req.body).save();
    return { content: plain(draft) };
  }

  /**
   *
   *
   * @override
   * @param {import("../api/draft").DeleteDraftRequest} req deleteDraft request
   * @param {import("../api/draft").Context<State>} [ctx] koa context
   */
  async deleteDraft(req, ctx) {
    const { draft } = ctx.state;
    await draft.remove();
  }
}

const service = new Service();
export default service;
