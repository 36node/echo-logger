import createError from "http-errors";

import { Park } from "../models";

/**
 * 中间件
 * 根据 parkId 加载 park
 *
 * @param {import("koa").Context} ctx koa context
 * @param {import("koa").Next} next koa next
 */
export default async (ctx, next) => {
  const { parkId } = ctx.params;

  ctx.state.park = await Park.get(parkId);

  if (!ctx.state.park) {
    throw new createError.NotFound(`park ${parkId} not found`);
  }
  await next();
};
