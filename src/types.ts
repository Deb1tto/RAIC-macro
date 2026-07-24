export type ComponentType =
  | "formula"
  | "composition"
  | "cycle"
  | "classification"
  | "allocation"
  | "ppc"
  | "comparative"
  | "adas"
  | "fiscal"
  | "market"
  | "flow"
  | "phillips"
  | "forex";

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

export interface DraggablePointConfig {
  id: string;
  xKey: string;
  yKey: string;
  bounds: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  constraint?: "free" | "frontier" | "curve";
}

export interface ClassificationCategory {
  id: string;
  label: string;
  hint: string;
  color?: string;
  miniMarket?: "demand-right" | "demand-left" | "supply-right" | "supply-left";
}

export interface ClassificationItem {
  id: string;
  label: string;
  correct: string | string[];
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

export interface FormulaPart {
  text: string;
  tone?: "employed" | "unemployed" | "not-in-labor-force";
}

export type FormulaLine = string | {
  parts: FormulaPart[];
};

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
  formulaLines?: FormulaLine[];
  answerMode?: "single" | "multiple";
  showMiniMarkets?: boolean;
  showNetExports?: boolean;
  formulaType?: FormulaType;
  marketType?: "product" | "reserve" | "money" | "loanable" | "forex";
  flowType?: "bank" | "multiplier" | "bop";
  controls?: ControlConfig[];
  parts?: CompositionPart[];
  draggablePoints?: DraggablePointConfig[];
  categories?: ClassificationCategory[];
  items?: ClassificationItem[];
  allocationLabels?: {
    left: string;
    right: string;
    total: string;
  };
}

export interface LabConfig {
  id: string;
  unit: string;
  title: string;
  subtitle: string;
  description: string;
  accent?: string;
  topics?: string[];
  steps: LessonConfig[];
  stages?: CycleStage[];
}

export interface CedTopic {
  code: string;
  title: string;
  bigIdea: "MEA" | "MKT" | "MOD" | "POL" | "MEA/MOD";
}

export interface UnitConfig {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  weight: string;
  classPeriods?: string;
  focus: string;
  accent?: string;
  topics?: CedTopic[];
  labs: LabConfig[];
}
