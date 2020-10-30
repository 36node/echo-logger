import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateVehicleRequest {
    body: {
      terminal: string;
      park?: string;
      purchaseAt: Date;
      plateAt: Date;
      operateAt: Date;
      retireAt?: Date;
      year: number;
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      brands: string;
      plate: string;
      vin: string;
      jobNum: string;
      num?: string;
      catl: string;
      batteryPN: string;
      batteryNum: string;
      batteryPropRight?: string;
      power: number;
      bmuHardware: string;
      bmuSoftware: string;
      cscHardware: string;
      cscSoftware: string;
      rdb: string;
      remark?: string;
      status?: string;
      softwarePic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      frontPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      nameplatePic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      meterPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      batteryPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      createBy: string;
    };
  }
  export interface CreateVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
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
  export interface ListVehiclesRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      ticket?: string;
      createAt_gte?: string;
      createAt_lte?: string;
      plate?: string;
      plate_like?: string;
      crm?: string;
      vin?: string;
      createBy?: string;
      brands?: string | string[];
      terminal?: string | string[];
      park?: string | string[];
      status?: ("PENDING" | "PASSED" | "REJECTED") | ("PENDING" | "PASSED" | "REJECTED")[];
    };
  }
  export interface ListVehiclesResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
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
  export interface GetVehicleRequest {
    vehicleId: string;
  }
  export interface GetVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
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
  export interface UpdateVehicleRequest {
    vehicleId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    };
  }
  export interface UpdateVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
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
  export interface DeleteVehicleRequest {
    vehicleId: string;
  }
  export interface ListVehicleAlertsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      level?: number[] | number;
    };
    vehicleId: string;
  }
  export interface ListVehicleAlertsResponse {
    content?: ({
      /**
       * 故障等级
       */
      level?: number;
      /**
       * 故障码
       */
      code?: string;
      /**
       * 故障名称
       */
      name?: string;
      /**
       * 开始报警的时间
       */
      startedAt?: Date;
      /**
       * 次数
       */
      count?: number;
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
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createVehicle(
    req: API.CreateVehicleRequest,
    ctx: API.Context
  ): Promise<API.CreateVehicleResponse>;
  listVehicles(req: API.ListVehiclesRequest, ctx: API.Context): Promise<API.ListVehiclesResponse>;
  getVehicle(req: API.GetVehicleRequest, ctx: API.Context): Promise<API.GetVehicleResponse>;
  updateVehicle(
    req: API.UpdateVehicleRequest,
    ctx: API.Context
  ): Promise<API.UpdateVehicleResponse>;
  deleteVehicle(req: API.DeleteVehicleRequest, ctx: API.Context): Promise<void>;
  listVehicleAlerts(
    req: API.ListVehicleAlertsRequest,
    ctx: API.Context
  ): Promise<API.ListVehicleAlertsResponse>;
}

export = API;
