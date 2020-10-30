export const createLogReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["body"],
  properties: {
    body: {
      additionalProperties: false,
      type: "object",
      properties: {
        title: { type: "string", description: "日志标题" },
        desc: { type: "string", description: "日志详情" },
        createBy: { type: "string", description: "创建者" },
        createAt: {
          tsType: "Date",
          type: "string",
          format: "date-time",
          description: "创建时间",
        },
      },
    },
  },
};
export const createLogResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      additionalProperties: false,
      type: "object",
      properties: {
        title: { type: "string", description: "日志标题" },
        desc: { type: "string", description: "日志详情" },
        createBy: { type: "string", description: "创建者" },
        createAt: {
          tsType: "Date",
          type: "string",
          format: "date-time",
          description: "创建时间",
        },
      },
    },
  },
};
