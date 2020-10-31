import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateLogRequest {
    body: {
      /**
       * 日志标题
       */
      title?: string;
      /**
       * 日志详情
       */
      body?: string;
      /**
       * 标签 逗号分隔
       */
      tags?: string[];
    };
  }
  export interface CreateLogResponse {
    content?: {
      /**
       * 日志标题
       */
      title?: string;
      /**
       * 日志详情
       */
      body?: string;
      /**
       * 标签 逗号分隔
       */
      tags?: string[];
    };
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createLog(req: API.CreateLogRequest, ctx: API.Context): Promise<API.CreateLogResponse>;
}

export = API;
