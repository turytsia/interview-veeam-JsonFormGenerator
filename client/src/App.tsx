import { FormGenerator } from "./components/Form/FormGenerator";
import { JsonEditor } from "./components/JsonEditor/JsonEditor";
import { useMemo, useState } from "react";
import { Tabs } from "./components/Tabs/Tabs";
import { Card } from "./components/Card/Card";

const defaultConfig = `{
  "title": "Sample Form",
  "fields": [
    { "name": "age", "label": "Age", "type": "numeric" },
    { "name": "name", "label": "Name", "type": "string" },
    { "name": "bio", "label": "Bio", "type": "multi-line" },
    { "name": "subscribe", "label": "Subscribe to newsletter", "type": "boolean" },
    { "name": "dob", "label": "Date of Birth", "type": "date" },
    { "name": "gender", "label": "Gender", "type": "enum", "options": ["Male", "Female", "Other"] }
  ],
  "buttons": ["OK", "Cancel"]
}`;

function App() {
  const [code, setCode] = useState<string>(defaultConfig);

  const tabs = useMemo(
    () => [
      {
        label: "Config",
        content: <JsonEditor value={code} onChange={setCode} />,
      },
      {
        label: "Result",
        content: <FormGenerator config={code} />,
      },
    ],
    [code],
  );

  return (
    <Card>
      <Tabs tabs={tabs} />
    </Card>
  );
}

export default App;
