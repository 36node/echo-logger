/**
 * 上传文件的schema
 */
import mongoose from "mongoose";

export const fileSchema = new mongoose.Schema(
  {
    name: String,
    ossName: String,
    remark: String,
    size: Number,
    status: String,
    uid: String,
    url: String,
  },
  {
    _id: false,
  }
);

/**
 * @typedef {Object} FileDoc
 * @property {String} name - 文件名，上传时候的本地文件名
 * @property {String} ossName - oss上的文件名
 * @property {String} remark - 文件备注
 * @property {Number} size - 文件大小
 * @property {String} status - 文件上传状态 done
 * @property {String} uid - uid
 * @property {String} url - url
 */
