export type ComponentType = "formula" | "composition" | "cycle";

export type FormulaType =
  | "nominal-real-gdp"
  | "gdp-deflator"
  | "inflation-rate"
  | "unemployment-rate"
  | "labor-force-participation";

export interface ControlConfig {
  key: string;
  label: string;
  shortLabel?: string;
  defaultValue: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export interface CompositionPart extends ControlConfig {
  color?: string;
  baseValue?: number;
}

export interface CycleStage {
  key: string;
  label: string;
  subtitle: string;
  explanation: string;
  policy?: string;
}

export interface LessonConfig {
  id: string;
  label: string;
  title: string;
  description: string;
  componentType: ComponentType;
  mode?: "gdp" | "cpi" | "labor";
  explanation: string;
  example?: string;
  formula?: string;
  formulaType?: FormulaType;
  controls?: ControlConfig[];
  parts?: CompositionPart[];
}

export interface LabConfig {
  id: string;
  unit: string;
  title: string;
  subtitle: string;
  description: string;
  accent?: string;
  steps: LessonConfig[];
  stages?: CycleStage[];
}
