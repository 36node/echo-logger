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
        body: { type: "string", description: "日志详情" },
        tags: {
          type: "array",
          description: "标签 逗号分隔",
          items: { type: "string" },
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
        body: { type: "string", description: "日志详情" },
        tags: {
          type: "array",
          description: "标签 逗号分隔",
          items: { type: "string" },
        },
      },
    },
  },
};
