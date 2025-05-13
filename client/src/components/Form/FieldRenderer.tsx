import React from "react";
import type { FormField } from "./types";

interface FieldRendererProps {
  field: FormField;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({ field }) => {
  const commonClasses = "border rounded p-2";

  switch (field.type) {
    case "numeric":
      return <input type="number" className={commonClasses} />;

    case "string":
      return <input type="text" className={commonClasses} />;

    case "multi-line":
      return <textarea className={commonClasses} />;

    case "boolean":
      return (
        <span>
          <input type="checkbox" />
        </span>
      );

    case "date":
      return <input type="date" className={commonClasses} />;

    case "enum":
      return (
        <div className="space-y-1">
          {field.options?.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input type="radio" name={field.name} value={option} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      );

    default:
      return null;
  }
};
