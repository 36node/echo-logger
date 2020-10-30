import dotenv from "dotenv";

/**
 * init dotenv
 * priority: environment -> .env
 *
 * Available settings
 *
 * APP_PORT=9527
 * APP_BASE_PATH=/v1
 * APP_MONGODB_CONNECTION="mongodb://localhost/petstore"
 */

dotenv.config();

/**
 *
 * @param {string} name envrionment name
 * @param {object} opt option with { required, default }
 * @returns {*} value
 */

export function env(name, init) {
  const value = process.env[name.toUpperCase()] || process.env[name] || init;

  if (value === undefined) {
    throw new Error(`environment ${name} is missing`);
  }

  return value;
}

/**
 * basic
 */
export const NODE_ENV = env("NODE_ENV", "development");
export const PORT = env("PORT", 9527);
export const BASE = env("BASE", "/core/v0");
export const LOG_LEVEL = env("LOG_LEVEL", "info");

// 管理员权限 type
export const ADMIN_ROLE_TYPE = env("ADMIN_ROLE_TYPE", "admin");

/**
 * Mongodb
 */
export const MONGODB_CONNECTION = env(
  "MONGODB_CONNECTION",
  `mongodb://localhost/echo-logger-${NODE_ENV}`
);

/**
 * bus-op api endpoint
 */
export const BUS_OP_ENDPOINT_BASE = env(
  "BUS_OP_ENDPOINT_BASE",
  "https://api.jiushi.36node.com/op/v0/"
);

export const BUS_OP_ENDPOINT_TOKEN = env(
  "BUS_OP_ENDPOINT_TOKEN",
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOltdLCJzdWIiOiJzZXNzaW9uIiwianRpIjoiNWY5MTM3YzNiN2U5MmYwMDExMDU5YmYwIiwiYWN0aXZlIjp0cnVlLCJ1c2VyIjoiNWQ1Mzg5YjU0OTZhYTMwMDExMTkzZjM3IiwibnMiOlsiLzM2bm9kZSJdLCJyb2xlcyI6W3sibnMiOiIvYnVzIiwibmFtZSI6IkFETUlOIn1dLCJpYXQiOjE2MDMzNTI1OTIsImV4cCI6OTcwMzQzODk5Mn0.KDwFjLt7xI-vJ77UaYGaxAkOIVFN8veTZ7rPy98_rvjUbfua2qTQjHI8PiW2WitA8ISr4rJ_q1okLEuGQFl0eERkUrtA0U_PvfYdMusqtuDxhzRiKY2Iv68a8KZYhl4uoXCln2UP_qp4Z1ieE_rdvEXUabjguk-0idWieExsxKk"
);
