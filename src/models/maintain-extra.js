/**
 * 维保单 子文档
 */

import mongoose from "mongoose";

import { BATTERY_BALANCE_TYPE } from "../constants";

/**
 * @typedef {Object} AppearanceRecordDoc
 * @property {String} appearanceSignAddress - 外观检查组签到地址
 * @property {String} appearanceRouteMap - 外观检查组路线图url
 * @property {Date} appearanceArrivalAt - 外观检查组到场时间
 * @property {Array<string>} appearanceWorkers - 外观检查组实际出工人
 * @property {Boolean} meterAlarm - 仪表电池报警信息
 * @property {Boolean} meterAlarmResult - 仪表电池报警信息现场是否解决
 * @property {String} meterAlarmDesc - 仪表电池报警信息异常描述及现场处理
 * @property {Boolean} boxDamage - 箱体外壳损毁、变形
 * @property {Boolean} boxDamageResult - 箱体外壳损毁、变形现场是否解决
 * @property {String} boxDamageDesc - 箱体外壳损毁、变形异常描述及现场处理
 * @property {Boolean} electricLeakage - 电箱漏液
 * @property {Boolean} electricLeakageResult - 电箱漏液现场是否解决
 * @property {String} electricLeakageDesc - 电箱漏液异常描述及现场处理
 * @property {Boolean} valveLoose - 气压平衡阀或防暴阀松动
 * @property {Boolean} valveLooseResult - 气压平衡阀或防暴阀松动现场是否解决
 * @property {String} valveLooseDesc - 气压平衡阀或防暴阀松动异常描述及现场处理
 * @property {Boolean} coverAbnormal - 高压端子外盖检查异常
 * @property {Boolean} coverAbnormalResult - 高压端子外盖检查异常现场是否解决
 * @property {String} coverAbnormalDesc - 高压端子外盖检查异常异常描述及现场处理
 * @property {Boolean} headLoose - 格兰头松动
 * @property {Boolean} headLooseResult - 格兰头松动现场是否解决
 * @property {String} headLooseDesc - 格兰头松动异常描述及现场处理
 * @property {Boolean} boltLoose - 快断器螺栓松动
 * @property {Boolean} boltLooseResult - 快断器螺栓松动现场是否解决
 * @property {String} boltLooseDesc - 快断器螺栓松动异常描述及现场处理
 * @property {Boolean} msdAbnormal - 高压盒MSD（扭力抽检时电箱MSD）异常
 * @property {Boolean} msdAbnormalResult - 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
 * @property {String} msdAbnormalDesc - 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
 * @property {Boolean} hvWireWear - 高压线束磨损或磨损风险
 * @property {Boolean} hvWireWearResult - 高压线束磨损或磨损风险现场是否解决
 * @property {String} hvWireWearDesc - 高压线束磨损或磨损风险异常描述及现场处理
 * @property {Boolean} lvWireWear - 低压线束磨损或磨损风险
 * @property {Boolean} lvWireWearResult - 低压线束磨损或磨损风险现场是否解决
 * @property {String} lvWireWearDesc - 低压线束磨损或磨损风险异常描述及现场处理
 * @property {Boolean} hvConnectorFasten - 高压接插件不紧固
 * @property {Boolean} hvConnectorFastenResult - 高压接插件不紧固现场是否解决
 * @property {String} hvConnectorFastenDesc - 高压接插件不紧固异常描述及现场处理
 * @property {Boolean} lvConnectorFasten - 低压接插件不紧固
 * @property {Boolean} lvConnectorFastenResult - 低压接插件不紧固现场是否解决
 * @property {String} lvConnectorFastenDesc - 低压接插件不紧固异常描述及现场处理
 * @property {Array<string>} frontPic - 正面车头图片urls
 * @property {Array<string>} nameplatePic - 车辆铭牌图片urls
 * @property {Array<string>} meterPic - 车辆仪表图片urls
 * @property {Array<string>} batteryPic - 电池号图片urls
 */
const appearanceRecordSchema = new mongoose.Schema(
  {
    appearanceSignAddress: String,
    appearanceRouteMap: String,
    appearanceArrivalAt: Date,
    appearanceWorkers: [String],

    meterAlarm: Boolean,
    meterAlarmResult: Boolean,
    meterAlarmDesc: String,

    boxDamage: Boolean,
    boxDamageResult: Boolean,
    boxDamageDesc: String,

    electricLeakage: Boolean,
    electricLeakageResult: Boolean,
    electricLeakageDesc: String,

    valveLoose: Boolean,
    valveLooseResult: Boolean,
    valveLooseDesc: String,

    coverAbnormal: Boolean,
    coverAbnormalResult: Boolean,
    coverAbnormalDesc: String,

    headLoose: Boolean,
    headLooseResult: Boolean,
    headLooseDesc: String,

    boltLoose: Boolean,
    boltLooseResult: Boolean,
    boltLooseDesc: String,

    msdAbnormal: Boolean,
    msdAbnormalResult: Boolean,
    msdAbnormalDesc: String,

    hvWireWear: Boolean,
    hvWireWearResult: Boolean,
    hvWireWearDesc: String,

    lvWireWear: Boolean,
    lvWireWearResult: Boolean,
    lvWireWearDesc: String,

    hvConnectorFasten: Boolean,
    hvConnectorFastenResult: Boolean,
    hvConnectorFastenDesc: String,

    lvConnectorFasten: Boolean,
    lvConnectorFastenResult: Boolean,
    lvConnectorFastenDesc: String,

    frontPic: [String],
    nameplatePic: [String],
    meterPic: [String],
    batteryPic: [String],
  },
  { _id: false }
);

/**
 * @typedef {Object} SoftwareRecordDoc
 * @property {String} softwareSignAddress - 软件诊断组签到地址
 * @property {String} softwareRouteMap - 软件诊断组路线图url
 * @property {Date} softwareArrivalAt - 软件诊断组到场时间
 * @property {Array<string>} softwareWorkers - 软件诊断组实际出工人
 * @property {Array<string>} softwareStartPic - 上位机软件截图（开始urls
 * @property {Array<string>} softwareEndPic - 上位机软件截图（最后urls
 * @property {String} soh - SOH测量值
 * @property {String} sohResult - SOH测量值现场修复后
 * @property {String} sohDesc - SOH测量值异常描述及现场处理
 * @property {String} current - 静态上位机电流
 * @property {String} currentResult - 静态上位机电流现场修复后
 * @property {String} currentDesc - 静态上位机电流异常描述及现场处理
 * @property {String} soc - soc
 * @property {String} socResult - soc现场修复后
 * @property {String} roc - roc
 * @property {String} rocResult - roc现场修复后
 * @property {String} socDesc - soc异常描述及现场处理
 * @property {String} addVoltage - 累加电压
 * @property {String} addVoltageResult - 累加电压现场修复后
 * @property {String} totalVoltage - 内侧总电压
 * @property {String} totalVoltageResult - 内侧总电压现场修复后
 * @property {String} addVoltageDesc - 累加电压异常描述及现场处理
 * @property {String} maxVoltage - 最大单体电压Vmax
 * @property {String} maxVoltageResult - 最大单体电压Vmax现场修复后
 * @property {String} maxVoltageDesc - 最大单体电压Vmax异常描述及现场处理
 * @property {String} minVoltage - 最小单体电压Vmin
 * @property {String} minVoltageResult - 最小单体电压Vmin现场修复后
 * @property {String} minVoltageDesc - 最小单体电压Vmin异常描述及现场处理
 * @property {String} maxTemperature - 最大单体温度Tmax
 * @property {String} maxTemperatureResult - 最大单体温度Tmax现场修复后
 * @property {String} maxTemperatureDesc - 最大单体温度Tmax异常描述及现场处理
 * @property {String} minTemperature - 最小单体温度Tmin
 * @property {String} minTemperatureResult - 最小单体温度Tmin现场修复后
 * @property {String} minTemperatureDesc - 最小单体温度Tmin异常描述及现场处理
 * @property {String} diffTemperature - 静态模组温差ΔT
 * @property {String} diffTemperatureResult - 静态模组温差ΔT现场修复后
 * @property {String} diffTemperatureDesc - 静态模组温差ΔT异常描述及现场处理
 * @property {BATTERY_BALANCE_TYPE} batteryBalance - 电池均衡
 * @property {String} diffVoltage - 单体压差ΔU
 * @property {String} diffVoltageResult - 单体压差ΔU现场修复后
 * @property {String} diffVoltageDesc - 单体压差ΔU异常描述及现场处理
 * @property {String} chargePositive - 绝缘阻值（充电）正极
 * @property {String} chargePositiveResult - 绝缘阻值（充电）正极现场修复后
 * @property {String} chargeNegative - 绝缘阻值（充电）负极
 * @property {String} chargeNegativeResult - 绝缘阻值（充电）负极现场修复后
 * @property {String} chargePositiveDesc - 绝缘阻值（充电）正极异常描述及现场处理
 * @property {String} nochargePositive - 绝缘阻值（非充电）正极
 * @property {String} nochargePositiveResult - 绝缘阻值（非充电）正极现场修复后
 * @property {String} nochargeNegative - 绝缘阻值（非充电）负极
 * @property {String} nochargeNegativeResult - 绝缘阻值（非充电）负极现场修复后
 * @property {String} nochargePositiveDesc - 绝缘阻值（非充电）正极异常描述及现场处理
 */
const softwareRecordSchema = new mongoose.Schema(
  {
    softwareSignAddress: String,
    softwareRouteMap: String,
    softwareArrivalAt: Date,
    softwareWorkers: [String],

    softwareStartPic: [String],
    softwareEndPic: [String],

    soh: String,
    sohResult: String,
    sohDesc: String,

    current: String,
    currentResult: String,
    currentDesc: String,

    soc: String,
    socResult: String,
    roc: String,
    rocResult: String,
    socDesc: String,

    addVoltage: String,
    addVoltageResult: String,
    totalVoltage: String,
    totalVoltageResult: String,
    addVoltageDesc: String,

    maxVoltage: String,
    maxVoltageResult: String,
    maxVoltageDesc: String,

    minVoltage: String,
    minVoltageResult: String,
    minVoltageDesc: String,

    maxTemperature: String,
    maxTemperatureResult: String,
    maxTemperatureDesc: String,

    minTemperature: String,
    minTemperatureResult: String,
    minTemperatureDesc: String,

    diffTemperature: String,
    diffTemperatureResult: String,
    diffTemperatureDesc: String,

    batteryBalance: {
      type: String,
      enum: Object.values(BATTERY_BALANCE_TYPE),
    },

    diffVoltage: String,
    diffVoltageResult: String,
    diffVoltageDesc: String,

    chargePositive: String,
    chargePositiveResult: String,
    chargeNegative: String,
    chargeNegativeResult: String,
    chargePositiveDesc: String,

    nochargePositive: String,
    nochargePositiveResult: String,
    nochargeNegative: String,
    nochargeNegativeResult: String,
    nochargePositiveDesc: String,
  },
  { _id: false }
);

export { appearanceRecordSchema, softwareRecordSchema };
