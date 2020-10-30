export const createRecordReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["body"],
  properties: {
    body: {
      additionalProperties: false,
      type: "object",
      properties: {
        ticket: { type: "string", description: "关联工单 id" },
        title: { type: "string", description: "操作记录简介" },
        desc: { type: "string", description: "操作记录详情" },
      },
    },
  },
};
export const createRecordResSchema = {
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
            ticket: { type: "string", description: "关联工单 id" },
            title: { type: "string", description: "操作记录简介" },
            desc: { type: "string", description: "操作记录详情" },
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
export const listRecordsReqSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    query: {
      additionalProperties: false,
      type: "object",
      required: [],
      properties: {
        _limit: {
          type: "integer",
          format: "int32",
          default: 10,
          maximum: 1000,
        },
        _offset: { type: "integer", format: "int32", default: 0 },
        _sort: { type: "string" },
        _select: { type: "array", items: { type: "string" } },
        ticket_like: { type: "string", minLength: 1 },
      },
    },
  },
};
export const listRecordsResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      type: "array",
      items: {
        allOf: [
          {
            additionalProperties: false,
            type: "object",
            properties: {
              ticket: { type: "string", description: "关联工单 id" },
              title: { type: "string", description: "操作记录简介" },
              desc: { type: "string", description: "操作记录详情" },
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
    headers: {
      additionalProperties: false,
      type: "object",
      required: ["X-Total-Count"],
      properties: { "X-Total-Count": { type: "integer" } },
    },
  },
};
export const getRecordReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["recordId"],
  properties: { recordId: { type: "string" } },
};
export const getRecordResSchema = {
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
            ticket: { type: "string", description: "关联工单 id" },
            title: { type: "string", description: "操作记录简介" },
            desc: { type: "string", description: "操作记录详情" },
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
export const updateRecordReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["recordId", "body"],
  properties: {
    recordId: { type: "string" },
    body: {
      additionalProperties: false,
      type: "object",
      properties: {
        ticket: { type: "string", description: "关联工单 id" },
        title: { type: "string", description: "操作记录简介" },
        desc: { type: "string", description: "操作记录详情" },
      },
    },
  },
};
export const updateRecordResSchema = {
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
            ticket: { type: "string", description: "关联工单 id" },
            title: { type: "string", description: "操作记录简介" },
            desc: { type: "string", description: "操作记录详情" },
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
export const deleteRecordReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["recordId"],
  properties: { recordId: { type: "string" } },
};
