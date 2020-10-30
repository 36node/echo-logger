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
export const BASE = env("BASE", "/echo");
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
