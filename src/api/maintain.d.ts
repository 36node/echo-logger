import { Context, Middleware } from "koa";
import Router, { RouterContext } from "koa-tree-router";

declare namespace API {
  export interface CreateMaintainRequest {
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    };
  }
  export interface CreateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListMaintainsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      id_like?: string;
      status?:
        | "CREATING"
        | "WAITING"
        | "MAINTAINING"
        | "REPARING"
        | "MAINTAINED"
        | "PENDING"
        | "PASSED";
      createAt_gt?: Date;
      createAt_lt?: Date;
      terminal_like?: string;
      plate_like?: string;
      crm_like?: string;
      vin_like?: string;
    };
  }
  export interface ListMaintainsResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetMaintainRequest {
    maintainId: string;
  }
  export interface GetMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateMaintainRequest {
    maintainId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    };
  }
  export interface UpdateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteMaintainRequest {
    maintainId: string;
  }
  export interface UpdateAppearanceRecordRequest {
    maintainId: string;
    /**
     * 维保单外观诊断记录
     */
    body: {
      appearanceSignAddress: string;
      appearanceArrivalAt: Date;
      appearanceRouteMap?: string;
      appearanceWorkers: string[];
      meterAlarm: boolean;
      meterAlarmResult?: boolean;
      meterAlarmDesc?: string;
      boxDamage: boolean;
      boxDamageResult?: boolean;
      boxDamageDesc?: string;
      electricLeakage: boolean;
      electricLeakageResult?: boolean;
      electricLeakageDesc?: string;
      valveLoose: boolean;
      valveLooseResult?: boolean;
      valveLooseDesc?: string;
      coverAbnormal: boolean;
      coverAbnormalResult?: boolean;
      coverAbnormalDesc?: string;
      headLoose: boolean;
      headLooseResult?: boolean;
      headLooseDesc?: string;
      boltLoose: boolean;
      boltLooseResult?: boolean;
      boltLooseDesc?: string;
      msdAbnormal: boolean;
      msdAbnormalResult?: boolean;
      msdAbnormalDesc?: string;
      hvWireWear: boolean;
      hvWireWearResult?: boolean;
      hvWireWearDesc?: string;
      lvWireWear: boolean;
      lvWireWearResult?: boolean;
      lvWireWearDesc?: string;
      hvConnectorFasten: boolean;
      hvConnectorFastenResult?: boolean;
      hvConnectorFastenDesc?: string;
      lvConnectorFasten: boolean;
      lvConnectorFastenResult?: boolean;
      lvConnectorFastenDesc?: string;
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateAppearanceRecordResponse {
    /**
     * 维保单外观诊断记录
     */
    content?: {
      appearanceSignAddress: string;
      appearanceArrivalAt: Date;
      appearanceRouteMap?: string;
      appearanceWorkers: string[];
      meterAlarm: boolean;
      meterAlarmResult?: boolean;
      meterAlarmDesc?: string;
      boxDamage: boolean;
      boxDamageResult?: boolean;
      boxDamageDesc?: string;
      electricLeakage: boolean;
      electricLeakageResult?: boolean;
      electricLeakageDesc?: string;
      valveLoose: boolean;
      valveLooseResult?: boolean;
      valveLooseDesc?: string;
      coverAbnormal: boolean;
      coverAbnormalResult?: boolean;
      coverAbnormalDesc?: string;
      headLoose: boolean;
      headLooseResult?: boolean;
      headLooseDesc?: string;
      boltLoose: boolean;
      boltLooseResult?: boolean;
      boltLooseDesc?: string;
      msdAbnormal: boolean;
      msdAbnormalResult?: boolean;
      msdAbnormalDesc?: string;
      hvWireWear: boolean;
      hvWireWearResult?: boolean;
      hvWireWearDesc?: string;
      lvWireWear: boolean;
      lvWireWearResult?: boolean;
      lvWireWearDesc?: string;
      hvConnectorFasten: boolean;
      hvConnectorFastenResult?: boolean;
      hvConnectorFastenDesc?: string;
      lvConnectorFasten: boolean;
      lvConnectorFastenResult?: boolean;
      lvConnectorFastenDesc?: string;
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateSoftwareRecordRequest {
    maintainId: string;
    /**
     * 维保单软件诊断记录
     */
    body: {
      softwareSignAddress: string;
      softwareArrivalAt: Date;
      softwareRouteMap?: string;
      softwareWorkers: string[];
      softwareStartPic: string[];
      softwareEndPic: string[];
      soh: string;
      sohResult?: string;
      sohDesc?: string;
      current: string;
      currentResult?: string;
      currentDesc?: string;
      soc: string;
      socResult?: string;
      roc: string;
      rocResult?: string;
      socDesc?: string;
      addVoltage: string;
      addVoltageResult?: string;
      totalVoltage: string;
      totalVoltageResult?: string;
      addVoltageDesc?: string;
      maxVoltage: string;
      maxVoltageResult?: string;
      maxVoltageDesc?: string;
      minVoltage: string;
      minVoltageResult?: string;
      minVoltageDesc?: string;
      maxTemperature: string;
      maxTemperatureResult?: string;
      maxTemperatureDesc?: string;
      minTemperature: string;
      minTemperatureResult?: string;
      minTemperatureDesc?: string;
      diffTemperature: string;
      diffTemperatureResult?: string;
      diffTemperatureDesc?: string;
      batteryBalance: "LOW" | "MIDDLE" | "HIGH";
      diffVoltage: string;
      diffVoltageResult?: string;
      diffVoltageDesc?: string;
      chargePositive: string;
      chargePositiveResult?: string;
      chargeNegative: string;
      chargeNegativeResult?: string;
      chargePositiveDesc?: string;
      nochargePositive: string;
      nochargePositiveResult?: string;
      nochargeNegative: string;
      nochargeNegativeResult?: string;
      nochargePositiveDesc?: string;
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateSoftwareRecordResponse {
    /**
     * 维保单软件诊断记录
     */
    content?: {
      softwareSignAddress: string;
      softwareArrivalAt: Date;
      softwareRouteMap?: string;
      softwareWorkers: string[];
      softwareStartPic: string[];
      softwareEndPic: string[];
      soh: string;
      sohResult?: string;
      sohDesc?: string;
      current: string;
      currentResult?: string;
      currentDesc?: string;
      soc: string;
      socResult?: string;
      roc: string;
      rocResult?: string;
      socDesc?: string;
      addVoltage: string;
      addVoltageResult?: string;
      totalVoltage: string;
      totalVoltageResult?: string;
      addVoltageDesc?: string;
      maxVoltage: string;
      maxVoltageResult?: string;
      maxVoltageDesc?: string;
      minVoltage: string;
      minVoltageResult?: string;
      minVoltageDesc?: string;
      maxTemperature: string;
      maxTemperatureResult?: string;
      maxTemperatureDesc?: string;
      minTemperature: string;
      minTemperatureResult?: string;
      minTemperatureDesc?: string;
      diffTemperature: string;
      diffTemperatureResult?: string;
      diffTemperatureDesc?: string;
      batteryBalance: "LOW" | "MIDDLE" | "HIGH";
      diffVoltage: string;
      diffVoltageResult?: string;
      diffVoltageDesc?: string;
      chargePositive: string;
      chargePositiveResult?: string;
      chargeNegative: string;
      chargeNegativeResult?: string;
      chargePositiveDesc?: string;
      nochargePositive: string;
      nochargePositiveResult?: string;
      nochargeNegative: string;
      nochargeNegativeResult?: string;
      nochargePositiveDesc?: string;
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  type Context<StateT, CustomT = {}> = RouterContext<StateT, CustomT>;
}

declare class API {
  middleware(operation: string): Array<Middleware>;
  bind(router: Router): API;
  createMaintain(
    req: API.CreateMaintainRequest,
    ctx: API.Context
  ): Promise<API.CreateMaintainResponse>;
  listMaintains(
    req: API.ListMaintainsRequest,
    ctx: API.Context
  ): Promise<API.ListMaintainsResponse>;
  getMaintain(req: API.GetMaintainRequest, ctx: API.Context): Promise<API.GetMaintainResponse>;
  updateMaintain(
    req: API.UpdateMaintainRequest,
    ctx: API.Context
  ): Promise<API.UpdateMaintainResponse>;
  deleteMaintain(req: API.DeleteMaintainRequest, ctx: API.Context): Promise<void>;
  updateAppearanceRecord(
    req: API.UpdateAppearanceRecordRequest,
    ctx: API.Context
  ): Promise<API.UpdateAppearanceRecordResponse>;
  updateSoftwareRecord(
    req: API.UpdateSoftwareRecordRequest,
    ctx: API.Context
  ): Promise<API.UpdateSoftwareRecordResponse>;
}

export = API;
