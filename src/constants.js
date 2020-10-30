import { ADMIN_ROLE_TYPE } from "./config";

/**
 * Project/Mileston/Ticket state
 * @enum {string} "OPEN|CLOSED"
 */
export const TAG = {
  CAT: "CAT",
  DOG: "DOG",
};

/**
 * 角色
 * 内置角色 ADMIN 会自动解析成以下所有角色
 * 内置角色 USER 为白板
 *
 * @enum {string} "OPEN|CLOSED"
 */
export const Role = {
  /**
   * 固定角色
   */
  // 管理员
  ADMIN: ADMIN_ROLE_TYPE,

  /**
   * 数据角色
   */
};

/**
 * 车辆 录入 工单 状态
 */
export const VEHICLE_TICKET_STATUS = {
  CREATING: "CREATING", // 等待工单生成
  REJECTED: "REJECTED", // 审核未通过
  PENDING: "PENDING", // 待审核
  PASSED: "PASSED", // 已通过
};

/**
 * 维修单 工单 状态
 */
export const REPAIR_TICKET_STATUS = {
  CREATING: "CREATING", // 等待工单生成
  REPARING: "REPARING", // 维修中
  PAUSING: "PAUSING", // 暂停中
  REJECTED: "REJECTED", // 审核未通过
  PENDING: "PENDING", // 待审核
  PASSED: "PASSED", // 已通过
};

/**
 * 维保单 工单 状态
 */
export const MAINTAIN_TICKET_STATUS = {
  CREATING: "CREATING", // 等待工单生成
  WAITING: "WAITING", // 待处理
  MAINTAINING: "MAINTAINING", // 维保中
  REPARING: "REPARING", // 维修中
  PENDING: "PENDING", // 待审核
  PASSED: "PASSED", // 已通过
};

/**
 * 维保单 电池均衡类型
 */
export const BATTERY_BALANCE_TYPE = {
  LOW: "LOW",
  MIDDLE: "MIDDLE",
  HIGH: "HIGH",
};

/**
 * 草稿箱 类型
 */
export const DRAFT_TYPE = {
  VEHICLE: "VEHICLE", // 车辆工单
  REPAIR: "REPAIR", // 维修单工单
  APPEARANCE: "APPEARANCE", // 维保单-外观检测
  SOFTWARE: "SOFTWARE", // 维保单-软件检测
};
