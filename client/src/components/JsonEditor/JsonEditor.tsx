import React, { useMemo } from "react";
import ReactCodeMirror, {
  type ReactCodeMirrorProps,
} from "@uiw/react-codemirror";
import { jsonSchema } from "codemirror-json-schema";
import { schema } from "../../utils/schema";

type JsonEditorProps = Pick<ReactCodeMirrorProps, "value" | "onChange">;

export const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange }) => {
  const extensions = useMemo(() => [jsonSchema(schema)], []);

  return (
    <ReactCodeMirror
      value={value}
      onChange={onChange}
      extensions={extensions}
      basicSetup={{ lineNumbers: true, foldGutter: true }}
      className="h-[400px] overflow-auto"
    />
  );
};
