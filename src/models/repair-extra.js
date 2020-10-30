/**
 * 维修单 子文档
 */

import mongoose from "mongoose";

/**
 * @typedef {Object} BackupDoc
 * @property {String} itemNo - 物料号
 * @property {String} unitPrice - 单价
 * @property {Number} quantity - 数量
 * @property {Boolean} free - 是否收费
 */
const backupSchema = new mongoose.Schema(
  {
    itemNo: String,
    unitPrice: String,
    quantity: Number,
    free: { type: Boolean, default: false },
  },
  { _id: false }
);

/**
 * @typedef {Object} WorkerDoc
 * @property {String} user - 出工人 id
 * @property {String} mileages - 出工里程
 * @property {Number} Workload - 工作量
 */
const workerSchema = new mongoose.Schema(
  {
    user: String,
    mileages: String,
    Workload: Number,
  },
  { _id: false }
);

/**
 * @typedef {Object} RecordDoc
 * @property {String} mileages - 车辆里程数
 * @property {String} routeMap - 路线图url
 * @property {Date} arrivalAt - 到场时间
 * @property {String} signAddress - 维修人员签到地址
 * @property {String} faultCell - 故障元件
 * @property {String} workHours - 工时
 * @property {String} failReason - 失效原因
 * @property {String} processMethod - 处理方式
 * @property {String} faultAttr - 故障属性
 * @property {String} faultMode - 故障模式分类
 * @property {Array<object>} backups - 备件
 * @property {String} clientDesc - 客户的故障描述
 * @property {String} ownDesc - 己方的故障描述
 * @property {Array<string>} livePic - 现场图片urls
 * @property {String} resultDesc - 处理结果描述
 * @property {Array<string>} softwarePic - 上位机软件图片urls
 * @property {Array<string>} frontPic - 正面车头图片urls
 * @property {Array<string>} nameplatePic - 车辆铭牌图片urls
 * @property {Array<string>} meterPic - 车辆仪表图片urls
 * @property {Array<string>} batteryPic - 电池号图片urls
 * @property {Array<string>} otherPic - 其他图片urls
 * @property {String} dataFile - 采集数据文件url
 * @property {String} otherCost - 其他花费
 * @property {String} remark - 备注
 * @property {Array<object>} workers - 实际出工人
 */
const recordSchema = new mongoose.Schema(
  {
    mileages: String,
    routeMap: String,
    arrivalAt: Date,

    signAddress: String,

    faultCell: String,
    workHours: String,

    failReason: String,

    processMethod: String,

    faultAttr: String,
    faultMode: String,

    backups: [backupSchema],

    clientDesc: String,
    ownDesc: String,

    livePic: [String],
    resultDesc: String,

    softwarePic: [String],
    frontPic: [String],
    nameplatePic: [String],
    meterPic: [String],
    batteryPic: [String],
    otherPic: [String],

    dataFile: String,
    otherCost: String,
    remark: String,

    workers: [workerSchema],
  },
  { _id: false }
);

export { backupSchema, workerSchema, recordSchema };
