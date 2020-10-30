import createError from "http-errors";

import { Vehicle } from "../models";

/**
 * 中间件
 * 根据 parkId 加载 park
 *
 * @param {import("koa").Context} ctx koa context
 * @param {import("koa").Next} next koa next
 */
export default async (ctx, next) => {
  const { vehicleId } = ctx.params;

  ctx.state.vehicle = await Vehicle.get(vehicleId);

  if (!ctx.state.vehicle) {
    throw new createError.NotFound(`vehicle ${vehicleId} not found`);
  }
  await next();
};
