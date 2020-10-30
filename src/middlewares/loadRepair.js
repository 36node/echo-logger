import createError from "http-errors";

import { Repair } from "../models";

/**
 * 中间件
 * 根据 repairId 加载 repair
 *
 * @param {import("koa").Context} ctx koa context
 * @param {import("koa").Next} next koa next
 */
export default async (ctx, next) => {
  const { repairId } = ctx.params;

  ctx.state.repair = await Repair.get(repairId);

  if (!ctx.state.repair) {
    throw new createError.NotFound(`repair ${repairId} not found`);
  }
  await next();
};
