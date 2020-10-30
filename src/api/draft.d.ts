import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateDraftRequest {
    body: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      type: "VEHICLE" | "REPAIR" | "MAINTAIN";
      ns: string;
      createBy: string;
    };
  }
  export interface CreateDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListDaftsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      type: "VEHICLE" | "REPAIR" | "APPEARANCE" | "SOFTWARE";
      resource?: string;
      ns_like?: string;
      createBy?: string;
    };
  }
  export interface ListDaftsResponse {
    content?: ({
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
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
  export interface GetDraftRequest {
    draftId: string;
  }
  export interface GetDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateDraftRequest {
    draftId: string;
    /**
     * 草稿箱信息
     */
    body: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    };
  }
  export interface UpdateDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteDraftRequest {
    draftId: string;
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createDraft(req: API.CreateDraftRequest, ctx: API.Context): Promise<API.CreateDraftResponse>;
  listDafts(req: API.ListDaftsRequest, ctx: API.Context): Promise<API.ListDaftsResponse>;
  getDraft(req: API.GetDraftRequest, ctx: API.Context): Promise<API.GetDraftResponse>;
  updateDraft(req: API.UpdateDraftRequest, ctx: API.Context): Promise<API.UpdateDraftResponse>;
  deleteDraft(req: API.DeleteDraftRequest, ctx: API.Context): Promise<void>;
}

export = API;
