export const createDraftReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["body"],
  properties: {
    body: {
      allOf: [
        {
          additionalProperties: false,
          description: "草稿箱信息",
          type: "object",
          properties: {
            ns: { type: "string", description: "草稿所属ns" },
            resource: { type: "string", description: "关联资源 id" },
            type: {
              type: "string",
              enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
              description: "草稿类型",
            },
            content: { type: "string", description: "草稿箱内容" },
            createBy: { type: "string", description: "创建用户id" },
          },
        },
        {
          additionalProperties: false,
          type: "object",
          required: ["type", "ns", "createBy"],
          properties: {
            type: { type: "string", enum: ["VEHICLE", "REPAIR", "MAINTAIN"] },
            ns: { type: "string" },
            createBy: { type: "string" },
          },
        },
      ],
    },
  },
};
export const createDraftResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "草稿箱信息",
          type: "object",
          properties: {
            ns: { type: "string", description: "草稿所属ns" },
            resource: { type: "string", description: "关联资源 id" },
            type: {
              type: "string",
              enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
              description: "草稿类型",
            },
            content: { type: "string", description: "草稿箱内容" },
            createBy: { type: "string", description: "创建用户id" },
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
export const listDaftsReqSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    query: {
      additionalProperties: false,
      type: "object",
      required: ["type"],
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
        type: {
          type: "string",
          enum: ["VEHICLE", "REPAIR", "APPEARANCE", "SOFTWARE"],
        },
        resource: { type: "string" },
        ns_like: { type: "string" },
        createBy: { type: "string" },
      },
    },
  },
};
export const listDaftsResSchema = {
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
            description: "草稿箱信息",
            type: "object",
            properties: {
              ns: { type: "string", description: "草稿所属ns" },
              resource: { type: "string", description: "关联资源 id" },
              type: {
                type: "string",
                enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
                description: "草稿类型",
              },
              content: { type: "string", description: "草稿箱内容" },
              createBy: { type: "string", description: "创建用户id" },
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
export const getDraftReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["draftId"],
  properties: { draftId: { type: "string" } },
};
export const getDraftResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "草稿箱信息",
          type: "object",
          properties: {
            ns: { type: "string", description: "草稿所属ns" },
            resource: { type: "string", description: "关联资源 id" },
            type: {
              type: "string",
              enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
              description: "草稿类型",
            },
            content: { type: "string", description: "草稿箱内容" },
            createBy: { type: "string", description: "创建用户id" },
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
export const updateDraftReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["draftId", "body"],
  properties: {
    draftId: { type: "string" },
    body: {
      additionalProperties: false,
      description: "草稿箱信息",
      type: "object",
      properties: {
        ns: { type: "string", description: "草稿所属ns" },
        resource: { type: "string", description: "关联资源 id" },
        type: {
          type: "string",
          enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
          description: "草稿类型",
        },
        content: { type: "string", description: "草稿箱内容" },
        createBy: { type: "string", description: "创建用户id" },
      },
    },
  },
};
export const updateDraftResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "草稿箱信息",
          type: "object",
          properties: {
            ns: { type: "string", description: "草稿所属ns" },
            resource: { type: "string", description: "关联资源 id" },
            type: {
              type: "string",
              enum: ["VEHICLE", "REPAIR", "MAINTAIN"],
              description: "草稿类型",
            },
            content: { type: "string", description: "草稿箱内容" },
            createBy: { type: "string", description: "创建用户id" },
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
export const deleteDraftReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["draftId"],
  properties: { draftId: { type: "string" } },
};
