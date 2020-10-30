export const createParkReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["body"],
  properties: {
    body: {
      allOf: [
        {
          additionalProperties: false,
          description: "车场信息",
          type: "object",
          properties: {
            name: { type: "string", description: "车场名" },
            address: { type: "string", description: "车场地址" },
            appearance: { type: "string", description: "外观检测默认组ns" },
            software: { type: "string", description: "软件诊断默认组ns" },
          },
        },
        {
          additionalProperties: false,
          type: "object",
          required: ["name", "address", "appearance", "software"],
          properties: {
            name: { type: "string" },
            address: { type: "string" },
            appearance: { type: "string" },
            software: { type: "string" },
          },
        },
      ],
    },
  },
};
export const createParkResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "车场信息",
          type: "object",
          properties: {
            name: { type: "string", description: "车场名" },
            address: { type: "string", description: "车场地址" },
            appearance: { type: "string", description: "外观检测默认组ns" },
            software: { type: "string", description: "软件诊断默认组ns" },
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
export const listParksReqSchema = {
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
        name_like: { type: "string" },
      },
    },
  },
};
export const listParksResSchema = {
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
            description: "车场信息",
            type: "object",
            properties: {
              name: { type: "string", description: "车场名" },
              address: { type: "string", description: "车场地址" },
              appearance: { type: "string", description: "外观检测默认组ns" },
              software: { type: "string", description: "软件诊断默认组ns" },
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
export const getParkReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["parkId"],
  properties: { parkId: { type: "string" } },
};
export const getParkResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "车场信息",
          type: "object",
          properties: {
            name: { type: "string", description: "车场名" },
            address: { type: "string", description: "车场地址" },
            appearance: { type: "string", description: "外观检测默认组ns" },
            software: { type: "string", description: "软件诊断默认组ns" },
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
export const updateParkReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["parkId", "body"],
  properties: {
    parkId: { type: "string" },
    body: {
      additionalProperties: false,
      description: "车场信息",
      type: "object",
      properties: {
        name: { type: "string", description: "车场名" },
        address: { type: "string", description: "车场地址" },
        appearance: { type: "string", description: "外观检测默认组ns" },
        software: { type: "string", description: "软件诊断默认组ns" },
      },
    },
  },
};
export const updateParkResSchema = {
  additionalProperties: false,
  type: "object",
  required: [],
  properties: {
    content: {
      allOf: [
        {
          additionalProperties: false,
          description: "车场信息",
          type: "object",
          properties: {
            name: { type: "string", description: "车场名" },
            address: { type: "string", description: "车场地址" },
            appearance: { type: "string", description: "外观检测默认组ns" },
            software: { type: "string", description: "软件诊断默认组ns" },
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
export const deleteParkReqSchema = {
  additionalProperties: false,
  type: "object",
  required: ["parkId"],
  properties: { parkId: { type: "string" } },
};
