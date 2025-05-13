import type { JSONSchema7 } from "json-schema";

export const schema: JSONSchema7 = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    title: { type: "string" },
    fields: {
      type: "array",
      items: {
        type: "object",
        required: ["name", "label", "type"],
        properties: {
          name: { type: "string", required: [] },
          label: { type: "string", required: [] },
          type: {
            type: "string",
            enum: [
              "numeric",
              "string",
              "multi-line",
              "boolean",
              "date",
              "enum",
            ],
            required: [],
          },
          default: {},
          options: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    },
    buttons: {
      type: "array",
      items: { type: "string" },
    },
  },
  additionalProperties: false,
} as const;
