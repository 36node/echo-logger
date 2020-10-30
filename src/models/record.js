/**
 * 操作记录
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

export const recordSchema = new mongoose.Schema(
  {
    ticket: String,
    title: String,
    desc: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} RecordDoc
 * @property {String} ticket - 关联工单 id
 * @property {String} title - 操作记录简介
 * @property {String} desc - 操作记录详情
 */

/**
 * @typedef {mongoose.Document & RecordDoc & Record} RecordDocument
 */
export class Record {}

recordSchema.loadClass(Record);
recordSchema.plugin(helper);

/**
 * @type {mongoose.Model<RecordDocument>}
 */
const Model = mongoose.model("Record", recordSchema);

export default Model;
