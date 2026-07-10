const courseUnits = [
  {
    id: "unit-1",
    label: "Unit 1",
    title: "Basic Economic Concepts",
    subtitle: "基础经济概念",
    weight: "5%-10%",
    focus: "PPC / Comparative Advantage",
    accent: "from-output",
    labs: [
      classificationLab("scarcity-choice", "Unit 1", "Scarcity and Choice", "稀缺性与选择", "把例子拖到正确概念，区分稀缺性、选择和机会成本。", {
        formula: "Scarcity -> Choice -> Opportunity Cost",
        explanation: "基础经济概念更适合先做分类判断：先识别资源有限，再识别做出的选择，最后说清楚放弃了什么。",
        categories: [
          { id: "scarcity", label: "Scarcity 稀缺性", hint: "资源不足以满足所有欲望", color: "#c64861" },
          { id: "choice", label: "Choice 选择", hint: "必须在选项中做决定", color: "#4f75b0" },
          { id: "opportunity-cost", label: "Opportunity Cost 机会成本", hint: "被放弃的次优选择", color: "#8f85df" }
        ],
        items: [
          { id: "limited-time", label: "A student has only two hours after school", correct: "scarcity" },
          { id: "study-or-work", label: "The student decides to study instead of working", correct: "choice" },
          { id: "lost-wage", label: "The wage the student gives up by studying", correct: "opportunity-cost" },
          { id: "land-water", label: "A town has limited land and water", correct: "scarcity" },
          { id: "build-park", label: "The town builds a park instead of a parking lot", correct: "choice" },
          { id: "parking-lot", label: "The forgone parking lot", correct: "opportunity-cost" }
        ]
      }),
      {
        id: "ppc-opportunity-cost",
        unit: "Unit 1",
        title: "PPC and Opportunity Cost",
        subtitle: "生产可能性曲线与机会成本",
        description: "拖动生产组合点，判断效率、不可达点、经济增长和机会成本。",
        accent: "from-output",
        steps: [
          {
            id: "ppc-drag-point",
            label: "Step 1",
            title: "Drag production point",
            description: "拖动点 A，观察它在 PPC 曲线内、曲线上或曲线外。",
            componentType: "ppc",
            formula: "PPC shows maximum output combinations under scarce resources.",
            explanation: "PPC 曲线表示在资源和技术固定时，一个经济体能生产的最大组合。曲线上代表生产有效率，曲线内代表低效率，曲线外代表目前不可达。",
            controls: [
              { key: "goodX", label: "Consumer Goods 消费品", defaultValue: 42, min: 0, max: 105, step: 1 },
              { key: "goodY", label: "Capital Goods 资本品", defaultValue: 68, min: 0, max: 105, step: 1 }
            ],
            draggablePoints: [
              { id: "ppc-point", xKey: "goodX", yKey: "goodY", bounds: { minX: 0, maxX: 105, minY: 0, maxY: 105 }, constraint: "free" }
            ]
          },
          {
            id: "ppc-growth",
            label: "Step 2",
            title: "Economic growth",
            description: "调节生产能力，观察 PPC 如何向外或向内移动。",
            componentType: "ppc",
            formula: "Economic growth shifts the PPC outward.",
            explanation: "技术进步、资本积累或资源增加会让 PPC 向外移动；资源减少或生产能力下降会让 PPC 向内移动。",
            controls: [
              { key: "capacity", label: "Productive Capacity 生产能力", defaultValue: 100, min: 70, max: 130, step: 1 },
              { key: "goodX", label: "Consumer Goods 消费品", defaultValue: 50, min: 0, max: 130, step: 1 },
              { key: "goodY", label: "Capital Goods 资本品", defaultValue: 55, min: 0, max: 130, step: 1 }
            ],
            draggablePoints: [
              { id: "ppc-growth-point", xKey: "goodX", yKey: "goodY", bounds: { minX: 0, maxX: 130, minY: 0, maxY: 130 }, constraint: "free" }
            ]
          }
        ]
      },
      {
        id: "comparative-advantage",
        unit: "Unit 1",
        title: "Comparative Advantage",
        subtitle: "比较优势",
        description: "比较两个经济体的机会成本，判断专业化方向。",
        accent: "from-prices",
        steps: [
          {
            id: "two-country-ppc",
            label: "Step 1",
            title: "Opportunity cost table",
            description: "调节两个国家的最大产量，观察谁有较低机会成本。",
            componentType: "comparative",
            formula: "Comparative advantage depends on lower opportunity cost.",
            explanation: "绝对优势比较产量高低；比较优势比较机会成本。AP Macro 中贸易题通常要求说明谁应该专业化生产哪种商品。",
            controls: [
              { key: "aX", label: "Country A max X", defaultValue: 80, min: 20, max: 140, step: 1 },
              { key: "aY", label: "Country A max Y", defaultValue: 40, min: 20, max: 140, step: 1 },
              { key: "bX", label: "Country B max X", defaultValue: 50, min: 20, max: 140, step: 1 },
              { key: "bY", label: "Country B max Y", defaultValue: 100, min: 20, max: 140, step: 1 }
            ]
          }
        ]
      },
      classificationLab("economic-systems", "Unit 1", "Economic Systems", "经济制度", "拖拽连线，把资源配置方式归入市场、命令或混合经济。", {
        formula: "Economic systems differ by who answers what, how, and for whom to produce.",
        explanation: "经济制度不需要硬画成图形；更重要的是判断资源配置由价格信号、政府计划，还是两者共同决定。",
        categories: [
          { id: "command", label: "Command 命令经济", hint: "政府计划和指令主导", color: "#c64861" },
          { id: "mixed", label: "Mixed 混合经济", hint: "市场与政府共同发挥作用", color: "#8f85df" },
          { id: "market", label: "Market 市场经济", hint: "价格、利润、竞争主导", color: "#4f75b0" }
        ],
        items: [
          { id: "price-signal", label: "Firms expand output because price rises", correct: "market" },
          { id: "central-plan", label: "A planning agency sets production targets", correct: "command" },
          { id: "public-school", label: "Private firms operate, but public schools are funded by government", correct: "mixed" },
          { id: "profit-entry", label: "Profit attracts new producers into a market", correct: "market" },
          { id: "ration-quota", label: "The state assigns quotas and rations goods", correct: "command" },
          { id: "tax-subsidy", label: "Markets set prices, while government uses taxes and subsidies", correct: "mixed" }
        ]
      })
    ]
  },
  {
    id: "unit-2",
    label: "Unit 2",
    title: "Economic Indicators and the Business Cycle",
    subtitle: "宏观指标与商业周期",
    weight: "12%-17%",
    focus: "GDP / CPI / Labor / Business Cycle",
    accent: "from-labor",
    labs: [
      classificationLab("measuring-output", "Unit 2", "Measuring Output", "衡量总产出", "把 GDP 例子连到正确概念，先判断是否计入，再区分名义、实际和 deflator。", {
        formula: "GDP = final goods and services produced within a country in a given period.",
        explanation: "GDP 题不只是在算 C + I + G + NX。AP 常先考概念判断：是否是境内、本期、最终产品或服务；再区分名义 GDP、实际 GDP 和 GDP deflator。",
        categories: [
          { id: "counted-gdp", label: "Counted in GDP 计入 GDP", hint: "境内、本期、最终产品或服务" },
          { id: "not-counted", label: "Not counted 不计入 GDP", hint: "中间品、二手交易、金融交易或国外生产" },
          { id: "nominal-gdp", label: "Nominal GDP 名义 GDP", hint: "使用当年价格" },
          { id: "real-gdp", label: "Real GDP 实际 GDP", hint: "使用基期价格衡量真实产量" },
          { id: "gdp-deflator", label: "GDP Deflator", hint: "Nominal GDP / Real GDP x 100" }
        ],
        items: [
          { id: "new-domestic-laptop", label: "A household buys a new laptop produced domestically this year", correct: "counted-gdp" },
          { id: "government-teacher", label: "A public school pays a teacher's salary", correct: "counted-gdp" },
          { id: "used-car", label: "A family buys a used car from another household", correct: "not-counted" },
          { id: "bakery-flour", label: "A bakery buys flour to make bread for sale", correct: "not-counted" },
          { id: "current-price-output", label: "Output valued using this year's prices", correct: "nominal-gdp" },
          { id: "base-price-output", label: "Output valued using base-year prices", correct: "real-gdp" },
          { id: "price-index-ratio", label: "Nominal GDP divided by Real GDP, then multiplied by 100", correct: "gdp-deflator" }
        ]
      }),
      {
        id: "measuring-prices",
        unit: "Unit 2",
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
          }
        ]
      },
      {
        id: "labor-market",
        unit: "Unit 2",
        title: "Labor Market Indicators",
        subtitle: "劳动力市场指标",
        description: "Labor Force、Unemployment Rate 与 Labor Force Participation Rate。",
        accent: "from-labor",
        steps: [
          {
            id: "labor-composition",
            label: "Step 1",
            title: "Labor force composition",
            description: "区分 employed、unemployed 和 not in labor force，并同时计算失业率和 LFPR。",
            componentType: "composition",
            mode: "labor",
            formula: "Labor Force = Employed + Unemployed; Unemployment Rate = Unemployed / Labor Force x 100; LFPR = Labor Force / Adult Population x 100",
            explanation: "劳动力人口包括就业者和正在找工作的失业者；不找工作的人不在劳动力人口中。把三个公式放在同一页，能直接比较 unemployment rate 和 LFPR。",
            parts: [
              { key: "employed", label: "Employed 就业者", defaultValue: 90, min: 40, max: 180, step: 1, color: "#4cb7ab" },
              { key: "unemployed", label: "Unemployed 失业者", defaultValue: 10, min: 0, max: 60, step: 1, color: "#c64861" },
              { key: "notInLaborForce", label: "Not in Labor Force 非劳动力", defaultValue: 50, min: 0, max: 120, step: 1, color: "#8f85df" }
            ]
          }
        ]
      },
      {
        id: "business-cycle",
        unit: "Unit 2",
        title: "Business Cycle",
        subtitle: "商业周期",
        description: "Expansion、Peak、Recession、Trough 与宏观政策反应。",
        accent: "from-cycle",
        steps: [
          {
            id: "click-stage",
            label: "Step 1",
            title: "Business cycle stages",
            description: "点击阶段查看 Real GDP、失业、通胀和可选政策反应。",
            componentType: "cycle",
            explanation: "同一条商业周期曲线可以用于观察不同阶段的宏观变量状态。长期增长趋势向上，短期波动围绕趋势线展开。"
          }
        ],
        stages: [
          { key: "expansion", label: "Expansion", subtitle: "扩张", explanation: "Real GDP 上升，就业增加，收入和消费通常增加；经济过热时可能带来通胀压力。", policy: "政策通常保持中性；若通胀压力过高，可能采取紧缩性货币政策。" },
          { key: "peak", label: "Peak", subtitle: "峰值", explanation: "经济达到短期高点，产出接近或超过潜在水平，通胀压力可能较高。", policy: "政策重点是防止过热，可能减少刺激或提高利率。" },
          { key: "recession", label: "Recession", subtitle: "衰退", explanation: "Real GDP 下降，失业率上升，消费和投资减少。", policy: "政府可能使用扩张性财政政策，央行可能降低利率或增加货币供给。" },
          { key: "trough", label: "Trough", subtitle: "谷底", explanation: "经济达到低点，之后可能进入复苏阶段。", policy: "政策目标通常是支持需求、稳定就业，并帮助经济进入复苏。" }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    label: "Unit 3",
    title: "National Income and Price Determination",
    subtitle: "国民收入与价格决定",
    weight: "17%-27%",
    focus: "AD-AS / Fiscal Policy",
    accent: "from-cycle",
    labs: [
      allocationLab("ad-components", "Unit 3", "AD Components", "总需求组成", "调节消费、投资、政府支出和净出口，观察总需求变化。", {
        leftLabel: "Private Demand C + I",
        rightLabel: "Public / External G + NX",
        totalLabel: "Aggregate Demand",
        defaultLeft: 70,
        defaultTotal: 120,
        explanation: "总需求由 C、I、G、NX 组成。任何组成部分增加都会推动 AD 右移，短期提高实际产出和价格水平。"
      }),
      {
        id: "adas-equilibrium",
        unit: "Unit 3",
        title: "AD-AS Equilibrium",
        subtitle: "AD-AS 宏观均衡",
        description: "用 AD、SRAS 和 LRAS 分析产出、价格水平和缺口。",
        accent: "from-cycle",
        steps: [
          {
            id: "adas-shocks",
            label: "Step 1",
            title: "Demand and supply shocks",
            description: "移动 AD 和 SRAS，观察短期均衡如何变化。",
            componentType: "adas",
            formula: "Short-run equilibrium is where AD intersects SRAS.",
            explanation: "AD 右移通常提高实际 GDP 和价格水平；SRAS 左移通常降低实际 GDP 并提高价格水平。",
            controls: [
              { key: "adShift", label: "AD Shift 总需求移动", defaultValue: 0, min: -40, max: 40, step: 1 },
              { key: "srasShift", label: "SRAS Shift 短期总供给移动", defaultValue: 0, min: -40, max: 40, step: 1 },
              { key: "potential", label: "Potential Output 潜在产出", defaultValue: 100, min: 80, max: 120, step: 1 }
            ]
          }
        ]
      },
      {
        id: "output-gaps",
        unit: "Unit 3",
        title: "Output Gaps",
        subtitle: "产出缺口",
        description: "判断 recessionary gap 与 inflationary gap。",
        accent: "from-cycle",
        steps: [
          {
            id: "gap-adas",
            label: "Step 1",
            title: "Compare Y and Yf",
            description: "调节 AD 和潜在产出，判断经济缺口。",
            componentType: "adas",
            formula: "Output Gap = Actual Real GDP - Potential GDP",
            explanation: "实际产出低于潜在产出是衰退缺口；实际产出高于潜在产出是通胀缺口。",
            controls: [
              { key: "adShift", label: "AD Shift 总需求移动", defaultValue: -15, min: -40, max: 40, step: 1 },
              { key: "srasShift", label: "SRAS Shift 短期总供给移动", defaultValue: 0, min: -40, max: 40, step: 1 },
              { key: "potential", label: "Potential Output 潜在产出", defaultValue: 100, min: 80, max: 120, step: 1 }
            ]
          }
        ]
      },
      {
        id: "fiscal-policy",
        unit: "Unit 3",
        title: "Fiscal Policy Simulator",
        subtitle: "财政政策模拟",
        description: "调节政府支出、税收和 MPC，观察乘数如何影响 AD。",
        accent: "from-output",
        steps: [
          {
            id: "multiplier-policy",
            label: "Step 1",
            title: "Multiplier and AD",
            description: "用 MPC 和财政冲击估算 AD 变化。",
            componentType: "fiscal",
            formula: "Spending Multiplier = 1 / (1 - MPC)",
            explanation: "扩张性财政政策会让 AD 右移；紧缩性财政政策会让 AD 左移。MPC 越高，支出乘数越大。",
            controls: [
              { key: "mpc", label: "MPC 边际消费倾向", defaultValue: 0.75, min: 0.2, max: 0.95, step: 0.01 },
              { key: "gChange", label: "Change in G 政府支出变化", defaultValue: 20, min: -50, max: 50, step: 1 },
              { key: "taxChange", label: "Change in Taxes 税收变化", defaultValue: 0, min: -50, max: 50, step: 1 }
            ]
          }
        ]
      },
      {
        id: "multiplier-lab",
        unit: "Unit 3",
        title: "Multiplier Lab",
        subtitle: "乘数实验",
        description: "用 MPC 计算支出乘数和税收乘数，理解政策冲击大小。",
        accent: "from-output",
        steps: [
          {
            id: "multiplier-size",
            label: "Step 1",
            title: "Multiplier size",
            description: "调节 MPC、政府支出和税收，比较乘数结果。",
            componentType: "fiscal",
            formula: "Tax Multiplier = -MPC / (1 - MPC)",
            explanation: "支出乘数通常大于税收乘数的绝对值，因为政府支出直接进入总需求，而减税先影响可支配收入和消费。",
            controls: [
              { key: "mpc", label: "MPC 边际消费倾向", defaultValue: 0.8, min: 0.2, max: 0.95, step: 0.01 },
              { key: "gChange", label: "Change in G 政府支出变化", defaultValue: 10, min: -50, max: 50, step: 1 },
              { key: "taxChange", label: "Change in Taxes 税收变化", defaultValue: -10, min: -50, max: 50, step: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "unit-4",
    label: "Unit 4",
    title: "Financial Sector",
    subtitle: "金融部门",
    weight: "18%-23%",
    focus: "Reserve Market / Money Market / Loanable Funds",
    accent: "from-prices",
    labs: [
      flowLab("bank-balance-sheet", "Unit 4", "Bank Balance Sheet", "银行资产负债表", "用 T-account 理解准备金、贷款和存款。", "bank"),
      flowLab("money-multiplier", "Unit 4", "Money Multiplier", "货币乘数", "观察准备金率如何影响最大货币创造。", "multiplier"),
      marketLab("reserve-market", "Unit 4", "Reserve Market", "准备金市场", "用准备金供给和需求分析准备金利率变化。", "reserve"),
      marketLab("money-market", "Unit 4", "Money Market", "货币市场", "用货币供给和货币需求解释名义利率变化。", "money"),
      marketLab("loanable-funds", "Unit 4", "Loanable Funds", "可贷资金市场", "用储蓄和投资需求分析实际利率。", "loanable"),
      {
        id: "monetary-policy",
        unit: "Unit 4",
        title: "Monetary Policy",
        subtitle: "货币政策",
        description: "观察货币政策如何影响利率、投资、AD 和短期产出。",
        accent: "from-prices",
        steps: [
          {
            id: "monetary-adas",
            label: "Step 1",
            title: "Money to AD",
            description: "调节货币供给和投资敏感度，观察 AD-AS 联动。",
            componentType: "adas",
            formula: "MS increases -> interest rate falls -> investment rises -> AD shifts right",
            explanation: "扩张性货币政策增加货币供给，降低利率，刺激投资，使 AD 右移。",
            controls: [
              { key: "adShift", label: "Monetary AD Effect 货币政策对 AD", defaultValue: 18, min: -40, max: 40, step: 1 },
              { key: "srasShift", label: "SRAS Shift 短期总供给移动", defaultValue: 0, min: -40, max: 40, step: 1 },
              { key: "potential", label: "Potential Output 潜在产出", defaultValue: 100, min: 80, max: 120, step: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "unit-5",
    label: "Unit 5",
    title: "Long-Run Consequences of Stabilization Policies",
    subtitle: "稳定政策的长期影响",
    weight: "20%-30%",
    focus: "Phillips Curve / Growth",
    accent: "from-labor",
    labs: [
      {
        id: "phillips-curve",
        unit: "Unit 5",
        title: "Phillips Curve",
        subtitle: "菲利普斯曲线",
        description: "观察短期通胀与失业的权衡，以及长期自然失业率。",
        accent: "from-labor",
        steps: [
          {
            id: "phillips-adjustment",
            label: "Step 1",
            title: "Inflation and unemployment",
            description: "调节 AD 压力和预期通胀，观察 SRPC 与 LRPC。",
            componentType: "phillips",
            formula: "In the long run, unemployment returns to the natural rate.",
            explanation: "短期 Phillips Curve 展示通胀与失业的权衡；预期通胀上升会让 SRPC 上移。",
            controls: [
              { key: "demandPressure", label: "AD Pressure 总需求压力", defaultValue: 0, min: -30, max: 30, step: 1 },
              { key: "expectedInflation", label: "Expected Inflation 预期通胀", defaultValue: 3, min: 0, max: 10, step: 0.1 },
              { key: "naturalRate", label: "Natural Rate 自然失业率", defaultValue: 5, min: 3, max: 8, step: 0.1 }
            ]
          }
        ]
      },
      {
        id: "expectations-adjustment",
        unit: "Unit 5",
        title: "Expectations Adjustment",
        subtitle: "预期调整",
        description: "观察通胀预期变化如何移动短期 Phillips Curve。",
        accent: "from-labor",
        steps: [
          {
            id: "expected-inflation",
            label: "Step 1",
            title: "Expected inflation",
            description: "提高或降低预期通胀，观察 SRPC 上移或下移。",
            componentType: "phillips",
            formula: "Higher expected inflation shifts SRPC upward.",
            explanation: "当工人和企业预期通胀更高，工资和价格设置会提前调整，短期 Phillips Curve 上移。",
            controls: [
              { key: "demandPressure", label: "AD Pressure 总需求压力", defaultValue: 0, min: -30, max: 30, step: 1 },
              { key: "expectedInflation", label: "Expected Inflation 预期通胀", defaultValue: 5, min: 0, max: 10, step: 0.1 },
              { key: "naturalRate", label: "Natural Rate 自然失业率", defaultValue: 5, min: 3, max: 8, step: 0.1 }
            ]
          }
        ]
      },
      {
        id: "economic-growth",
        unit: "Unit 5",
        title: "Economic Growth",
        subtitle: "经济增长",
        description: "用 PPC 和 LRAS 外移表示长期增长。",
        accent: "from-output",
        steps: [
          {
            id: "growth-ppc",
            label: "Step 1",
            title: "Growth shifts capacity",
            description: "调节技术和资本，观察长期生产能力提升。",
            componentType: "ppc",
            formula: "Growth increases potential output.",
            explanation: "长期经济增长来自资本、技术、人力资本和制度改善，表现为 PPC 或 LRAS 向外移动。",
            controls: [
              { key: "capacity", label: "Long-run Capacity 长期能力", defaultValue: 110, min: 80, max: 140, step: 1 },
              { key: "goodX", label: "Consumer Goods 消费品", defaultValue: 55, min: 0, max: 140, step: 1 },
              { key: "goodY", label: "Capital Goods 资本品", defaultValue: 65, min: 0, max: 140, step: 1 }
            ],
            draggablePoints: [
              { id: "growth-point", xKey: "goodX", yKey: "goodY", bounds: { minX: 0, maxX: 140, minY: 0, maxY: 140 }, constraint: "free" }
            ]
          }
        ]
      },
      marketLab("deficits-crowding-out", "Unit 5", "Deficits and Crowding Out", "赤字与挤出效应", "用可贷资金市场分析赤字、债务和挤出效应。", "loanable"),
      {
        id: "money-growth-inflation",
        unit: "Unit 5",
        title: "Money Growth and Inflation",
        subtitle: "货币增长与通胀",
        description: "观察货币增长在长期中如何影响价格水平和通胀。",
        accent: "from-prices",
        steps: [
          {
            id: "long-run-money",
            label: "Step 1",
            title: "Long-run money neutrality",
            description: "调节货币增长和产出增长，观察通胀压力。",
            componentType: "allocation",
            formula: "Inflation pressure roughly follows money growth minus output growth.",
            explanation: "长期中，持续的货币增长更容易反映为价格水平上升，而真实产出主要由生产能力决定。",
            controls: [
              { key: "leftShare", label: "Money Growth 货币增长", defaultValue: 8, min: 0, max: 15, step: 0.1 },
              { key: "totalResources", label: "Output Growth 产出增长", defaultValue: 3, min: 0, max: 8, step: 0.1 }
            ],
            allocationLabels: { left: "Money Growth", right: "Output Growth", total: "Growth Comparison" }
          }
        ]
      }
    ]
  },
  {
    id: "unit-6",
    label: "Unit 6",
    title: "Open Economy: International Trade and Finance",
    subtitle: "开放经济",
    weight: "10%-13%",
    focus: "Foreign Exchange Market",
    accent: "from-cycle",
    labs: [
      flowLab("balance-of-payments", "Unit 6", "Balance of Payments", "国际收支", "区分经常账户和金融账户。", "bop"),
      {
        id: "foreign-exchange",
        unit: "Unit 6",
        title: "Foreign Exchange Market",
        subtitle: "外汇市场",
        description: "先判断外汇冲击影响 Demand 还是 Supply，再移动曲线分析汇率。",
        accent: "from-prices",
        steps: [
          {
            id: "forex-determinants",
            label: "Step 1",
            title: "Forex determinants",
            description: "把外汇市场 shock 连到正确曲线。",
            componentType: "classification",
            formula: "Currency demand comes from foreigners buying domestic goods/assets; currency supply comes from domestic residents buying foreign goods/assets.",
            explanation: "外汇题通常先判断哪一条曲线移动。外国人需要本币购买本国商品或资产，会增加本币需求；本国人需要外币购买外国商品或资产，会增加本币供给。",
            categories: [
              { id: "currency-demand", label: "Demand for currency 需求", hint: "外国人购买本国商品或资产" },
              { id: "currency-supply", label: "Supply of currency 供给", hint: "本国人购买外国商品或资产" }
            ],
            items: [
              { id: "exports-rise", label: "Foreign consumers buy more domestic exports", correct: "currency-demand" },
              { id: "domestic-assets-attractive", label: "Foreign investors buy more domestic bonds", correct: "currency-demand" },
              { id: "imports-rise", label: "Domestic consumers buy more foreign goods", correct: "currency-supply" },
              { id: "foreign-assets-attractive", label: "Domestic investors buy more foreign bonds", correct: "currency-supply" }
            ]
          },
          {
            id: "foreign-exchange-equilibrium",
            label: "Step 2",
            title: "Foreign Exchange Market",
            description: "移动外汇供给和需求，观察汇率、升值和贬值；若 Step 1 已答对，曲线会先按该 shock 自动设置。",
            componentType: "forex",
            marketType: "forex",
            formula: "Equilibrium occurs where currency supply intersects currency demand.",
            explanation: "外汇需求增加通常推高本币汇率，本币升值；外汇供给增加通常压低本币汇率，本币贬值。",
            controls: [
              { key: "supplyShift", label: "Currency Supply 货币供给", defaultValue: 0, min: -35, max: 35, step: 1 },
              { key: "demandShift", label: "Currency Demand 货币需求", defaultValue: 0, min: -35, max: 35, step: 1 }
            ]
          }
        ]
      },
      flowLab("capital-flows", "Unit 6", "Capital Flows", "资本流动", "观察利率差异如何影响资本流动和汇率。", "capital"),
      {
        id: "policy-open-economy",
        unit: "Unit 6",
        title: "Policy in an Open Economy",
        subtitle: "开放经济中的政策",
        description: "分析财政或货币政策在开放经济中对汇率和净出口的影响。",
        accent: "from-cycle",
        steps: [
          {
            id: "policy-forex",
            label: "Step 1",
            title: "Policy and exchange rate",
            description: "调节资本流入和外汇需求，观察汇率与净出口。",
            componentType: "forex",
            marketType: "forex",
            formula: "Higher domestic interest rates can attract capital inflows and appreciate currency.",
            explanation: "开放经济中，政策会通过利率和资本流动影响汇率；汇率变化再影响净出口和 AD。",
            controls: [
              { key: "supplyShift", label: "Currency Supply 货币供给", defaultValue: -10, min: -35, max: 35, step: 1 },
              { key: "demandShift", label: "Currency Demand 货币需求", defaultValue: 15, min: -35, max: 35, step: 1 }
            ]
          }
        ]
      }
    ]
  }
];

const state = {
  view: "home",
  unitId: courseUnits[0].id,
  labId: courseUnits[0].labs[0].id,
  stepId: courseUnits[0].labs[0].steps[0].id,
  values: {},
  matches: {},
  selectedMatchItem: null,
  selectedStage: "expansion",
  openUnits: new Set([courseUnits[0].id]),
  showFormulaDetails: false,
  showPolicyResponse: false,
  dragFrame: null
};

function classificationLab(id, unit, title, subtitle, description, options) {
  return {
    id,
    unit,
    title,
    subtitle,
    description,
    accent: "from-output",
    steps: [
      {
        id: `${id}-classification`,
        label: "Step 1",
        title,
        description,
        componentType: "classification",
        formula: options.formula,
        explanation: options.explanation,
        categories: options.categories,
        items: options.items
      }
    ]
  };
}

function allocationLab(id, unit, title, subtitle, description, options) {
  return {
    id,
    unit,
    title,
    subtitle,
    description,
    accent: "from-output",
    steps: [
      {
        id: `${id}-allocation`,
        label: "Step 1",
        title,
        description,
        componentType: "allocation",
        formula: "Choosing more of one option means giving up part of another option.",
        explanation: options.explanation,
        controls: [
          { key: "leftShare", label: options.leftLabel, defaultValue: options.defaultLeft, min: 0, max: options.defaultTotal, step: 1 },
          { key: "totalResources", label: options.totalLabel, defaultValue: options.defaultTotal, min: Math.max(10, options.defaultTotal * 0.5), max: options.defaultTotal * 1.5, step: 1 }
        ],
        allocationLabels: { left: options.leftLabel, right: options.rightLabel, total: options.totalLabel }
      }
    ]
  };
}

function flowLab(id, unit, title, subtitle, description, flowType) {
  const configs = {
    bank: {
      formula: "Required Reserves = Deposits x Reserve Requirement",
      explanation: "银行收到存款后，一部分作为法定准备金，剩余部分可以形成贷款。贷款会进入经济中的支出和存款循环。",
      controls: [
        { key: "deposit", label: "Deposit 存款", defaultValue: 1000, min: 100, max: 3000, step: 10 },
        { key: "reserveRatio", label: "Reserve Requirement 准备金率", defaultValue: 0.1, min: 0.02, max: 0.4, step: 0.01 }
      ]
    },
    multiplier: {
      formula: "Money Multiplier = 1 / Reserve Requirement",
      explanation: "准备金率越低，银行体系理论上的最大货币创造越大；实际创造还会受到超额准备金和现金漏出的限制。",
      controls: [
        { key: "deposit", label: "Initial Deposit 初始存款", defaultValue: 1000, min: 100, max: 3000, step: 10 },
        { key: "reserveRatio", label: "Reserve Ratio 准备金率", defaultValue: 0.1, min: 0.02, max: 0.4, step: 0.01 }
      ]
    },
    bop: {
      formula: "Current Account + Financial Account = 0",
      explanation: "经常账户记录商品、服务和收入流动；金融账户记录资产购买和资本流动。一个账户的赤字通常对应另一个账户的盈余。",
      controls: [
        { key: "exports", label: "Exports 出口", defaultValue: 120, min: 0, max: 300, step: 1 },
        { key: "imports", label: "Imports 进口", defaultValue: 150, min: 0, max: 300, step: 1 },
        { key: "capitalInflow", label: "Capital Inflow 资本流入", defaultValue: 30, min: -150, max: 150, step: 1 }
      ]
    },
    capital: {
      formula: "Higher relative interest rates attract capital inflows.",
      explanation: "国内实际利率相对国外更高时，资本更可能流入；资本流入会影响本币需求和汇率。",
      controls: [
        { key: "domesticRate", label: "Domestic Real Interest Rate 国内实际利率", defaultValue: 5, min: 0, max: 10, step: 0.1 },
        { key: "foreignRate", label: "Foreign Real Interest Rate 国外实际利率", defaultValue: 3, min: 0, max: 10, step: 0.1 }
      ]
    }
  };
  const config = configs[flowType];

  return {
    id,
    unit,
    title,
    subtitle,
    description,
    accent: "from-prices",
    steps: [
      {
        id: `${id}-flow`,
        label: "Step 1",
        title,
        description,
        componentType: "flow",
        flowType,
        formula: config.formula,
        explanation: config.explanation,
        controls: config.controls
      }
    ]
  };
}

function marketLab(id, unit, title, subtitle, description, marketType) {
  const labels = {
    reserve: ["Reserve Supply 准备金供给", "Reserve Demand 准备金需求", "Reserve Rate 准备金利率"],
    money: ["Money Supply 货币供给", "Money Demand 货币需求", "Nominal Interest Rate 名义利率"],
    loanable: ["Saving Supply 储蓄供给", "Investment Demand 投资需求", "Real Interest Rate 实际利率"],
    forex: ["Currency Supply 货币供给", "Currency Demand 货币需求", "Exchange Rate 汇率"]
  }[marketType];

  return {
    id,
    unit,
    title,
    subtitle,
    description,
    accent: "from-prices",
    steps: [
      {
        id: `${id}-equilibrium`,
        label: "Step 1",
        title,
        description,
        componentType: marketType === "forex" ? "forex" : "market",
        marketType,
        formula: "Equilibrium occurs where supply intersects demand.",
        explanation: `${labels[0]} 与 ${labels[1]} 的交点决定 ${labels[2]}。移动供给或需求可以观察均衡价格和数量如何变化。`,
        controls: [
          { key: "supplyShift", label: labels[0], defaultValue: 0, min: -35, max: 35, step: 1 },
          { key: "demandShift", label: labels[1], defaultValue: 0, min: -35, max: 35, step: 1 }
        ]
      }
    ]
  };
}

function allLabs() {
  return courseUnits.flatMap((unit) => unit.labs.map((lab) => ({ ...lab, unitId: unit.id })));
}

function currentUnit() {
  return courseUnits.find((unit) => unit.id === state.unitId) ?? courseUnits[0];
}

function currentLab() {
  const unit = currentUnit();
  return unit.labs.find((lab) => lab.id === state.labId) ?? unit.labs[0];
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
  state.selectedMatchItem = null;
  state.showFormulaDetails = false;
  state.showPolicyResponse = false;
  for (const control of controlsFor(step)) {
    state.values[control.key] = control.defaultValue;
  }
  if (step.componentType === "classification") {
    state.matches[step.id] = {};
  }
  if (step.componentType === "cycle") {
    state.selectedStage = currentLab().stages?.[0]?.key ?? "expansion";
  }
  applyLinkedDefaults(step);
}

function forexShockShift(itemId) {
  return {
    "exports-rise": { demandShift: 18, supplyShift: 0 },
    "domestic-assets-attractive": { demandShift: 22, supplyShift: 0 },
    "imports-rise": { demandShift: 0, supplyShift: 18 },
    "foreign-assets-attractive": { demandShift: 0, supplyShift: 22 }
  }[itemId];
}

function applyLinkedDefaults(step) {
  if (currentLab().id !== "foreign-exchange" || step.id !== "foreign-exchange-equilibrium") return;

  const determinantStep = currentLab().steps.find((item) => item.id === "forex-determinants");
  const matches = determinantStep ? matchesForStep(determinantStep) : {};
  const correctMatch = (determinantStep?.items ?? []).find((item) => matches[item.id] === item.correct);
  const shift = correctMatch ? forexShockShift(correctMatch.id) : null;
  if (!shift) return;

  state.values.supplyShift = shift.supplyShift;
  state.values.demandShift = shift.demandShift;
}

function enterUnit(unitId) {
  const unit = courseUnits.find((item) => item.id === unitId) ?? courseUnits[0];
  state.view = "unit";
  state.unitId = unit.id;
  state.labId = unit.labs[0].id;
  state.stepId = unit.labs[0].steps[0].id;
  resetValues(unit.labs[0].steps[0]);
  renderApp();
}

function enterLab(unitId, labId) {
  const unit = courseUnits.find((item) => item.id === unitId) ?? courseUnits[0];
  const lab = unit.labs.find((item) => item.id === labId) ?? unit.labs[0];
  state.view = "lab";
  state.unitId = unit.id;
  state.openUnits.add(unit.id);
  state.labId = lab.id;
  state.stepId = lab.steps[0].id;
  resetValues(lab.steps[0]);
  renderApp();
}

function value(key) {
  return Number(state.values[key] ?? 0);
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number));
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
            <span class="unit-pill">AP Macroeconomics</span>
            <span class="unit-pill">6 Units</span>
          </div>
          <h1>Macroeconomics Course Map</h1>
          <p>宏观经济学互动课程地图</p>
          <div class="unit-count"><span>${allLabs().length} Labs</span><strong>→</strong></div>
        </header>
        <div class="unit-accordion-list">
          ${courseUnits.map((unit) => `
            <details class="unit-accordion" data-unit-accordion="${unit.id}" ${state.openUnits.has(unit.id) ? "open" : ""}>
              <summary>
                <span class="lab-chip">${unit.label}</span>
                <span>
                  <strong>${unit.title}</strong>
                  <small>${unit.subtitle} · ${unit.focus}</small>
                </span>
                <em>${unit.weight}</em>
              </summary>
              <div class="home-lab-grid">
                ${unit.labs.map((lab) => `
                  <article class="lab-card clickable-card" data-open-lab="${lab.id}" data-unit="${unit.id}" tabindex="0" role="button" aria-label="Open ${lab.title}">
                    <div>
                      <span class="lab-chip">${lab.unit}</span>
                    </div>
                    <h2>${lab.title}</h2>
                    <p>${lab.description}</p>
                    <button type="button" tabindex="-1" aria-hidden="true">进入实验</button>
                  </article>
                `).join("")}
              </div>
            </details>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderUnit() {
  const unit = currentUnit();
  return `
    <div class="page-shell">
      <header class="hero panel lab-hero ${unit.accent}">
        <div>
          <button class="ghost-button" data-home>← Course Map</button>
          <span class="badge">${unit.label}</span>
          <span class="badge badge-soft">${unit.weight}</span>
        </div>
        <h1>${unit.title}</h1>
        <p>${unit.subtitle} · ${unit.focus}</p>
      </header>
      <section class="unit-directory panel unit-lab-directory">
        <div class="lab-card-grid">
          ${unit.labs.map((lab) => `
            <article class="lab-card clickable-card" data-open-lab="${lab.id}" data-unit="${unit.id}" tabindex="0" role="button" aria-label="Open ${lab.title}">
              <div>
                <span class="lab-chip">${lab.unit}</span>
              </div>
              <h2>${lab.title}</h2>
              <p>${lab.description}</p>
              <button type="button" tabindex="-1" aria-hidden="true">进入实验</button>
            </article>
          `).join("")}
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
          <input data-control="${control.key}" type="range" min="${control.min}" max="${control.max}" step="any" value="${current}" />
          <strong data-control-value="${control.key}">${formatNumber(current)}</strong>
          ${base}
        </label>
      `;
    })
    .join("");

  return `
    <aside class="panel controls-panel">
      <button class="back-button" data-back-unit>← ${currentUnit().label} Labs</button>
      <div class="eyebrow">Controls</div>
      ${controlHtml || renderCycleButtons(lab)}
      <button class="reset-button" data-reset>重置</button>
    </aside>
  `;
}

function renderStepNav(lab, step) {
  return `
    <section class="panel step-nav-panel">
      <div class="step-nav-heading">
        <span>${lab.unit} · ${lab.steps.length} Steps</span>
        <strong>${step.label}: ${step.title}</strong>
      </div>
      <nav class="step-nav-list" aria-label="${lab.title} steps">
        ${lab.steps
          .map((item) => `
            <button class="step-tab ${item.id === step.id ? "is-active" : ""}" data-step="${item.id}">
              <span>${item.label}</span>
              <strong>${item.title}</strong>
            </button>
          `)
          .join("")}
      </nav>
    </section>
  `;
}

function renderCycleButtons(lab) {
  return `
    <div class="cycle-control-list">
      ${(lab.stages ?? [])
        .map((stage) => `
          <button class="stage-button ${state.selectedStage === stage.key ? "is-active" : ""}" data-stage="${stage.key}">
            <strong>${stage.label}</strong>
            <span>${stage.subtitle}</span>
          </button>
        `)
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
        ${result.metrics.map(([label, amount]) => {
          const width = Math.max(8, Math.abs(amount) / maxValue * 100);
          return `
            <div class="bar-row">
              <span>${label}</span>
              <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
              <strong>${formatNumber(amount)}${label.includes("Rate") || label === "LFPR" ? "%" : ""}</strong>
            </div>
          `;
        }).join("")}
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
        ${parts.map((part) => {
          const amount = value(part.key);
          const width = Math.max(8, Math.abs(amount) / positiveTotal * 100);
          return `
            <div class="composition-block ${amount < 0 ? "is-negative" : ""}" style="width:${width}%; background:${part.color}">
              <span>${part.shortLabel ?? part.label}</span>
              <strong>${formatNumber(amount)}</strong>
            </div>
          `;
        }).join("")}
      </div>
      ${step.mode === "cpi" || step.mode === "labor" ? `
        <button class="inline-toggle ${state.showFormulaDetails ? "is-active" : ""}" data-toggle-formula type="button">
          ${state.showFormulaDetails ? "Hide formula details" : "Show formula details"}
        </button>
      ` : ""}
      ${step.mode === "cpi" && state.showFormulaDetails ? `
        <div class="formula-breakdown">
          <span>Basket formula</span>
          <strong>Base basket = ${parts.map((part) => `${formatNumber(part.baseValue)} ${part.label.split(" ")[0]}`).join(" + ")} = ${formatNumber(summary.metrics[0][1])}</strong>
          <strong>Current basket = ${parts.map((part) => `${formatNumber(value(part.key))} ${part.label.split(" ")[0]}`).join(" + ")} = ${formatNumber(summary.metrics[1][1])}</strong>
          <strong>CPI = Current Basket / Base Basket x 100 = ${formatNumber(summary.metrics[2][1])}</strong>
        </div>
      ` : ""}
      ${step.mode === "labor" && state.showFormulaDetails ? `
        <div class="formula-breakdown">
          <span>Labor formulas</span>
          <strong>Labor Force = Employed + Unemployed = ${formatNumber(summary.metrics[3][1])}</strong>
          <strong>Unemployment Rate = Unemployed / Labor Force x 100 = ${formatNumber(summary.metrics[4][1])}%</strong>
          <strong>LFPR = Labor Force / Adult Population x 100 = ${formatNumber(summary.metrics[5][1])}%</strong>
        </div>
      ` : ""}
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function matchesForStep(step) {
  if (!state.matches[step.id]) state.matches[step.id] = {};
  return state.matches[step.id];
}

function classificationSummary(step) {
  const matches = matchesForStep(step);
  const total = step.items?.length ?? 0;
  const answered = Object.keys(matches).length;
  const correct = (step.items ?? []).filter((item) => matches[item.id] === item.correct).length;
  return {
    total: `${correct}/${total} correct`,
    metrics: [["Answered", answered], ["Correct", correct], ["Remaining", Math.max(total - answered, 0)]],
    feedback:
      answered === 0
        ? "把左侧例子拖到右侧概念框，或先点一个例子再点一个分类。"
        : correct === total
          ? "全部分类正确。这个 Lab 的目标是先识别概念，而不是把概念硬画成图。"
          : `已完成 ${answered} 个分类，其中 ${correct} 个正确。继续调整连线直到分类全部正确。`
  };
}

function renderClassification(step) {
  const matches = matchesForStep(step);
  const categories = step.categories ?? [];
  const items = step.items ?? [];
  const summary = classificationSummary(step);
  const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));
  const correctlyAnsweredCategories = new Set(
    items
      .filter((item) => matches[item.id] === item.correct)
      .map((item) => item.correct)
  );
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="matching-board" data-matching-board aria-label="${step.title} matching board">
        <svg class="matching-lines" data-matching-lines></svg>
        <div class="matching-column">
          <div class="matching-heading">Examples</div>
          ${items.map((item) => {
            const assigned = matches[item.id];
            const isCorrect = assigned === item.correct;
            const color = isCorrect ? categoryById[assigned]?.color : "";
            return `
              <button class="match-card ${state.selectedMatchItem === item.id ? "is-selected" : ""} ${assigned ? isCorrect ? "is-correct" : "is-wrong" : ""}"
                draggable="true"
                data-match-item="${item.id}"
                data-correct-category="${item.correct}"
                style="${color ? `--match-color:${color}` : ""}">
                <span>${item.label}</span>
                ${assigned ? `<small>${isCorrect ? "Correct" : "Try again"}</small>` : ""}
              </button>
            `;
          }).join("")}
        </div>
        <div class="matching-column">
          <div class="matching-heading">Categories</div>
          ${categories.map((category) => {
            const showColor = correctlyAnsweredCategories.has(category.id);
            return `
              <button class="match-target ${showColor ? "has-correct-match" : ""}" data-match-category="${category.id}" style="${showColor && category.color ? `--match-color:${category.color}` : ""}">
                <strong>${category.label}</strong>
                <span>${category.hint}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function allocationSummary(step) {
  const left = value("leftShare");
  const total = value("totalResources");
  const right = Math.max(total - left, 0);
  const labels = step.allocationLabels ?? { left: "Option A", right: "Option B", total: "Resources" };
  const balance = total === 0 ? 0 : left / total * 100;

  if (step.id === "long-run-money") {
    const pressure = left - total;
    return {
      total: pressure > 1 ? "Inflation Pressure" : pressure < -1 ? "Low Inflation Pressure" : "Balanced Growth",
      metrics: [["Money Growth", left], ["Output Growth", total], ["Inflation Pressure", pressure]],
      feedback: pressure > 1 ? "货币增长快于真实产出增长，长期通胀压力上升。" : pressure < -1 ? "产出增长足以吸收货币增长，长期通胀压力较低。" : "货币增长和产出增长接近，价格压力相对温和。"
    };
  }

  return {
    total: `${formatNumber(balance)}% to ${labels.left.split(" ")[0]}`,
    metrics: [[labels.left, left], [labels.right, right], [labels.total, total]],
    feedback: `${labels.left} 增加时，${labels.right} 会相应减少。这就是稀缺性下的取舍和机会成本。`
  };
}

function renderAllocation(step) {
  const summary = allocationSummary(step);
  const labels = step.allocationLabels ?? { left: "Option A", right: "Option B", total: "Resources" };
  const left = value("leftShare");
  const total = Math.max(value("totalResources"), 1);
  const leftWidth = clamp(left / total * 100, 0, 100);
  const rightWidth = 100 - leftWidth;
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="allocation-chart" aria-label="${step.title} allocation chart">
        <div class="allocation-segment primary" style="width:${leftWidth}%">
          <strong>${formatNumber(left)}</strong>
          <span>${labels.left}</span>
        </div>
        <div class="allocation-segment secondary" style="width:${rightWidth}%">
          <strong>${formatNumber(Math.max(total - left, 0))}</strong>
          <span>${labels.right}</span>
        </div>
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function ppcFrontier(x, capacity = 100) {
  const ratio = clamp(x / capacity, 0, 1);
  return Math.max(0, capacity * (1 - Math.pow(ratio, 1.7)));
}

function ppcSummary(step) {
  const capacity = value("capacity") || 100;
  const x = value("goodX");
  const y = value("goodY");
  const frontier = ppcFrontier(x, capacity);
  const gap = y - frontier;
  const status = gap > 3 ? "Currently Unattainable" : gap < -3 ? "Inefficient" : "Productively Efficient";
  return {
    total: status,
    metrics: [["Point X", x], ["Point Y", y], ["Frontier Y", frontier], ["Gap", gap]],
    feedback:
      status === "Currently Unattainable"
        ? "点 A 位于 PPC 曲线外，当前资源和技术下不可达。"
        : status === "Inefficient"
          ? "点 A 位于 PPC 曲线内，说明资源没有被充分利用。"
          : "点 A 接近 PPC 曲线，表示生产有效率。"
  };
}

function renderPpcChart(step) {
  const capacity = value("capacity") || 100;
  const x = clamp(value("goodX"), 0, capacity);
  const y = clamp(value("goodY"), 0, capacity);
  const toX = (dataX) => 70 + dataX / capacity * 520;
  const toY = (dataY) => 330 - dataY / capacity * 260;
  const toXBase = (dataX) => 70 + dataX / 130 * 520;
  const toYBase = (dataY) => 330 - dataY / 130 * 260;
  const growthMode = step.id === "ppc-growth";
  const points = Array.from({ length: 21 }, (_, index) => {
    const dataX = capacity * index / 20;
    return growthMode ? `${toXBase(dataX)},${toYBase(ppcFrontier(dataX, capacity))}` : `${toX(dataX)},${toY(ppcFrontier(dataX, capacity))}`;
  }).join(" ");
  const oldPoints = Array.from({ length: 21 }, (_, index) => {
    const oldCapacity = 100;
    const dataX = oldCapacity * index / 20;
    return `${toXBase(dataX)},${toYBase(ppcFrontier(dataX, oldCapacity))}`;
  }).join(" ");
  const pointX = growthMode ? toXBase(x) : toX(x);
  const pointY = growthMode ? toYBase(y) : toY(y);
  const frontierY = ppcFrontier(x, capacity);
  const status = y > frontierY + 2 ? "Unattainable" : y < frontierY - 2 ? "Inefficient" : "Efficient";

  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg draggable-chart" data-chart-type="ppc" aria-label="PPC chart">
        <line x1="70" y1="330" x2="620" y2="330" class="axis"></line>
        <line x1="70" y1="45" x2="70" y2="330" class="axis"></line>
        <text x="350" y="368" class="chart-label" text-anchor="middle">Consumer Goods</text>
        <text x="24" y="190" class="chart-label" text-anchor="middle" transform="rotate(-90 24 190)">Capital Goods</text>
        ${growthMode ? `<polyline points="${oldPoints}" class="reference-line"></polyline><text x="365" y="250" class="chart-label">Old PPC</text>` : ""}
        <polyline points="${points}" class="model-line"></polyline>
        <text x="450" y="${growthMode && capacity > 100 ? 112 : 132}" class="chart-label">${growthMode ? "New PPC" : "PPC"}</text>
        <text x="178" y="270" class="chart-label">Inside: inefficient</text>
        <text x="392" y="94" class="chart-label">Outside: unattainable</text>
        <text x="492" y="176" class="chart-label">On PPC: efficient</text>
        <g class="draggable-point" data-drag-point="ppc-point" data-x-key="goodX" data-y-key="goodY" data-min-x="0" data-max-x="${capacity}" data-min-y="0" data-max-y="${capacity}" data-scale-max="${growthMode ? 130 : capacity}">
          <circle class="drag-hit" cx="${pointX}" cy="${pointY}" r="24"></circle>
          <circle class="drag-dot" cx="${pointX}" cy="${pointY}" r="10"></circle>
          <text x="${pointX + 16}" y="${pointY - 14}">A: ${status}</text>
        </g>
      </svg>
      ${renderMetrics(ppcSummary(step).metrics)}
    </section>
  `;
}

function comparativeSummary() {
  const ocAX = value("aY") / Math.max(value("aX"), 1);
  const ocAY = value("aX") / Math.max(value("aY"), 1);
  const ocBX = value("bY") / Math.max(value("bX"), 1);
  const ocBY = value("bX") / Math.max(value("bY"), 1);
  const sameX = Math.abs(ocAX - ocBX) < 0.01;
  const sameY = Math.abs(ocAY - ocBY) < 0.01;
  const xAdvantage = sameX ? "No country" : ocAX < ocBX ? "Country A" : "Country B";
  const yAdvantage = sameY ? "No country" : ocAY < ocBY ? "Country A" : "Country B";
  return {
    total: sameX ? "No comparative advantage in X" : `${xAdvantage} in X`,
    metrics: [["A cost of X", ocAX], ["B cost of X", ocBX], ["A cost of Y", ocAY], ["B cost of Y", ocBY]],
    feedback: `${sameX ? "Both countries have the same opportunity cost for Good X, so neither has comparative advantage in X" : `${xAdvantage} has comparative advantage in Good X`}; ${sameY ? "both countries have the same opportunity cost for Good Y, so neither has comparative advantage in Y" : `${yAdvantage} has comparative advantage in Good Y`}.`
  };
}

function renderComparative(step) {
  const max = Math.max(value("aX"), value("aY"), value("bX"), value("bY"), 100);
  const toX = (dataX) => 70 + dataX / max * 230;
  const toY = (dataY) => 330 - dataY / max * 230;
  const toX2 = (dataX) => 380 + dataX / max * 230;
  const summary = comparativeSummary();
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg" aria-label="Comparative advantage PPC charts">
        <line x1="70" y1="330" x2="320" y2="330" class="axis"></line>
        <line x1="70" y1="80" x2="70" y2="330" class="axis"></line>
        <line x1="380" y1="330" x2="630" y2="330" class="axis"></line>
        <line x1="380" y1="80" x2="380" y2="330" class="axis"></line>
        <line x1="${toX(0)}" y1="${toY(value("aY"))}" x2="${toX(value("aX"))}" y2="${toY(0)}" class="model-line"></line>
        <line x1="${toX2(0)}" y1="${toY(value("bY"))}" x2="${toX2(value("bX"))}" y2="${toY(0)}" class="model-line alt"></line>
        <text x="195" y="58" text-anchor="middle" class="chart-title">Country A</text>
        <text x="505" y="58" text-anchor="middle" class="chart-title">Country B</text>
        <text x="195" y="365" text-anchor="middle" class="chart-label">Good X</text>
        <text x="505" y="365" text-anchor="middle" class="chart-label">Good X</text>
      </svg>
      <div class="ap-answer-strip">
        <div><span>AP input check</span><strong>${summary.feedback}</strong></div>
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function adasSummary() {
  const y = 100 + value("adShift") + value("srasShift") * 0.35;
  const price = 100 + value("adShift") * 0.55 - value("srasShift") * 0.45;
  const gap = y - value("potential");
  const status = gap > 4 ? "Inflationary Gap" : gap < -4 ? "Recessionary Gap" : "Long-run Equilibrium";
  return {
    total: status,
    metrics: [["Real GDP", y], ["Price Level", price], ["Potential GDP", value("potential")], ["Output Gap", gap]],
    feedback:
      status === "Inflationary Gap"
        ? "实际产出高于潜在产出，经济有通胀压力。"
        : status === "Recessionary Gap"
          ? "实际产出低于潜在产出，经济有衰退缺口。"
          : "实际产出接近潜在产出，经济接近长期均衡。"
  };
}

function renderAdas(step) {
  const summary = adasSummary();
  const adX = value("adShift") * 2;
  const srasX = value("srasShift") * 2;
  const potentialX = 70 + value("potential") / 140 * 520;
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg" aria-label="AD-AS chart">
        <line x1="70" y1="330" x2="620" y2="330" class="axis"></line>
        <line x1="70" y1="45" x2="70" y2="330" class="axis"></line>
        <text x="350" y="368" class="chart-label" text-anchor="middle">Real GDP</text>
        <text x="24" y="190" class="chart-label" text-anchor="middle" transform="rotate(-90 24 190)">Price Level</text>
        <line x1="${potentialX}" y1="55" x2="${potentialX}" y2="330" class="lras-line"></line>
        <text x="${potentialX + 12}" y="70" class="chart-label">LRAS</text>
        <path d="M ${520 + adX} 70 C ${470 + adX} 140, ${350 + adX} 245, ${165 + adX} 320" class="model-line"></path>
        <text x="${530 + adX}" y="78" class="chart-label">AD</text>
        <path d="M ${150 + srasX} 315 C ${260 + srasX} 245, ${410 + srasX} 145, ${560 + srasX} 72" class="model-line alt"></path>
        <text x="${565 + srasX}" y="76" class="chart-label">SRAS</text>
        <circle cx="${70 + summary.metrics[0][1] / 140 * 520}" cy="${330 - summary.metrics[1][1] / 150 * 260}" r="9" class="equilibrium-dot"></circle>
      </svg>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function fiscalSummary() {
  const mpc = value("mpc");
  const spendingMultiplier = 1 / Math.max(1 - mpc, 0.05);
  const taxMultiplier = -mpc / Math.max(1 - mpc, 0.05);
  const adChange = value("gChange") * spendingMultiplier + value("taxChange") * taxMultiplier;
  return {
    total: adChange > 0 ? "Expansionary" : adChange < 0 ? "Contractionary" : "Neutral",
    metrics: [["Spending Multiplier", spendingMultiplier], ["Tax Multiplier", taxMultiplier], ["Estimated AD Change", adChange]],
    feedback: adChange > 0 ? "财政冲击让 AD 右移，短期实际 GDP 和价格水平上升。" : adChange < 0 ? "财政冲击让 AD 左移，短期实际 GDP 和价格水平下降。" : "财政冲击大致相互抵消。"
  };
}

function renderFiscal(step) {
  const summary = fiscalSummary();
  const width = clamp(Math.abs(summary.metrics[2][1]), 5, 120);
  if (step.id === "multiplier-size") {
    const spending = summary.metrics[0][1];
    const tax = summary.metrics[1][1];
    const adChange = summary.metrics[2][1];
    return `
      <section class="panel visual-panel">
        <div class="panel-heading">
          <h2>${step.title}</h2>
          <p>${step.description}</p>
        </div>
        <div class="formula-display">${step.formula}</div>
        <div class="multiplier-compare">
          <article>
            <span>Spending Multiplier</span>
            <strong>${formatNumber(spending)}</strong>
            <p>政府支出直接进入 AD，乘数为正。</p>
          </article>
          <article>
            <span>Tax Multiplier</span>
            <strong>${formatNumber(tax)}</strong>
            <p>税收先影响可支配收入，乘数为负且绝对值较小。</p>
          </article>
          <article>
            <span>Estimated AD Change</span>
            <strong>${formatNumber(adChange)}</strong>
            <p>${adChange >= 0 ? "净效果推动 AD 右移。" : "净效果推动 AD 左移。"}</p>
          </article>
        </div>
        ${renderMetrics(summary.metrics)}
      </section>
    `;
  }
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="policy-flow">
        <span>Fiscal Shock</span>
        <strong>${summary.total}</strong>
        <div class="flow-track"><div class="flow-fill ${summary.metrics[2][1] < 0 ? "is-left" : ""}" style="width:${width}%"></div></div>
        <span>AD ${summary.metrics[2][1] >= 0 ? "shifts right" : "shifts left"}</span>
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function marketSummary(step) {
  const supply = value("supplyShift");
  const demand = value("demandShift");
  const quantity = 100 + supply + demand;
  const price = 100 + demand - supply;
  const label = {
    reserve: "Reserve Rate",
    money: "Nominal Interest Rate",
    loanable: "Real Interest Rate",
    forex: "Exchange Rate"
  }[step.marketType] ?? "Rate";
  return {
    total: price > 100 ? `${label} rises` : price < 100 ? `${label} falls` : `${label} stable`,
    metrics: [["Equilibrium Quantity", quantity], [label, price], ["Supply Shift", supply], ["Demand Shift", demand]],
    feedback: demand > supply ? `${label} 上升：需求右移或供给左移的力量更强。` : supply > demand ? `${label} 下降：供给右移或需求左移的力量更强。` : "供给和需求变化大致抵消，均衡价格变化较小。"
  };
}

function renderMarket(step) {
  const summary = marketSummary(step);
  const supplyShift = value("supplyShift") * 2.4;
  const demandShift = value("demandShift") * 2.4;
  const yLabel = step.marketType === "forex" ? "Exchange Rate" : step.marketType === "loanable" ? "Real Interest Rate" : step.marketType === "reserve" ? "Reserve Rate" : "Nominal Interest Rate";
  const xLabel = step.marketType === "forex" ? "Quantity of Currency" : step.marketType === "loanable" ? "Quantity of Loanable Funds" : step.marketType === "reserve" ? "Quantity of Reserves" : "Quantity of Money";
  const eqX = 330 + (value("supplyShift") + value("demandShift")) * 1.2;
  const eqY = 205 - (value("demandShift") - value("supplyShift")) * 1.2;
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg" aria-label="${step.title} chart">
        <line x1="70" y1="330" x2="620" y2="330" class="axis"></line>
        <line x1="70" y1="45" x2="70" y2="330" class="axis"></line>
        <text x="350" y="368" class="chart-label" text-anchor="middle">${xLabel}</text>
        <text x="24" y="190" class="chart-label" text-anchor="middle" transform="rotate(-90 24 190)">${yLabel}</text>
        <line x1="${175 + supplyShift}" y1="315" x2="${545 + supplyShift}" y2="80" class="model-line alt"></line>
        <line x1="${545 + demandShift}" y1="315" x2="${175 + demandShift}" y2="80" class="model-line"></line>
        <circle cx="${eqX}" cy="${eqY}" r="9" class="equilibrium-dot"></circle>
        <text x="${555 + supplyShift}" y="88" class="chart-label">S</text>
        <text x="${160 + demandShift}" y="88" class="chart-label">D</text>
      </svg>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function flowSummary(step) {
  switch (step.flowType) {
    case "bank": {
      const deposit = value("deposit");
      const required = deposit * value("reserveRatio");
      const excess = deposit - required;
      return {
        total: `Loans up to ${formatNumber(excess)}`,
        metrics: [["Deposits", deposit], ["Required Reserves", required], ["Excess Reserves", excess]],
        feedback: `银行必须保留 ${formatNumber(required)} 作为准备金，最多可以新增贷款 ${formatNumber(excess)}。`
      };
    }
    case "multiplier": {
      const multiplier = 1 / Math.max(value("reserveRatio"), 0.01);
      const maxMoney = value("deposit") * multiplier;
      return {
        total: `Multiplier ${formatNumber(multiplier)}`,
        metrics: [["Initial Deposit", value("deposit")], ["Money Multiplier", multiplier], ["Maximum Money Supply", maxMoney]],
        feedback: `准备金率越低，货币乘数越大。当前理论最大货币供给为 ${formatNumber(maxMoney)}。`
      };
    }
    case "bop": {
      const currentAccount = value("exports") - value("imports");
      const financialAccount = -currentAccount;
      const recordedCapitalInflow = value("capitalInflow");
      const statisticalDiscrepancy = financialAccount - recordedCapitalInflow;
      const gap = currentAccount + financialAccount;
      return {
        total: "Balanced",
        metrics: [["Current Account", currentAccount], ["Financial Account", financialAccount], ["Statistical Adjustment", statisticalDiscrepancy], ["BOP Balance", gap]],
        feedback: `经常账户为 ${formatNumber(currentAccount)}，金融账户自动作为抵消项为 ${formatNumber(financialAccount)}，所以 BOP Balance 保持为 0。调整项显示录入资本流入和理论平衡值的差。`
      };
    }
    case "capital": {
      const spread = value("domesticRate") - value("foreignRate");
      const flow = spread * 20;
      return {
        total: flow > 0 ? "Capital Inflow" : flow < 0 ? "Capital Outflow" : "Neutral Flow",
        metrics: [["Rate Spread", spread], ["Estimated Capital Flow", flow], ["Currency Pressure", flow]],
        feedback: spread > 0 ? "国内利率更高，资本流入压力上升，本币需求增加。" : spread < 0 ? "国外利率更高，资本外流压力上升，本币供给增加。" : "国内外利率接近，资本流动压力较小。"
      };
    }
    default:
      return { total: "Flow", metrics: [], feedback: "" };
  }
}

function renderFlow(step) {
  const summary = flowSummary(step);
  const maxValue = Math.max(...summary.metrics.map((entry) => Math.abs(entry[1])), 1);
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <div class="formula-display">${step.formula}</div>
      <div class="flow-diagram" aria-label="${step.title} flow diagram">
        ${summary.metrics.map(([label, amount], index) => {
          const width = Math.max(12, Math.abs(amount) / maxValue * 100);
          return `
            <div class="flow-node">
              <span>${label}</span>
              <div class="flow-node-bar"><div style="width:${width}%"></div></div>
              <strong>${formatNumber(amount)}</strong>
            </div>
            ${index < summary.metrics.length - 1 ? `<div class="flow-arrow">→</div>` : ""}
          `;
        }).join("")}
      </div>
      ${renderMetrics(summary.metrics)}
    </section>
  `;
}

function phillipsSummary() {
  const natural = value("naturalRate");
  const inflation = value("expectedInflation") + value("demandPressure") / 10;
  const unemployment = natural - value("demandPressure") / 12;
  return {
    total: value("demandPressure") > 0 ? "Lower unemployment, higher inflation" : value("demandPressure") < 0 ? "Higher unemployment, lower inflation" : "At natural rate",
    metrics: [["Unemployment", unemployment], ["Inflation", inflation], ["Natural Rate", natural]],
    feedback: "短期需求压力会沿着 SRPC 移动；预期通胀变化会移动整条 SRPC。长期失业率回到自然失业率。"
  };
}

function renderPhillips(step) {
  const summary = phillipsSummary();
  const naturalX = 70 + value("naturalRate") / 10 * 520;
  const pointX = 70 + summary.metrics[0][1] / 10 * 520;
  const pointY = 330 - summary.metrics[1][1] / 14 * 260;
  const expectedY = value("expectedInflation") * 11;
  return `
    <section class="panel visual-panel">
      <div class="panel-heading">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
      </div>
      <svg viewBox="0 0 680 390" class="chart-svg" aria-label="Phillips curve">
        <line x1="70" y1="330" x2="620" y2="330" class="axis"></line>
        <line x1="70" y1="45" x2="70" y2="330" class="axis"></line>
        <text x="350" y="368" class="chart-label" text-anchor="middle">Unemployment Rate</text>
        <text x="24" y="190" class="chart-label" text-anchor="middle" transform="rotate(-90 24 190)">Inflation Rate</text>
        <line x1="${naturalX}" y1="55" x2="${naturalX}" y2="330" class="lras-line"></line>
        <text x="${naturalX + 12}" y="70" class="chart-label">LRPC</text>
        <path d="M 120 ${90 - expectedY} C 230 ${120 - expectedY}, 420 ${230 - expectedY}, 590 ${310 - expectedY}" class="model-line"></path>
        <text x="125" y="${82 - expectedY}" class="chart-label">SRPC</text>
        <circle cx="${pointX}" cy="${pointY}" r="9" class="equilibrium-dot"></circle>
      </svg>
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
        <line x1="78" y1="250" x2="615" y2="150" class="reference-line"></line>
        <text x="465" y="143" class="chart-label">Long-run growth trend</text>
        <path d="M 70 270 L 180 170 L 270 90 L 390 210 L 500 300 L 610 190" class="cycle-line"></path>
        <text x="275" y="315" class="chart-label">Short-run fluctuations</text>
        ${Object.entries(stagePoints).map(([key, point]) => {
          const data = lab.stages.find((item) => item.key === key);
          return `
            <g class="cycle-stage ${state.selectedStage === key ? "is-active" : ""}" data-stage="${key}">
              <circle cx="${point[0]}" cy="${point[1]}" r="13"></circle>
              <text x="${point[0]}" y="${point[1] - 24}" text-anchor="middle">${data?.label ?? key}</text>
            </g>
          `;
        }).join("")}
      </svg>
      <div class="stage-summary">
        <strong>${stage?.label} / ${stage?.subtitle}</strong>
        <p>${stage?.explanation}</p>
        <button class="inline-toggle ${state.showPolicyResponse ? "is-active" : ""}" data-toggle-policy type="button">
          ${state.showPolicyResponse ? "Hide policy response" : "Show policy response"}
        </button>
        ${state.showPolicyResponse ? `<p><b>Policy response:</b> ${stage?.policy}</p>` : ""}
      </div>
    </section>
  `;
}

function renderMetrics(entries) {
  return `<div class="metrics-grid">${entries.map(([label, amount]) => metric(label, typeof amount === "number" ? formatNumber(amount) : amount)).join("")}</div>`;
}

function feedbackForStep(lab, step) {
  if (step.componentType === "formula") {
    const result = calculateFormula(step);
    return { value: result.status ?? `${formatNumber(result.main)}${result.suffix ?? ""}`, text: result.feedback };
  }
  if (step.componentType === "cycle") {
    const stage = (lab.stages ?? []).find((item) => item.key === state.selectedStage) ?? lab.stages?.[0];
    return { value: stage?.label ?? "", text: state.showPolicyResponse ? `${stage?.explanation ?? ""} Policy response: ${stage?.policy ?? ""}` : stage?.explanation ?? "" };
  }
  if (step.componentType === "classification") return classificationSummary(step);
  if (step.componentType === "allocation") return allocationSummary(step);
  if (step.componentType === "ppc") return ppcSummary(step);
  if (step.componentType === "comparative") return comparativeSummary();
  if (step.componentType === "adas") return adasSummary();
  if (step.componentType === "fiscal") return fiscalSummary();
  if (step.componentType === "market" || step.componentType === "forex") return marketSummary(step);
  if (step.componentType === "flow") return flowSummary(step);
  if (step.componentType === "phillips") return phillipsSummary();
  const summary = compositionSummary(step);
  return { value: formatNumber(summary.total), text: summary.feedback };
}

function renderFeedbackCard(lab, step) {
  const feedback = feedbackForStep(lab, step);
  return `
    <section class="feedback-card" data-feedback-card>
      <div>
        <span>Current Result</span>
        <strong>${feedback.value ?? feedback.total}</strong>
      </div>
      <p>${feedback.text ?? feedback.feedback}</p>
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
  if (step.componentType === "classification") return renderClassification(step);
  if (step.componentType === "allocation") return renderAllocation(step);
  if (step.componentType === "ppc") return renderPpcChart(step);
  if (step.componentType === "comparative") return renderComparative(step);
  if (step.componentType === "adas") return renderAdas(step);
  if (step.componentType === "fiscal") return renderFiscal(step);
  if (step.componentType === "market" || step.componentType === "forex") return renderMarket(step);
  if (step.componentType === "flow") return renderFlow(step);
  if (step.componentType === "phillips") return renderPhillips(step);
  return renderFormulaInteractive(step);
}

function renderMainColumn(lab, step) {
  return `
    ${renderInteractive(lab, step)}
    ${renderFeedbackCard(lab, step)}
  `;
}

function renderMainColumnOnly() {
  const mainColumn = document.querySelector("[data-main-column]");
  if (mainColumn) {
    mainColumn.innerHTML = renderMainColumn(currentLab(), currentStep());
    bindStageEvents();
    bindToggleEvents();
    bindClassificationEvents();
    bindDraggableSvgPoints();
    drawMatchingLines();
  }
}

function renderLab() {
  const lab = currentLab();
  const step = currentStep();
  return `
    <div class="page-shell">
      <header class="hero panel lab-hero ${lab.accent ?? currentUnit().accent}">
        <div>
          <button class="ghost-button" data-back-unit>← ${currentUnit().label} Labs</button>
          <span class="badge">${lab.unit}</span>
          <span class="badge badge-soft">${lab.steps.length} Steps</span>
        </div>
        <h1>${lab.title}</h1>
        <p>${lab.subtitle} · ${lab.description}</p>
      </header>
      ${renderStepNav(lab, step)}
      <main class="workspace">
        ${renderControls(lab, step)}
        <div class="main-column" data-main-column>
          ${renderMainColumn(lab, step)}
        </div>
        ${renderExplanation(step)}
      </main>
    </div>
  `;
}

function renderApp() {
  const app = document.querySelector("#app");
  if (state.view === "unit") app.innerHTML = renderUnit();
  else if (state.view === "lab") app.innerHTML = renderLab();
  else app.innerHTML = renderHome();
  bindEvents();
}

function updateControlValue(controlKey) {
  const valueLabel = document.querySelector(`[data-control-value="${controlKey}"]`);
  if (valueLabel) valueLabel.textContent = formatNumber(value(controlKey));
}

function updateControlsFromState() {
  for (const input of document.querySelectorAll("[data-control]")) {
    input.value = state.values[input.dataset.control] ?? input.value;
    updateControlValue(input.dataset.control);
  }
}

function renderFeedbackOnly() {
  const feedbackCard = document.querySelector("[data-feedback-card]");
  if (feedbackCard) feedbackCard.outerHTML = renderFeedbackCard(currentLab(), currentStep());
}

function updatePpcDragDom(svg) {
  const step = currentStep();
  const capacity = value("capacity") || Number(svg.querySelector("[data-drag-point]")?.dataset.maxX ?? 100);
  const scaleMax = Number(svg.querySelector("[data-drag-point]")?.dataset.scaleMax ?? capacity);
  const x = clamp(value("goodX"), 0, capacity);
  const y = clamp(value("goodY"), 0, capacity);
  const toX = (dataX) => 70 + dataX / scaleMax * 520;
  const toY = (dataY) => 330 - dataY / scaleMax * 260;
  const cx = toX(x);
  const cy = toY(y);
  const frontier = ppcFrontier(x, capacity);
  const status = y > frontier + 2 ? "Unattainable" : y < frontier - 2 ? "Inefficient" : "Efficient";

  svg.querySelectorAll(".drag-hit, .drag-dot").forEach((circle) => {
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
  });

  const label = svg.querySelector(".draggable-point text");
  if (label) {
    label.setAttribute("x", cx + 16);
    label.setAttribute("y", cy - 14);
    label.textContent = `A: ${status}`;
  }

  const metrics = svg.closest(".visual-panel")?.querySelector(".metrics-grid");
  if (metrics) metrics.outerHTML = renderMetrics(ppcSummary(step).metrics);
  renderFeedbackOnly();
}

function bindStageEvents() {
  for (const button of document.querySelectorAll("[data-stage]")) {
    button.addEventListener("click", () => {
      state.selectedStage = button.dataset.stage;
      renderMainColumnOnly();
    });
  }
}

function bindToggleEvents() {
  document.querySelector("[data-toggle-formula]")?.addEventListener("click", () => {
    state.showFormulaDetails = !state.showFormulaDetails;
    renderMainColumnOnly();
  });

  document.querySelector("[data-toggle-policy]")?.addEventListener("click", () => {
    state.showPolicyResponse = !state.showPolicyResponse;
    renderMainColumnOnly();
  });
}

function bindHomeAccordionEvents() {
  for (const details of document.querySelectorAll("[data-unit-accordion]")) {
    details.addEventListener("toggle", () => {
      if (details.open) state.openUnits.add(details.dataset.unitAccordion);
      else state.openUnits.delete(details.dataset.unitAccordion);
    });
  }
}

function assignMatch(itemId, categoryId) {
  const step = currentStep();
  const matches = matchesForStep(step);
  matches[itemId] = categoryId;
  state.selectedMatchItem = null;
  applyClassificationSideEffects(step, itemId, categoryId);
  renderMainColumnOnly();
}

function applyClassificationSideEffects(step, itemId, categoryId) {
  if (step.id !== "forex-determinants") return;

  const shock = forexShockShift(itemId);
  if (!shock) return;

  const correct = (step.items ?? []).find((item) => item.id === itemId)?.correct;
  if (correct !== categoryId) return;

  state.values.supplyShift = shock.supplyShift;
  state.values.demandShift = shock.demandShift;
}

function drawMatchingLines() {
  const board = document.querySelector("[data-matching-board]");
  const svg = document.querySelector("[data-matching-lines]");
  if (!board || !svg) return;

  const step = currentStep();
  if (step.componentType !== "classification") return;

  const boardRect = board.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.innerHTML = "";

  const matches = matchesForStep(step);
  const categories = Object.fromEntries((step.categories ?? []).map((category) => [category.id, category]));
  for (const [itemId, categoryId] of Object.entries(matches)) {
    const item = board.querySelector(`[data-match-item="${itemId}"]`);
    const target = board.querySelector(`[data-match-category="${categoryId}"]`);
    if (!item || !target) continue;

    const itemRect = item.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const x1 = itemRect.right - boardRect.left;
    const y1 = itemRect.top + itemRect.height / 2 - boardRect.top;
    const x2 = targetRect.left - boardRect.left;
    const y2 = targetRect.top + targetRect.height / 2 - boardRect.top;
    const correct = item.dataset.correctCategory === categoryId;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const mid = (x1 + x2) / 2;
    line.setAttribute("d", `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`);
    line.setAttribute("class", `matching-line ${correct ? "is-correct" : "is-wrong"}`);
    if (correct && categories[categoryId]?.color) line.setAttribute("style", `--match-color:${categories[categoryId].color}`);
    svg.appendChild(line);
  }
}

function bindClassificationEvents() {
  for (const item of document.querySelectorAll("[data-match-item]")) {
    item.addEventListener("click", () => {
      state.selectedMatchItem = state.selectedMatchItem === item.dataset.matchItem ? null : item.dataset.matchItem;
      renderMainColumnOnly();
    });
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.dataset.matchItem);
      event.dataTransfer.effectAllowed = "move";
    });
  }

  for (const target of document.querySelectorAll("[data-match-category]")) {
    target.addEventListener("click", () => {
      if (state.selectedMatchItem) assignMatch(state.selectedMatchItem, target.dataset.matchCategory);
    });
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      target.classList.add("is-hovered");
    });
    target.addEventListener("dragleave", () => {
      target.classList.remove("is-hovered");
    });
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      target.classList.remove("is-hovered");
      const itemId = event.dataTransfer.getData("text/plain");
      if (itemId) assignMatch(itemId, target.dataset.matchCategory);
    });
  }
}

function bindDraggableSvgPoints() {
  for (const point of document.querySelectorAll("[data-drag-point]")) {
    point.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      point.classList.add("is-dragging");

      const svg = point.closest("svg");
      const xKey = point.dataset.xKey;
      const yKey = point.dataset.yKey;
      const minX = Number(point.dataset.minX ?? 0);
      const maxX = Number(point.dataset.maxX ?? 100);
      const minY = Number(point.dataset.minY ?? 0);
      const maxY = Number(point.dataset.maxY ?? 100);
      const scaleMax = Number(point.dataset.scaleMax ?? maxX);

      const move = (moveEvent) => {
        const rect = svg.getBoundingClientRect();
        const viewBox = svg.viewBox.baseVal;
        const svgX = (moveEvent.clientX - rect.left) / rect.width * viewBox.width;
        const svgY = (moveEvent.clientY - rect.top) / rect.height * viewBox.height;
        const dataX = clamp((svgX - 70) / 520 * scaleMax, minX, maxX);
        const dataY = clamp((330 - svgY) / 260 * scaleMax, minY, maxY);

        state.values[xKey] = dataX;
        state.values[yKey] = dataY;
        updateControlsFromState();

        if (state.dragFrame) cancelAnimationFrame(state.dragFrame);
        state.dragFrame = requestAnimationFrame(() => {
          if (currentStep().componentType === "ppc") updatePpcDragDom(svg);
          else renderMainColumnOnly();
          state.dragFrame = null;
        });
      };

      const end = () => {
        point.classList.remove("is-dragging");
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", end);
        document.removeEventListener("pointercancel", end);
        renderMainColumnOnly();
      };

      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", end);
      document.addEventListener("pointercancel", end);
    });
  }
}

function bindEvents() {
  bindHomeAccordionEvents();
  for (const button of document.querySelectorAll("[data-home]")) {
    button.addEventListener("click", () => {
      state.view = "home";
      renderApp();
    });
  }
  for (const button of document.querySelectorAll("[data-open-unit]")) {
    button.addEventListener("click", () => enterUnit(button.dataset.openUnit));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterUnit(button.dataset.openUnit);
      }
    });
  }
  for (const button of document.querySelectorAll("[data-open-lab]")) {
    button.addEventListener("click", () => enterLab(button.dataset.unit, button.dataset.openLab));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterLab(button.dataset.unit, button.dataset.openLab);
      }
    });
  }
  for (const button of document.querySelectorAll("[data-back-unit]")) {
    button.addEventListener("click", () => {
      state.view = "unit";
      renderApp();
    });
  }
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
      updateControlValue(input.dataset.control);
      renderMainColumnOnly();
    });
  }
  bindStageEvents();
  bindToggleEvents();
  bindClassificationEvents();
  bindDraggableSvgPoints();
  drawMatchingLines();
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    resetValues(currentStep());
    renderApp();
  });
}

resetValues(currentStep());
renderApp();
window.addEventListener("resize", () => {
  window.requestAnimationFrame(drawMatchingLines);
});
