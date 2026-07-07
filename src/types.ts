export type ComponentType =
  | "formula"
  | "composition"
  | "cycle"
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
  marketType?: "reserve" | "money" | "loanable" | "forex";
  flowType?: "bank" | "multiplier" | "bop" | "capital";
  controls?: ControlConfig[];
  parts?: CompositionPart[];
  draggablePoints?: DraggablePointConfig[];
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
  steps: LessonConfig[];
  stages?: CycleStage[];
}

export interface UnitConfig {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  weight: string;
  focus: string;
  accent?: string;
  labs: LabConfig[];
}
