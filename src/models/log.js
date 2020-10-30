/**
 * 日志信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

export const logSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    createBy: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} LogDoc
 * @property {String} title - 日志标题
 * @property {String} desc - 日志详情
 * @property {String} createBy - 创建者
 */

/**
 * @typedef {mongoose.Document & LogDoc & Log} LogDocument
 */
export class Log {}

logSchema.loadClass(Log);
logSchema.plugin(helper);

/**
 * @type {mongoose.Model<LogDocument>}
 */
const Model = mongoose.model("Log", logSchema);

export default Model;
