/**
 * 维修单信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

import { REPAIR_TICKET_STATUS } from "../constants";
import { recordSchema } from "./repair-extra";

export const repairSchema = new mongoose.Schema(
  {
    ticket: String,
    status: {
      type: String,
      enum: Object.values(REPAIR_TICKET_STATUS),
      default: REPAIR_TICKET_STATUS.CREATING,
    },
    rejected: { type: Boolean, default: false },

    vehicle: { type: String, ref: "Vehicle" },
    plate: String,
    vin: String,

    address: String,
    reporter: String,
    reporterPhone: String,
    problem: String,

    assignee: String,
    assignAt: Date,
    closeAt: Date,

    record: recordSchema,

    pauseReason: String,

    maintain: { type: String, ref: "Maintain" },

    crm: String,

    createBy: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} RepairDoc
 * @property {String} ticket - 工单编号 id
 * @property {REPAIR_TICKET_STATUS} status - 工单状态
 * @property {Boolean} status - 工单是否被驳回过
 * @property {String} vehicle - 关联车辆 id
 * @property {String} plate - 关联车辆车牌
 * @property {String} vin - 关联车辆vin码
 * @property {String} address - 故障地点
 * @property {String} reporter - 报修人姓名
 * @property {String} reporterPhone - 报修人联系方式
 * @property {String} problem - 问题描述
 * @property {String} assignee - 派工人员 id
 * @property {Date} assignAt - 派送时间
 * @property {Date} closeAt - 完工时间
 * @property {Object} record - 维修记录
 * @property {String} pauseReason - 暂停原因
 * @property {String} maintain - 关联维保单 id
 * @property {String} crm - CRM工单号
 * @property {String} createBy - 创建者
 */

/**
 * @typedef {mongoose.Document & RepairDoc & Repair} RepairDocument
 */
export class Repair {}

repairSchema.loadClass(Repair);
repairSchema.plugin(helper);

/**
 * @type {mongoose.Model<RepairDocument>}
 */
const Model = mongoose.model("Repair", repairSchema);

export default Model;
