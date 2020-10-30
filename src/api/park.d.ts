import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateParkRequest {
    body: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      name: string;
      address: string;
      appearance: string;
      software: string;
    };
  }
  export interface CreateParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListParksRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      name_like?: string;
    };
  }
  export interface ListParksResponse {
    content?: ({
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
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
  export interface GetParkRequest {
    parkId: string;
  }
  export interface GetParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateParkRequest {
    parkId: string;
    /**
     * 车场信息
     */
    body: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    };
  }
  export interface UpdateParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteParkRequest {
    parkId: string;
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createPark(req: API.CreateParkRequest, ctx: API.Context): Promise<API.CreateParkResponse>;
  listParks(req: API.ListParksRequest, ctx: API.Context): Promise<API.ListParksResponse>;
  getPark(req: API.GetParkRequest, ctx: API.Context): Promise<API.GetParkResponse>;
  updatePark(req: API.UpdateParkRequest, ctx: API.Context): Promise<API.UpdateParkResponse>;
  deletePark(req: API.DeleteParkRequest, ctx: API.Context): Promise<void>;
}

export = API;
