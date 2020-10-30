/**
 * 维保单信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

import { MAINTAIN_TICKET_STATUS } from "../constants";
import { appearanceRecordSchema, softwareRecordSchema } from "./maintain-extra";

export const maintainSchema = new mongoose.Schema(
  {
    ticket: String,
    status: {
      type: String,
      enum: Object.values(MAINTAIN_TICKET_STATUS),
      default: MAINTAIN_TICKET_STATUS.CREATING,
    },
    rejected: { type: Boolean, default: false },

    vehicle: { type: String, ref: "Vehicle" },
    terminal: String,
    plate: String,
    vin: String,
    brands: String,

    appearance: String,
    software: String,
    closeAt: Date,

    appearanceRecord: appearanceRecordSchema,
    softwareRecord: softwareRecordSchema,

    repair: { type: String, ref: "Repair" },

    crm: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} MaintainDoc
 * @property {String} ticket - 工单编号 id
 * @property {MAINTAIN_TICKET_STATUS} status - 工单状态
 * @property {String} vehicle - 关联车辆 id
 * @property {String} terminal - 关联车辆 终端用户
 * @property {String} plate - 关联车辆 车牌号
 * @property {String} vin - 关联车辆 vin
 * @property {String} brands - 关联车辆 整车品牌
 * @property {String} appearance - 外观检查组
 * @property {String} software - 软件诊断组
 * @property {Date} closeAt - 完工时间
 * @property {String} appearanceRecord - 外观检查组操作记录
 * @property {String} softwareRecord - 软件诊断组操作记录
 * @property {String} repair - 关联维修单 id
 * @property {String} crm - CRM工单号
 */

/**
 * @typedef {mongoose.Document & MaintainDoc & Maintain} MaintainDocument
 */
export class Maintain {}

maintainSchema.loadClass(Maintain);
maintainSchema.plugin(helper);

/**
 * @type {mongoose.Model<MaintainDocument>}
 */
const Model = mongoose.model("Maintain", maintainSchema);

export default Model;
