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
      allOf: [
        {
          additionalProperties: false,
          type: "object",
          properties: {
            title: { type: "string", description: "日志标题" },
            desc: { type: "string", description: "日志详情" },
            createBy: { type: "string", description: "创建者" },
          },
        },
        {
          additionalProperties: false,
          type: "object",
          required: ["id"],
          properties: {
            id: { type: "string" },
            updateAt: { tsType: "Date", type: "string", format: "date-time" },
            updateBy: { type: "string" },
            createAt: { tsType: "Date", type: "string", format: "date-time" },
            createBy: { type: "string" },
          },
        },
      ],
    },
  },
};
