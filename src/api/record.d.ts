import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateRecordRequest {
    body: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    };
  }
  export interface CreateRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListRecordsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      ticket_like?: string;
    };
  }
  export interface ListRecordsResponse {
    content?: ({
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetRecordRequest {
    recordId: string;
  }
  export interface GetRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateRecordRequest {
    recordId: string;
    body: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    };
  }
  export interface UpdateRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteRecordRequest {
    recordId: string;
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createRecord(req: API.CreateRecordRequest, ctx: API.Context): Promise<API.CreateRecordResponse>;
  listRecords(req: API.ListRecordsRequest, ctx: API.Context): Promise<API.ListRecordsResponse>;
  getRecord(req: API.GetRecordRequest, ctx: API.Context): Promise<API.GetRecordResponse>;
  updateRecord(req: API.UpdateRecordRequest, ctx: API.Context): Promise<API.UpdateRecordResponse>;
  deleteRecord(req: API.DeleteRecordRequest, ctx: API.Context): Promise<void>;
}

export = API;
