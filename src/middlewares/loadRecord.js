import createError from "http-errors";

import { Record } from "../models";

/**
 * 中间件
 * 根据 recordId 加载 record
 *
 * @param {import("koa").Context} ctx koa context
 * @param {import("koa").Next} next koa next
 */
export default async (ctx, next) => {
  const { recordId } = ctx.params;

  ctx.state.record = await Record.get(recordId);

  if (!ctx.state.record) {
    throw new createError.NotFound(`record ${recordId} not found`);
  }
  await next();
};
