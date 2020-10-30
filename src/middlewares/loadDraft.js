import createError from "http-errors";

import { Draft } from "../models";

/**
 * 中间件
 * 根据 draftId 加载 draft
 *
 * @param {import("koa").Context} ctx koa context
 * @param {import("koa").Next} next koa next
 */
export default async (ctx, next) => {
  const { draftId } = ctx.params;

  ctx.state.draft = await Draft.get(draftId);

  if (!ctx.state.draft) {
    throw new createError.NotFound(`draft ${draftId} not found`);
  }
  await next();
};
