/**
 * 车辆信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

import { VEHICLE_TICKET_STATUS } from "../constants";
import { fileSchema } from "./file";

export const vehicleSchema = new mongoose.Schema(
  {
    ticket: String,
    status: {
      type: String,
      enum: Object.values(VEHICLE_TICKET_STATUS),
      default: VEHICLE_TICKET_STATUS.CREATING,
    },
    rejected: { type: Boolean, default: false },

    scrapped: { type: Boolean, default: false },

    terminal: String,
    park: { type: String, ref: "Park" },

    purchaseAt: Date,
    plateAt: Date,
    operateAt: Date,
    retireAt: Date,
    year: Number,

    license: [fileSchema],
    brands: String,
    plate: String,
    vin: String,
    jobNum: String,
    num: String,

    catl: String,
    batteryPN: String,
    batteryNum: String,
    batteryPropRight: String,
    power: Number,

    bmuHardware: String,
    bmuSoftware: String,
    cscHardware: String,
    cscSoftware: String,
    rdb: String,

    remark: String,

    softwarePic: [fileSchema],
    frontPic: [fileSchema],
    nameplatePic: [fileSchema],
    meterPic: [fileSchema],
    batteryPic: [fileSchema],
    otherPic: [fileSchema],

    crm: String,

    createBy: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} VehicleDoc
 * @property {String} ticket - 工单编号 id
 * @property {VEHICLE_TICKET_STATUS} status - 工单状态
 * @property {Boolean} rejected - 工单是否被驳回过
 * @property {Boolean} scrapped - 车辆是否报废
 * @property {String} terminal - 终端用户
 * @property {String} park - 车场 id
 * @property {Date} purchaseAt - 购买日期
 * @property {Date} plateAt - 上牌日期
 * @property {Date} operateAt - 运营日期
 * @property {Date} retireAt - 报废日期
 * @property {Number} year 年份
 * @property {[object]} license - 车辆行驶证
 * @property {String} brands - 整车品牌
 * @property {String} plate - 车牌号
 * @property {String} vin - VIN号
 * @property {String} jobNum - 车辆工号
 * @property {String} num - 车辆自编号
 * @property {String} catl - CATL项目名称
 * @property {String} batteryPN - 电池PN
 * @property {String} batteryNum - 电池号
 * @property {String} batteryPropRight - 电池产权
 * @property {Number} power - 功率 kw
 * @property {String} bmuHardware - BMU硬件版本
 * @property {String} bmuSoftware - BMU软件版本
 * @property {String} cscHardware - CSC硬件版本
 * @property {String} cscSoftware - CSC软件版本
 * @property {String} rdb - RDB
 * @property {String} remark - 备注
 * @property {[object]} softwarePic - 上位机软件图片urls
 * @property {[object]} frontPic - 正面车头图片urls
 * @property {[object]} nameplatePic - 车辆铭牌图片urls
 * @property {[object]} meterPic - 车辆仪表图片urls
 * @property {[object]} batteryPic - 电池号图片urls
 * @property {[object]} otherPic - 其他图片urls
 * @property {String} crm - CRM工单号
 * @property {String} createBy - 创建者
 */

/**
 * @typedef {mongoose.Document & VehicleDoc & Vehicle} VehicleDocument
 */
export class Vehicle {}

vehicleSchema.loadClass(Vehicle);
vehicleSchema.plugin(helper);

/**
 * @type {mongoose.Model<VehicleDocument>}
 */
const Model = mongoose.model("Vehicle", vehicleSchema);

export default Model;
