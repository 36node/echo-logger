/**
 * 草稿箱信息
 */
import mongoose from "mongoose";
import { helper, defaultOptions } from "@36node/mongoose-helper";

import { DRAFT_TYPE } from "../constants";

export const draftSchema = new mongoose.Schema(
  {
    resource: String,
    type: {
      type: String,
      enum: Object.values(DRAFT_TYPE),
    },
    content: String,
    ns: String,
    createBy: String,
  },
  defaultOptions
);

/**
 * @typedef {Object} DraftDoc
 * @property {String} resource - 关联资源 id
 * @property {REPAIR_TICKET_STATUS} type - 草稿类型
 * @property {String} content - 草稿箱内容
 * @property {String} ns - 草稿所属ns
 * @property {String} createBy - 草稿创建者
 */

/**
 * @typedef {mongoose.Document & DraftDoc & Draft} DraftDocument
 */
export class Draft {}

draftSchema.loadClass(Draft);
draftSchema.plugin(helper);

/**
 * @type {mongoose.Model<DraftDocument>}
 */
const Model = mongoose.model("Draft", draftSchema);

export default Model;
