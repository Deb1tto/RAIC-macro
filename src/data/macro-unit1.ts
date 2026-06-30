import type { LabConfig } from "../types";

export const macroUnit1Labs: LabConfig[] = [
  {
    id: "measuring-output",
    unit: "Lab 1",
    title: "Measuring Output",
    subtitle: "衡量总产出",
    description: "GDP、GDP components、Nominal GDP、Real GDP 与 GDP Deflator。",
    steps: [
      {
        id: "gdp-components",
        label: "Step 1",
        title: "GDP components",
        description: "用 GDP = C + I + G + NX 拆解总产出。",
        componentType: "composition",
        mode: "gdp",
        formula: "GDP = C + I + G + NX",
        explanation: "GDP 是一定时期内，一个经济体境内生产的最终产品和服务的市场价值。",
        parts: [
          { key: "consumption", label: "Consumption 消费", shortLabel: "C", defaultValue: 600, min: 0, max: 1000, step: 10 },
          { key: "investment", label: "Investment 投资", shortLabel: "I", defaultValue: 200, min: 0, max: 600, step: 10 },
          { key: "government", label: "Government Spending 政府支出", shortLabel: "G", defaultValue: 250, min: 0, max: 600, step: 10 },
          { key: "netExports", label: "Net Exports 净出口", shortLabel: "NX", defaultValue: -50, min: -300, max: 300, step: 10 }
        ]
      },
      {
        id: "nominal-real-gdp",
        label: "Step 2",
        title: "Nominal vs Real GDP",
        description: "观察价格和数量如何分别影响名义 GDP 与实际 GDP。",
        componentType: "formula",
        formulaType: "nominal-real-gdp",
        formula: "Nominal GDP = Q x Current Price; Real GDP = Q x Base Year Price",
        explanation: "名义 GDP 使用当年价格，实际 GDP 使用基期价格，因此实际 GDP 更适合衡量真实产出变化。"
      },
      {
        id: "gdp-deflator",
        label: "Step 3",
        title: "GDP Deflator",
        description: "用名义 GDP 和实际 GDP 衡量整体价格水平。",
        componentType: "formula",
        formulaType: "gdp-deflator",
        formula: "GDP Deflator = Nominal GDP / Real GDP x 100",
        explanation: "GDP Deflator 表示当前价格水平相对基期的变化。"
      }
    ]
  },
  {
    id: "measuring-prices",
    unit: "Lab 2",
    title: "Measuring Prices",
    subtitle: "衡量价格水平",
    description: "CPI market basket、Inflation Rate 与价格状态判断。",
    steps: [
      {
        id: "cpi-basket",
        label: "Step 1",
        title: "CPI market basket",
        description: "用固定购物篮观察生活成本如何变化。",
        componentType: "composition",
        mode: "cpi",
        formula: "CPI = Current Basket Cost / Base Basket Cost x 100",
        explanation: "CPI 使用固定消费篮子衡量居民购买同一组商品和服务的成本变化。"
      },
      {
        id: "inflation-rate",
        label: "Step 2",
        title: "Inflation rate",
        description: "根据上期 CPI 和本期 CPI 计算通货膨胀率。",
        componentType: "formula",
        formulaType: "inflation-rate",
        formula: "Inflation Rate = (Current CPI - Previous CPI) / Previous CPI x 100",
        explanation: "通货膨胀率衡量整体价格水平相对上一期的百分比变化。"
      },
      {
        id: "price-status",
        label: "Step 3",
        title: "Price status",
        description: "根据 CPI 变化判断 inflation、deflation 或 price stability。",
        componentType: "formula",
        formulaType: "inflation-rate",
        formula: "Compare Current CPI with Previous CPI",
        explanation: "CPI 上升表示通胀，CPI 下降表示通缩，变化接近 0 表示价格稳定。"
      }
    ]
  },
  {
    id: "labor-market",
    unit: "Lab 3",
    title: "Measuring Labor Market",
    subtitle: "衡量劳动力市场",
    description: "Labor Force、Unemployment Rate 与 Labor Force Participation Rate。",
    steps: [
      {
        id: "labor-composition",
        label: "Step 1",
        title: "Labor force composition",
        description: "区分 employed、unemployed 和 not in labor force。",
        componentType: "composition",
        mode: "labor",
        formula: "Labor Force = Employed + Unemployed",
        explanation: "劳动力人口包括就业者和正在找工作的失业者；不找工作的人不在劳动力人口中。"
      },
      {
        id: "unemployment-rate",
        label: "Step 2",
        title: "Unemployment rate",
        description: "用失业者占劳动力人口的比例计算失业率。",
        componentType: "formula",
        formulaType: "unemployment-rate",
        formula: "Unemployment Rate = Unemployed / Labor Force x 100",
        explanation: "失业率只计算劳动力人口中的失业者。"
      },
      {
        id: "participation-rate",
        label: "Step 3",
        title: "Labor force participation rate",
        description: "计算成年人中有多少人参与劳动市场。",
        componentType: "formula",
        formulaType: "labor-force-participation",
        formula: "LFPR = Labor Force / Adult Population x 100",
        explanation: "劳动力参与率和失业率不同；参与率下降可能说明更多人退出劳动市场。"
      }
    ]
  },
  {
    id: "business-cycle",
    unit: "Lab 4",
    title: "Business Cycle",
    subtitle: "商业周期",
    description: "Expansion、Peak、Recession、Trough 与宏观政策反应。",
    steps: [
      {
        id: "click-stage",
        label: "Step 1",
        title: "Click stage",
        description: "点击阶段查看 Real GDP、失业和通胀变化。",
        componentType: "cycle",
        explanation: "同一条商业周期曲线可以用于观察不同阶段的宏观变量状态。"
      },
      {
        id: "policy-response",
        label: "Step 2",
        title: "Policy response",
        description: "理解不同阶段可能对应的财政或货币政策反应。",
        componentType: "cycle",
        explanation: "宏观政策通常试图稳定产出、就业和价格水平。"
      }
    ],
    stages: [
      { key: "expansion", label: "Expansion", subtitle: "扩张", explanation: "Real GDP 上升，就业增加，收入和消费通常增加，但经济过热时可能带来通胀压力。" },
      { key: "peak", label: "Peak", subtitle: "峰值", explanation: "经济达到短期高点，产出接近或超过潜在水平，通胀压力可能较高。" },
      { key: "recession", label: "Recession", subtitle: "衰退", explanation: "Real GDP 下降，失业率上升，消费和投资减少。" },
      { key: "trough", label: "Trough", subtitle: "谷底", explanation: "经济达到低点，之后可能进入复苏阶段。" }
    ]
  }
];
