import type { LabConfig } from "../types";

// Typed reference for the 2026 CED Unit 1 architecture.
// The running static prototype currently reads the equivalent config from app.js.
export const macroUnit1Labs: LabConfig[] = [
  {
    id: "scarcity-choice",
    unit: "Unit 1",
    title: "Scarcity",
    subtitle: "稀缺性",
    description: "识别有限资源、选择与机会成本之间的关系。",
    topics: ["1.1"],
    steps: [
      {
        id: "scarcity-choice-classification",
        label: "Step 1",
        title: "Scarcity",
        description: "把情境归入 scarcity、choice 或 opportunity cost。",
        componentType: "classification",
        formula: "Scarcity -> Choice -> Opportunity Cost",
        explanation: "资源有限而欲望无限，因此个人与社会必须选择，并承担放弃的次优选择。",
        categories: [
          { id: "scarcity", label: "Scarcity 稀缺性", hint: "资源不能满足所有欲望" },
          { id: "choice", label: "Choice 选择", hint: "在可行选项中作决定" },
          { id: "opportunity-cost", label: "Opportunity Cost 机会成本", hint: "被放弃的次优选择" }
        ],
        items: [
          { id: "limited-time", label: "A student has two hours after school", correct: "scarcity" },
          { id: "study", label: "The student studies instead of working", correct: "choice" },
          { id: "wage", label: "The forgone wage", correct: "opportunity-cost" }
        ]
      }
    ]
  },
  {
    id: "ppc-opportunity-cost",
    unit: "Unit 1",
    title: "PPC and Opportunity Cost",
    subtitle: "生产可能性曲线与机会成本",
    description: "用 PPC 判断效率、不可达组合、机会成本与经济增长。",
    topics: ["1.2"],
    steps: [
      {
        id: "ppc-drag-point",
        label: "Step 1",
        title: "Production possibilities",
        description: "拖动生产点并判断它与 PPC 的关系。",
        componentType: "ppc",
        formula: "The PPC shows maximum attainable output combinations.",
        explanation: "曲线上是生产有效率，曲线内是低效率，曲线外在当前资源与技术下不可达。",
        controls: [
          { key: "goodX", label: "Consumer Goods", defaultValue: 42, min: 0, max: 105, step: 1 },
          { key: "goodY", label: "Capital Goods", defaultValue: 68, min: 0, max: 105, step: 1 }
        ]
      }
    ]
  },
  {
    id: "comparative-advantage",
    unit: "Unit 1",
    title: "Comparative Advantage",
    subtitle: "比较优势与贸易收益",
    description: "比较机会成本，判断专业化方向与互利贸易。",
    topics: ["1.3"],
    steps: [
      {
        id: "two-country-ppc",
        label: "Step 1",
        title: "Opportunity cost table",
        description: "调节两个国家的最大产量并比较机会成本。",
        componentType: "comparative",
        formula: "Comparative advantage depends on lower opportunity cost.",
        explanation: "比较优势决定专业化；只要机会成本不同，双方通常可以通过贸易获益。",
        controls: [
          { key: "aX", label: "Country A max X", defaultValue: 80, min: 20, max: 140, step: 1 },
          { key: "aY", label: "Country A max Y", defaultValue: 40, min: 20, max: 140, step: 1 },
          { key: "bX", label: "Country B max X", defaultValue: 50, min: 20, max: 140, step: 1 },
          { key: "bY", label: "Country B max Y", defaultValue: 100, min: 20, max: 140, step: 1 }
        ]
      }
    ]
  },
  {
    id: "market-fundamentals",
    unit: "Unit 1",
    title: "Demand, Supply, and Equilibrium",
    subtitle: "需求、供给与市场均衡",
    description: "分析需求、供给、短缺、剩余和均衡变化。",
    topics: ["1.4", "1.5", "1.6"],
    steps: [
      {
        id: "market-fundamentals-equilibrium",
        label: "Step 1",
        title: "Demand, Supply, and Equilibrium",
        description: "移动需求与供给曲线并观察均衡价格和数量。",
        componentType: "market",
        marketType: "product",
        formula: "Equilibrium occurs where supply intersects demand.",
        explanation: "需求或供给的非价格决定因素会移动曲线，并改变均衡价格与数量。",
        controls: [
          { key: "supplyShift", label: "Supply 供给", defaultValue: 0, min: -35, max: 35, step: 1 },
          { key: "demandShift", label: "Demand 需求", defaultValue: 0, min: -35, max: 35, step: 1 }
        ]
      }
    ]
  }
];
