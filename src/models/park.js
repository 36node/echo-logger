/**
 * 车场信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

export const parkSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    appearance: String,
    software: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} ParkDoc
 * @property {String} name - 车场名
 * @property {String} address - 车场地址
 * @property {String} appearance - 外观检测默认组ns
 * @property {String} software - 软件诊断默认组ns
 */

/**
 * @typedef {mongoose.Document & ParkDoc & Park} ParkDocument
 */
export class Park {}

parkSchema.loadClass(Park);
parkSchema.plugin(helper);

/**
 * @type {mongoose.Model<ParkDocument>}
 */
const Model = mongoose.model("Park", parkSchema);

export default Model;
