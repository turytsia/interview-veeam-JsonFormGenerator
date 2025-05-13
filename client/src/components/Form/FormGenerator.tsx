import React from "react";
import { Button } from "@headlessui/react";
import { useFormConfig } from "./useFormConfig";
import { FieldRenderer } from "./FieldRenderer";

interface FormGeneratorProps {
  config?: string | null;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ config }) => {
  const { parsedConfig, errors } = useFormConfig(config);

  if (errors.length) {
    return (
      <div className="h-[400px] text-red-600 space-y-1">
        {errors.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
    );
  }

  // handled above
  if (!parsedConfig) return null;

  return (
    <div className="h-[400px] overflow-auto">
      <h2 className="text-xl font-bold mb-4">{parsedConfig.title}</h2>

      <form className="space-y-4">
        {parsedConfig.fields?.map((field) => (
          <div key={field.name} className="flex flex-col items-stretch">
            <label className="font-medium mb-1">{field.label}</label>
            <FieldRenderer field={field} />
          </div>
        ))}

        <div className="flex space-x-2">
          {parsedConfig.buttons?.map((btn) => (
            <Button
              as="button"
              type="button"
              key={btn}
              className="border rounded px-3 py-1"
            >
              {btn}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
};
