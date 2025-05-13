import { useMemo } from "react";
import Ajv, { type JSONSchemaType } from "ajv";
import type { FormConfig } from "./types";
import { schema } from "../../utils/schema";

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile<FormConfig>(schema as JSONSchemaType<FormConfig>);

export function useFormConfig(config?: string | null) {
  return useMemo(() => {
    if (!config) {
      return {
        parsedConfig: null as FormConfig | null,
        errors: ["No config provided"],
      };
    }

    try {
      const candidate = JSON.parse(config);
      if (!validate(candidate)) {
        const errs = (validate.errors ?? []).map(
          (e) => `${e.instancePath || "(root)"} ${e.message}`,
        );
        return { parsedConfig: null as FormConfig | null, errors: errs };
      }

      return { parsedConfig: candidate as FormConfig, errors: [] };
    } catch (err) {
      return {
        parsedConfig: null as FormConfig | null,
        errors: ["Invalid JSON: " + (err as Error).message],
      };
    }
  }, [config]);
}
