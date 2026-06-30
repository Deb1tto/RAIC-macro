const labs = [
  {
    id: "measuring-output",
    unit: "Lab 1",
    title: "Measuring Output",
    subtitle: "衡量总产出",
    description: "GDP、GDP components、Nominal GDP、Real GDP 与 GDP Deflator。",
    accent: "from-output",
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
          { key: "consumption", label: "Consumption 消费", shortLabel: "C", defaultValue: 600, min: 0, max: 1000, step: 10, color: "#d07f46" },
          { key: "investment", label: "Investment 投资", shortLabel: "I", defaultValue: 200, min: 0, max: 600, step: 10, color: "#4cb7ab" },
          { key: "government", label: "Government Spending 政府支出", shortLabel: "G", defaultValue: 250, min: 0, max: 600, step: 10, color: "#8f85df" },
          { key: "netExports", label: "Net Exports 净出口", shortLabel: "NX", defaultValue: -50, min: -300, max: 300, step: 10, color: "#c64861" }
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
        explanation: "名义 GDP 使用当年价格，实际 GDP 使用基期价格，因此实际 GDP 更适合衡量真实产出变化。",
        controls: [
          { key: "quantity", label: "Quantity 数量", defaultValue: 100, min: 50, max: 200, step: 1 },
          { key: "currentPrice", label: "Current Price 当年价格", defaultValue: 12, min: 5, max: 30, step: 1 },
          { key: "basePrice", label: "Base Year Price 基期价格", defaultValue: 10, min: 5, max: 30, step: 1 }
        ]
      },
      {
        id: "gdp-deflator",
        label: "Step 3",
        title: "GDP Deflator",
        description: "用名义 GDP 和实际 GDP 衡量整体价格水平。",
        componentType: "formula",
        formulaType: "gdp-deflator",
        formula: "GDP Deflator = Nominal GDP / Real GDP x 100",
        explanation: "GDP Deflator 表示当前价格水平相对基期的变化。",
        controls: [
          { key: "nominalGDP", label: "Nominal GDP 名义 GDP", defaultValue: 1200, min: 500, max: 3000, step: 50 },
          { key: "realGDP", label: "Real GDP 实际 GDP", defaultValue: 1000, min: 500, max: 3000, step: 50 }
        ]
      }
    ]
  },
  {
    id: "measuring-prices",
    unit: "Lab 2",
    title: "Measuring Prices",
    subtitle: "衡量价格水平",
    description: "CPI market basket、Inflation Rate 与价格状态判断。",
    accent: "from-prices",
    steps: [
      {
        id: "cpi-basket",
        label: "Step 1",
        title: "CPI market basket",
        description: "用固定购物篮观察生活成本如何变化。",
        componentType: "composition",
        mode: "cpi",
        formula: "CPI = Current Basket Cost / Base Basket Cost x 100",
        explanation: "CPI 使用固定消费篮子衡量居民购买同一组商品和服务的成本变化。",
        parts: [
          { key: "food", label: "Food 食品", defaultValue: 120, min: 60, max: 240, step: 5, baseValue: 100, color: "#d07f46" },
          { key: "rent", label: "Rent 房租", defaultValue: 650, min: 400, max: 1000, step: 10, baseValue: 600, color: "#4cb7ab" },
          { key: "gas", label: "Gas 汽油", defaultValue: 90, min: 40, max: 180, step: 5, baseValue: 80, color: "#4f75b0" },
          { key: "clothing", label: "Clothing 服装", defaultValue: 140, min: 80, max: 260, step: 5, baseValue: 120, color: "#8f85df" }
        ]
      },
      {
        id: "inflation-rate",
        label: "Step 2",
        title: "Inflation rate",
        description: "根据上期 CPI 和本期 CPI 计算通货膨胀率。",
        componentType: "formula",
        formulaType: "inflation-rate",
        formula: "Inflation Rate = (Current CPI - Previous CPI) / Previous CPI x 100",
        explanation: "通货膨胀率衡量整体价格水平相对上一期的百分比变化。",
        controls: [
          { key: "previousCPI", label: "Previous CPI 上期 CPI", defaultValue: 100, min: 50, max: 200, step: 1 },
          { key: "currentCPI", label: "Current CPI 本期 CPI", defaultValue: 110, min: 50, max: 250, step: 1 }
        ]
      },
      {
        id: "price-status",
        label: "Step 3",
        title: "Price status",
        description: "根据 CPI 变化判断 inflation、deflation 或 price stability。",
        componentType: "formula",
        formulaType: "inflation-rate",
        formula: "Compare Current CPI with Previous CPI",
        explanation: "CPI 上升表示通胀，CPI 下降表示通缩，变化接近 0 表示价格稳定。",
        controls: [
          { key: "previousCPI", label: "Previous CPI 上期 CPI", defaultValue: 100, min: 50, max: 200, step: 1 },
          { key: "currentCPI", label: "Current CPI 本期 CPI", defaultValue: 100, min: 50, max: 250, step: 1 }
        ]
      }
    ]
  },
  {
    id: "labor-market",
    unit: "Lab 3",
    title: "Measuring Labor Market",
    subtitle: "衡量劳动力市场",
    description: "Labor Force、Unemployment Rate 与 Labor Force Participation Rate。",
    accent: "from-labor",
    steps: [
      {
        id: "labor-composition",
        label: "Step 1",
        title: "Labor force composition",
        description: "区分 employed、unemployed 和 not in labor force。",
        componentType: "composition",
        mode: "labor",
        formula: "Labor Force = Employed + Unemployed",
        explanation: "劳动力人口包括就业者和正在找工作的失业者；不找工作的人不在劳动力人口中。",
        parts: [
          { key: "employed", label: "Employed 就业者", defaultValue: 90, min: 40, max: 180, step: 1, color: "#4cb7ab" },
          { key: "unemployed", label: "Unemployed 失业者", defaultValue: 10, min: 0, max: 60, step: 1, color: "#c64861" },
          { key: "notInLaborForce", label: "Not in Labor Force 非劳动力", defaultValue: 50, min: 0, max: 120, step: 1, color: "#8f85df" }
        ]
      },
      {
        id: "unemployment-rate",
        label: "Step 2",
        title: "Unemployment rate",
        description: "用失业者占劳动力人口的比例计算失业率。",
        componentType: "formula",
        formulaType: "unemployment-rate",
        formula: "Unemployment Rate = Unemployed / Labor Force x 100",
        explanation: "失业率只计算劳动力人口中的失业者。",
        controls: [
          { key: "unemployed", label: "Unemployed 失业者", defaultValue: 10, min: 0, max: 50, step: 1 },
          { key: "laborForce", label: "Labor Force 劳动力人口", defaultValue: 100, min: 50, max: 200, step: 1 }
        ]
      },
      {
        id: "participation-rate",
        label: "Step 3",
        title: "Labor force participation rate",
        description: "计算成年人中有多少人参与劳动市场。",
        componentType: "formula",
        formulaType: "labor-force-participation",
        formula: "LFPR = Labor Force / Adult Population x 100",
        explanation: "劳动力参与率和失业率不同；参与率下降可能说明更多人退出劳动市场。",
        controls: [
          { key: "laborForce", label: "Labor Force 劳动力人口", defaultValue: 100, min: 50, max: 200, step: 1 },
          { key: "adultPopulation", label: "Adult Population 成年人口", defaultValue: 150, min: 100, max: 300, step: 1 }
        ]
      }
    ]
  },
  {
    id: "business-cycle",
    unit: "Lab 4",
    title: "Business Cycle",
    subtitle: "商业周期",
    description: "Expansion、Peak、Recession、Trough 与宏观政策反应。",
    accent: "from-cycle",
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
      { key: "expansion", label: "Expansion", subtitle: "扩张", explanation: "Real GDP 上升，就业增加，收入和消费通常增加；经济过热时可能带来通胀压力。", policy: "政策通常保持中性；若通胀压力过高，可能采取紧缩性货币政策。" },
      { key: "peak", label: "Peak", subtitle: "峰值", explanation: "经济达到短期高点，产出接近或超过潜在水平，通胀压力可能较高。", policy: "政策重点是防止过热，可能减少刺激或提高利率。" },
      { key: "recession", label: "Recession", subtitle: "衰退", explanation: "Real GDP 下降，失业率上升，消费和投资减少。", policy: "政府可能使用扩张性财政政策，央行可能降低利率或增加货币供给。" },
      { key: "trough", label: "Trough", subtitle: "谷底", explanation: "经济达到低点，之后可能进入复苏阶段。", policy: "政策目标通常是支持需求、稳定就业，并帮助经济进入复苏。" }
    ]
  }
];

const state = {
  view: "home",
  labId: labs[0].id,
  stepId: labs[0].steps[0].id,
  values: {},
  selectedStage: "expansion"
};

function currentLab() {
  return labs.find((lab) => lab.id === state.labId) ?? labs[0];
}

function currentStep() {
  const lab = currentLab();
  return lab.steps.find((step) => step.id === state.stepId) ?? lab.steps[0];
}

function controlsFor(step) {
  return step.controls ?? step.parts ?? [];
}

function resetValues(step = currentStep()) {
  state.values = {};
  for (const control of controlsFor(step)) {
    state.values[control.key] = control.defaultValue;
  }
  if (step.componentType === "cycle") {
    state.selectedStage = currentLab().stages?.[0]?.key ?? "expansion";
  }
}

function enterLab(labId) {
  const lab = labs.find((item) => item.id === labId) ?? labs[0];
  state.view = "lab";
  state.labId = lab.id;
  state.stepId = lab.steps[0].id;
  resetValues(lab.steps[0]);
  renderApp();
}

function value(key) {
  return Number(state.values[key] ?? 0);
}

function formatNumber(number, digits = 1) {
  return Number(number).toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: Number.isInteger(number) ? 0 : digits
  });
}

function metric(label, valueText, note = "") {
  return `<div class="metric-card"><span>${label}</span><strong>${valueText}</strong>${note ? `<small>${note}</small>` : ""}</div>`;
}

function renderHome() {
  return `
    <div class="page-shell">
      <section class="unit-directory panel">
        <header class="unit-directory-hero">
          <div>
            <span class="unit-pill">Unit 1</span>
            <span class="unit-pill">AP 考试权重: 12-15%</span>
          </div>
          <h1>Macroeconomic Indicators</h1>
          <p>宏观经济指标</p>
          <div class="unit-count"><span>4 个实验</span><strong>−</strong></div>
        </header>
        <div class="lab-card-grid">
          ${labs
            .map(
              (lab, index) => `
                <article class="lab-card">
                  <span class="lab-chip">${lab.unit}</span>
                  <h2>${lab.title}</h2>
                  <p>${lab.description}</p>
                  <button data-open-lab="${lab.id}">进入实验</button>
                </article>
                ${index === 3 ? "" : ""}
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderControls(lab, step) {
  const controlHtml = controlsFor(step)
    .map((control) => {
      const current = value(control.key);
      const base = control.baseValue == null ? "" : `<small>Base: ${formatNumber(control.baseValue)}</small>`;
      return `
        <label class="control">
          <span>${control.label}</span>
          <input data-control="${control.key}" type="range" min="${control.min}" max="${control.max}" step="${control.step ?? 1}" value="${current}" />
          <strong>${formatNumber(current)}</strong>
          ${base}
        </label>
      `;
    })
    .join("");

  return `
    <aside class="panel controls-panel">
      <button class="back-button" data-home>← Unit 1 Labs</button>
      <div class="eyebrow">Controls</div>
      ${controlHtml || renderCycleButtons(lab, step)}
      <button class="reset-button" data-reset>重置</button>
    </aside>
  `;
}

function renderStepNav(lab, step) {
  return `
    <section class="panel step-nav-panel">
      <div class="step-nav-heading">
        <span>${lab.unit} Steps</span>
        <strong>${step.label}: ${step.title}</strong>
      </div>
      <nav class="step-nav-list" aria-label="${lab.title} steps">
        ${lab.steps
          .map(
            (item) => `
              <button class="step-tab ${item.id === step.id ? "is-active" : ""}" data-step="${item.id}">
                <span>${item.label}</span>
                <strong>${item.title}</strong>
              </button>
            `
          )
          .join("")}
      </nav>
    </section>
  `;
}

function renderCycleButtons(lab) {
  return `
    <div class="cycle-control-list">
      ${(lab.stages ?? [])
        .map(
          (stage) => `
            <button class="stage-button ${state.selectedStage === stage.key ? "is-active" : ""}" data-stage="${stage.key}">
              <strong>${stage.label}</strong>
              <span>${stage.subtitle}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function calculateFormula(step) {
  switch (step.formulaType) {
    case "nominal-real-gdp": {
      const quantity = value("quantity");
      const nominal = quantity * value("currentPrice");
      const real = quantity * value("basePrice");
      return {
        main: nominal,
        metrics: [["Nominal GDP", nominal], ["Real GDP", real], ["Difference", nominal - real]],
        feedback:
          value("currentPrice") > value("basePrice")
            ? "当年价格高于基期价格，名义 GDP 大于实际 GDP。价格上涨会推高名义 GDP，但不一定代表真实产出增加。"
            : value("currentPrice") < value("basePrice")
              ? "当年价格低于基期价格，名义 GDP 小于实际 GDP。实际 GDP 更能反映产量本身的变化。"
              : "当年价格等于基期价格，名义 GDP 与实际 GDP 相同。"
      };
    }
    case "gdp-deflator": {
      const deflator = (value("nominalGDP") / Math.max(value("realGDP"), 1)) * 100;
      return {
        main: deflator,
        metrics: [["GDP Deflator", deflator]],
        feedback:
          deflator > 100
            ? `GDP Deflator 为 ${formatNumber(deflator)}，说明整体价格水平比基期高约 ${formatNumber(deflator - 100)}%。`
            : deflator < 100
              ? `GDP Deflator 为 ${formatNumber(deflator)}，说明整体价格水平低于基期。`
              : "GDP Deflator 等于 100，说明整体价格水平与基期一致。"
      };
    }
    case "inflation-rate": {
      const inflation = ((value("currentCPI") - value("previousCPI")) / Math.max(value("previousCPI"), 1)) * 100;
      const status = inflation > 0.25 ? "Inflation" : inflation < -0.25 ? "Deflation" : "Price Stability";
      return {
        main: inflation,
        suffix: "%",
        status,
        metrics: [["Previous CPI", value("previousCPI")], ["Current CPI", value("currentCPI")], ["Inflation Rate", inflation]],
        feedback:
          status === "Inflation"
            ? `当前状态是 Inflation，通货膨胀率为 ${formatNumber(inflation)}%，生活成本正在上升。`
            : status === "Deflation"
              ? `当前状态是 Deflation，通货膨胀率为 ${formatNumber(inflation)}%，价格水平下降，存在通缩压力。`
              : "当前状态接近 Price Stability，价格水平基本稳定。"
      };
    }
    case "unemployment-rate": {
      const rate = (value("unemployed") / Math.max(value("laborForce"), 1)) * 100;
      return {
        main: rate,
        suffix: "%",
        metrics: [["Unemployed", value("unemployed")], ["Labor Force", value("laborForce")], ["Unemployment Rate", rate]],
        feedback: `失业率为 ${formatNumber(rate)}%。它只计算劳动力人口中的失业者，没有工作但不找工作的人不计入 unemployed。`
      };
    }
    case "labor-force-participation": {
      const rate = (value("laborForce") / Math.max(value("adultPopulation"), 1)) * 100;
      return {
        main: rate,
        suffix: "%",
        metrics: [["Labor Force", value("laborForce")], ["Adult Population", value("adultPopulation")], ["LFPR", rate]],
        feedback: `劳动力参与率为 ${formatNumber(rate)}%。它衡量成年人中有多少人正在工作或积极找工作，和失业率不是同一个指标。`
      };
    }
    default:
      return { main: 0, metrics: [], feedback: "" };
  }
}

function renderFormulaInteractive(step) {
  const result = calculateFormula(step);
  const maxValue = Math.max(...result.metrics.map((entry) => Math.abs(entry[1])), 1);
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="bar-chart" aria-label="${step.title} chart">
        ${result.metrics
          .map(([label, amount]) => {
            const width = Math.max(8, Math.abs(amount) / maxValue * 100);
            return `
              <div class="bar-row">
                <span>${label}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
                <strong>${formatNumber(amount)}${label.includes("Rate") || label === "LFPR" ? "%" : ""}</strong>
              </div>
            `;
          })
          .join("")}
      </div>
      ${renderMetrics(result.metrics)}
    </section>
  `;
}

function compositionSummary(step) {
  const parts = step.parts ?? [];
  if (step.mode === "gdp") {
    const gdp = parts.reduce((sum, part) => sum + value(part.key), 0);
    return {
      total: gdp,
      metrics: [["Consumption", value("consumption")], ["Investment", value("investment")], ["Government", value("government")], ["Net Exports", value("netExports")], ["GDP", gdp]],
      feedback:
        value("netExports") < 0
          ? `当前 GDP 为 ${formatNumber(gdp)}。净出口为负，说明进口大于出口，会拉低 GDP。`
          : `当前 GDP 为 ${formatNumber(gdp)}。净出口为正或接近 0，不会明显拖累 GDP。`
    };
  }
  if (step.mode === "cpi") {
    const current = parts.reduce((sum, part) => sum + value(part.key), 0);
    const base = parts.reduce((sum, part) => sum + part.baseValue, 0);
    const cpi = current / base * 100;
    const inflation = cpi - 100;
    return {
      total: current,
      metrics: [["Base Basket", base], ["Current Basket", current], ["CPI", cpi], ["Change vs Base", inflation]],
      feedback:
        cpi > 100
          ? `当前 CPI 为 ${formatNumber(cpi)}，同一个购物篮比基期更贵，生活成本上升。`
          : cpi < 100
            ? `当前 CPI 为 ${formatNumber(cpi)}，同一个购物篮比基期更便宜。`
            : "当前 CPI 为 100，购物篮成本与基期相同。"
    };
  }
  const laborForce = value("employed") + value("unemployed");
  const adultPopulation = laborForce + value("notInLaborForce");
  const unemployment = value("unemployed") / Math.max(laborForce, 1) * 100;
  const participation = laborForce / Math.max(adultPopulation, 1) * 100;
  return {
    total: adultPopulation,
    metrics: [["Employed", value("employed")], ["Unemployed", value("unemployed")], ["Not in Labor Force", value("notInLaborForce")], ["Labor Force", laborForce], ["Unemployment Rate", unemployment], ["LFPR", participation]],
    feedback: `劳动力人口为 ${formatNumber(laborForce)}，成年人口为 ${formatNumber(adultPopulation)}。非劳动力人口不进入失业率计算。`
  };
}

function renderCompositionBlocks(step) {
  const parts = step.parts ?? [];
  const summary = compositionSummary(step);
  const positiveTotal = parts.reduce((sum, part) => sum + Math.max(value(part.key), 0), 0) || 1;
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="composition-strip" aria-label="${step.title} blocks">
        ${parts
          .map((part) => {
            const amount = value(part.key);
            const width = Math.max(8, Math.abs(amount) / positiveTotal * 100);
            return `
              <div class="composition-block ${amount < 0 ? "is-negative" : ""}" style="width:${width}%; background:${part.color}">
                <span>${part.shortLabel ?? part.label}</span>
                <strong>${formatNumber(amount)}</strong>
              </div>
            `;
          })
          .join("")}
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function renderCycleChart(lab, step) {
  const stage = (lab.stages ?? []).find((item) => item.key === state.selectedStage) ?? lab.stages?.[0];
  const stagePoints = { expansion: [170, 178], peak: [270, 90], recession: [410, 225], trough: [500, 300] };
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg" aria-label="Business cycle chart">
        <line x1="58" y1="330" x2="640" y2="330" class="axis"></line>
        <line x1="58" y1="38" x2="58" y2="330" class="axis"></line>
        <text x="350" y="368" class="chart-label" text-anchor="middle">Time</text>
        <text x="18" y="188" class="chart-label" text-anchor="middle" transform="rotate(-90 18 188)">Real GDP</text>
        <path d="M 70 270 L 180 170 L 270 90 L 390 210 L 500 300 L 610 190" class="cycle-line"></path>
        ${Object.entries(stagePoints)
          .map(([key, point]) => {
            const data = lab.stages.find((item) => item.key === key);
            return `
              <g class="cycle-stage ${state.selectedStage === key ? "is-active" : ""}" data-stage="${key}">
                <circle cx="${point[0]}" cy="${point[1]}" r="13"></circle>
                <text x="${point[0]}" y="${point[1] - 24}" text-anchor="middle">${data?.label ?? key}</text>
              </g>
            `;
          })
          .join("")}
      </svg>
      <div class="stage-summary">
        <strong>${stage?.label} / ${stage?.subtitle}</strong>
        <p>${step.id === "policy-response" ? stage?.policy : stage?.explanation}</p>
      </div>
    </section>
  `;
}

function renderMetrics(entries) {
  return `<div class="metrics-grid">${entries.map(([label, amount]) => metric(label, label.includes("Rate") || label === "LFPR" || label === "CPI" || label.includes("Change") ? `${formatNumber(amount)}${label.includes("Rate") || label === "LFPR" || label.includes("Change") ? "%" : ""}` : formatNumber(amount))).join("")}</div>`;
}

function feedbackForStep(lab, step) {
  if (step.componentType === "formula") {
    const result = calculateFormula(step);
    return { value: result.status ?? `${formatNumber(result.main)}${result.suffix ?? ""}`, text: result.feedback };
  }
  if (step.componentType === "cycle") {
    const stage = (lab.stages ?? []).find((item) => item.key === state.selectedStage) ?? lab.stages?.[0];
    return { value: stage?.label ?? "", text: step.id === "policy-response" ? stage?.policy ?? "" : stage?.explanation ?? "" };
  }
  const summary = compositionSummary(step);
  return { value: formatNumber(summary.total), text: summary.feedback };
}

function renderFeedbackCard(lab, step) {
  const feedback = feedbackForStep(lab, step);
  return `
    <section class="feedback-card">
      <div>
        <span>Current Result</span>
        <strong>${feedback.value}</strong>
      </div>
      <p>${feedback.text}</p>
    </section>
  `;
}

function renderExplanation(step) {
  return `
    <aside class="panel explanation-panel">
      <div class="eyebrow">Concept</div>
      <h3>${step.title}</h3>
      <p>${step.explanation}</p>
      ${step.formula ? `<div class="formula-note"><strong>Formula</strong><code>${step.formula}</code></div>` : ""}
    </aside>
  `;
}

function renderInteractive(lab, step) {
  if (step.componentType === "composition") return renderCompositionBlocks(step);
  if (step.componentType === "cycle") return renderCycleChart(lab, step);
  return renderFormulaInteractive(step);
}

function renderLab() {
  const lab = currentLab();
  const step = currentStep();
  return `
    <div class="page-shell">
      <header class="hero panel lab-hero ${lab.accent}">
        <div>
          <span class="badge">${lab.unit}</span>
          <span class="badge badge-soft">${lab.steps.length} Steps</span>
        </div>
        <h1>${lab.title}</h1>
        <p>${lab.subtitle} · ${lab.description}</p>
      </header>
      ${renderStepNav(lab, step)}
      <main class="workspace">
        ${renderControls(lab, step)}
        <div class="main-column">
          ${renderInteractive(lab, step)}
          ${renderFeedbackCard(lab, step)}
        </div>
        ${renderExplanation(step)}
      </main>
    </div>
  `;
}

function renderApp() {
  document.querySelector("#app").innerHTML = state.view === "home" ? renderHome() : renderLab();
  bindEvents();
}

function bindEvents() {
  for (const button of document.querySelectorAll("[data-open-lab]")) {
    button.addEventListener("click", () => enterLab(button.dataset.openLab));
  }
  document.querySelector("[data-home]")?.addEventListener("click", () => {
    state.view = "home";
    renderApp();
  });
  for (const button of document.querySelectorAll("[data-step]")) {
    button.addEventListener("click", () => {
      state.stepId = button.dataset.step;
      resetValues(currentStep());
      renderApp();
    });
  }
  for (const input of document.querySelectorAll("[data-control]")) {
    input.addEventListener("input", () => {
      state.values[input.dataset.control] = Number(input.value);
      renderApp();
    });
  }
  for (const button of document.querySelectorAll("[data-stage]")) {
    button.addEventListener("click", () => {
      state.selectedStage = button.dataset.stage;
      renderApp();
    });
  }
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    resetValues(currentStep());
    renderApp();
  });
}

resetValues(currentStep());
renderApp();
