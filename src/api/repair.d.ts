import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateRepairRequest {
    /**
     * 维修单创建信息
     */
    body: {
      maintain?: string;
      vehicle: string;
      plate: string;
      vin: string;
      address: string;
      reporter?: string;
      reporterPhone?: string;
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee: string;
      /**
       * 派送时间
       */
      assignAt: Date;
      /**
       * 创建者
       */
      createBy: string;
      ticket?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface CreateRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListRepairsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      id_like?: string;
      status?:
        | "CREATING"
        | "FILLING"
        | "DELIVERED"
        | "REPARING"
        | "REPARED"
        | "PAUSING"
        | "PENDING"
        | "PASSED";
      createAt_gt?: Date;
      createAt_lt?: Date;
      dispatchWorker_like?: string;
      plate_like?: string;
      crm_like?: string;
      vin_like?: string;
    };
  }
  export interface ListRepairsResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
  export interface GetRepairRequest {
    repairId: string;
  }
  export interface GetRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateRepairRequest {
    repairId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    };
  }
  export interface UpdateRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteRepairRequest {
    repairId: string;
  }
  export interface UpdateRecordRequest {
    repairId: string;
    /**
     * 维修单维修记录
     */
    body: {
      signAddress: string;
      arrivalAt: Date;
      mileages: string;
      routeMap?: string;
      faultCell: string;
      workHours: string;
      failReason: string;
      processMethod: string;
      faultAttr: string;
      faultMode: string;
      backups?: {
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 单价
         */
        unitPrice?: string;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
      }[];
      livePic: string[];
      resultDesc: string;
      softwarePic: string[];
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      otherPic?: string[];
      dataFile?: string;
      otherCost?: string;
      remark?: string;
      workers: {
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: string;
        /**
         * 工作量
         */
        Workload?: number;
      }[];
      pauseReason?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateRecordResponse {
    /**
     * 维修单维修记录
     */
    content?: {
      signAddress: string;
      arrivalAt: Date;
      mileages: string;
      routeMap?: string;
      faultCell: string;
      workHours: string;
      failReason: string;
      processMethod: string;
      faultAttr: string;
      faultMode: string;
      backups?: {
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 单价
         */
        unitPrice?: string;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
      }[];
      livePic: string[];
      resultDesc: string;
      softwarePic: string[];
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      otherPic?: string[];
      dataFile?: string;
      otherCost?: string;
      remark?: string;
      workers: {
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: string;
        /**
         * 工作量
         */
        Workload?: number;
      }[];
      pauseReason?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createRepair(req: API.CreateRepairRequest, ctx: API.Context): Promise<API.CreateRepairResponse>;
  listRepairs(req: API.ListRepairsRequest, ctx: API.Context): Promise<API.ListRepairsResponse>;
  getRepair(req: API.GetRepairRequest, ctx: API.Context): Promise<API.GetRepairResponse>;
  updateRepair(req: API.UpdateRepairRequest, ctx: API.Context): Promise<API.UpdateRepairResponse>;
  deleteRepair(req: API.DeleteRepairRequest, ctx: API.Context): Promise<void>;
  updateRecord(req: API.UpdateRecordRequest, ctx: API.Context): Promise<API.UpdateRecordResponse>;
}

export = API;
