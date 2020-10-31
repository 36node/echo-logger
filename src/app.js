// @ts-check
import path from "path";

import Koa2 from "koa";
import body from "koa-body";
import compress from "koa-compress";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import Router from "koa-tree-router";
import health from "@36node/koa-health";
import openapi from "@36node/koa-openapi";

import { BASE } from "./config";
import { logService } from "./services";
import pkg from "../package.json";
import { errHandler } from "./middlewares";

const app = new Koa2();
const router = new Router({ prefix: BASE });

/**
 * register services
 */
logService.bind(router);

/**
 * application
 */
app
  .use(errHandler())
  .use(helmet())
  .use(cors({ exposeHeaders: ["Link", "X-Total-Count"] }))
  .use(health({ url: `${BASE}/health`, version: pkg.version }))
  .use(
    openapi({
      url: `${BASE}/openapi.yml`,
      file: path.join(__dirname, "../openapi.yml"),
    })
  )
  .use(body())
  .use(compress({ threshold: 2048 }))
  .use(router.routes());

export default app;
