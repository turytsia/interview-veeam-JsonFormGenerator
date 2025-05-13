/**
 * Represents the full configuration of the dynamic form.
 */
export interface FormConfig {
  /** Title displayed above the form */
  title?: string;

  /** List of form fields to render */
  fields?: Array<FormField>;

  /** Button labels to render at the bottom of the form */
  buttons?: Array<string>;
}

/**
 * Base type for a form field.
 */
interface BaseField {
  /** Unique name of the field (used as a key) */
  name: string;

  /** Label displayed to the user */
  label: string;

  /** Optional default value */
  defaultValue?: string;
}

/**
 * Supported field types with their specific configurations.
 */
export type FormField =
  | NumericField
  | StringField
  | MultilineField
  | BooleanField
  | DateField
  | EnumField;

interface NumericField extends BaseField {
  type: "numeric";
}

interface StringField extends BaseField {
  type: "string";
}

interface MultilineField extends BaseField {
  type: "multi-line";
}

interface BooleanField extends BaseField {
  type: "boolean";
}

interface DateField extends BaseField {
  type: "date";
}

interface EnumField extends BaseField {
  type: "enum";

  /** Options to choose from (required for enum fields) */
  options: Array<string>;
}
