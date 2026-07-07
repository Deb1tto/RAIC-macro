# AP 宏观经济学知识架构与交互图表规划

本文档用于规划 RAIC AP Macroeconomics 课程原型的完整知识架构。交互形态对齐当前 `chapter1` / Unit 1 原型：左侧控制、中央手写 SVG 图表、底部反馈卡、概念解释面板、配置驱动 lesson data。

## 版本依据

- 以 College Board 当前 AP Macroeconomics Course and Exam Description 为基准。官方 AP Central 当前公开 CED 标注为 `Effective Fall 2022`。
- 用户提到“第四代”最新更新；本规划按“最新版 AP Macro 课程框架”处理，但建议后续在内容发布前再次核对 College Board 是否发布了新 CED、考试权重或题型更新。
- 当前官方课程仍为 6 个 Unit，考试结构为 MCQ + FRQ，课程技能强调定义经济原理、解释经济结果、确定结果、建模经济情境。

## 总体课程地图

| Unit | 官方主题 | 建议中文名称 | 考试权重 | 核心能力 | 交互主图 |
| --- | --- | --- | --- | --- | --- |
| Unit 1 | Basic Economic Concepts | 基础经济概念 | 5%-10% | 稀缺性、机会成本、PPC、比较优势 | PPC / 贸易收益图 |
| Unit 2 | Economic Indicators and the Business Cycle | 宏观指标与商业周期 | 12%-17% | GDP、通胀、失业、商业周期 | GDP 组成、CPI 篮子、周期曲线 |
| Unit 3 | National Income and Price Determination | 国民收入与价格决定 | 17%-27% | AD-AS、乘数、均衡产出、财政政策 | AD-AS 动态平衡图 |
| Unit 4 | Financial Sector | 金融部门 | 18%-23% | 货币、银行、准备金市场、货币市场、可贷资金 | Reserve Market / Money Market / Loanable Funds |
| Unit 5 | Long-Run Consequences of Stabilization Policies | 稳定政策的长期影响 | 20%-30% | Phillips Curve、经济增长、赤字、债务、挤出效应 | Phillips Curve + LRAS 增长图 |
| Unit 6 | Open Economy: International Trade and Finance | 开放经济 | 10%-13% | 汇率、外汇市场、资本流动、净出口 | Foreign Exchange Market |

## 课程信息架构

### Home / Course Map

目标：让学生看到 AP Macro 全图，而不是只进入单个章节。

- 顶部：AP Macroeconomics / 宏观经济学
- 主体：6 个 Unit 卡片，每张卡显示权重、核心图表、关键公式、推荐学习顺序
- 侧边：Exam Skills 面板
- 底部：跨单元变量关系卡片
  - `Output`：GDP、Real GDP、Potential GDP
  - `Price Level`：CPI、GDP Deflator、Inflation
  - `Labor`：Unemployment、LFPR
  - `Policy`：Fiscal Policy、Monetary Policy
  - `External`：Exchange Rate、Net Exports

### Unit Page

沿用现有原型结构：

- 左侧 controls：变量滑杆、政策按钮、冲击选择
- 中央 visual：手写 SVG，不引入图表库
- 右侧或底部 explanation：概念解释、公式、AP 常见误区
- 底部 feedback cards：数值变化、方向判断、考试语言
- step tabs：从概念识别到模型推演

### Lesson Data Model

建议在现有 `labs -> steps -> componentType` 基础上扩展，不重写架构。

```ts
type MacroLessonStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  componentType:
    | "composition"
    | "formula"
    | "cycle"
    | "ppc"
    | "adas"
    | "market"
    | "phillips"
    | "forex"
    | "flow";
  formula?: string;
  explanation: string;
  controls?: ControlConfig[];
  shocks?: ShockConfig[];
  feedbackRules?: FeedbackRule[];
};
```

## Unit 1：Basic Economic Concepts / 基础经济概念

### 知识架构

- Scarcity：稀缺性要求选择
- Opportunity Cost：机会成本是放弃的次优选择
- Production Possibilities Curve：PPC 展示资源约束与效率
- Comparative Advantage：比较优势由较低机会成本决定
- Absolute Advantage：绝对优势由更高产量或更低投入决定
- Gains from Trade：专业化和贸易能让双方超过自给自足消费组合
- Economic Systems：市场、命令、混合经济

### 交互 Lab 规划

**Lab 1：Scarcity and Choice**

- 图表：资源分配条形图
- 控制：时间 / 劳动 / 资本在两种产品间分配
- 反馈：产出组合、放弃的产量、是否有效利用资源

**Lab 2：PPC and Opportunity Cost**

- 图表：PPC 曲线，点 A/B/C/D 可拖动或点击
- 控制：选择产品 X 或产品 Y 的生产量
- 反馈：
  - 曲线上：productive efficiency
  - 曲线内：inefficient
  - 曲线外：currently unattainable
  - 曲线外移：economic growth

**Lab 3：Comparative Advantage**

- 图表：两国 PPC 对比
- 控制：国家 A / 国家 B 的最大产出
- 反馈：机会成本表、谁有比较优势、贸易后收益

**Lab 4：Economic Systems**

- 图表：市场机制流程图
- 控制：政府干预程度、价格信号强度
- 反馈：资源配置、效率、公平性权衡

## Unit 2：Economic Indicators and the Business Cycle / 宏观指标与商业周期

当前项目已有 Unit 1 MVP，但内容实际对应官方 Unit 2。建议后续重命名为 `Unit 2`，或保留当前 chapter1 作为“宏观指标入门章”。

### 知识架构

- GDP：总产出，按支出法 `GDP = C + I + G + NX`
- Nominal GDP vs Real GDP：名义值受价格和数量影响，实际值剔除价格影响
- GDP Deflator：整体价格水平指标
- CPI：固定消费篮子价格指数
- Inflation / Deflation / Disinflation
- Unemployment：就业、失业、非劳动力
- Labor Force Participation Rate
- Business Cycle：expansion、peak、recession、trough

### 交互 Lab 规划

**Lab 1：Measuring Output**

- 沿用现有 GDP composition SVG
- 增补：用颜色区分 C/I/G/NX 对总 GDP 的正负贡献
- 底部卡：GDP 总量、最大贡献项、NX 是否拖累 GDP

**Lab 2：Nominal vs Real GDP**

- 图表：价格与数量的双轴变化
- 控制：Current Price、Base Price、Quantity
- 反馈：名义 GDP 是否高估真实产出增长

**Lab 3：CPI and Inflation**

- 图表：固定 market basket
- 控制：各商品价格
- 反馈：CPI、inflation rate、deflation/disinflation 判断

**Lab 4：Labor Market Indicators**

- 图表：人口分层 SVG
- 控制：employed、unemployed、not in labor force
- 反馈：unemployment rate、LFPR、discouraged workers 对指标的影响

**Lab 5：Business Cycle**

- 图表：周期曲线 + 潜在 GDP 趋势线
- 控制：点击阶段
- 反馈：Real GDP、unemployment、inflation、政策倾向

## Unit 3：National Income and Price Determination / 国民收入与价格决定

### 知识架构

- Aggregate Demand：`AD = C + I + G + NX`
- Short-Run Aggregate Supply：SRAS
- Long-Run Aggregate Supply：LRAS / potential output
- Macroeconomic Equilibrium：AD、SRAS、LRAS 交点
- Demand Shock and Supply Shock
- Output Gap：recessionary gap、inflationary gap
- Spending Multiplier：`1 / (1 - MPC)`
- Tax Multiplier：`-MPC / (1 - MPC)`
- Fiscal Policy：government spending、taxes、transfers
- Automatic Stabilizers

### 交互 Lab 规划

**Lab 1：AD Components**

- 图表：AD 组成与曲线位移联动
- 控制：C、I、G、NX
- 反馈：AD 左移/右移，Real GDP 与 price level 的方向

**Lab 2：AD-AS Equilibrium**

- 图表：AD、SRAS、LRAS 三线模型
- 控制：AD shock、SRAS shock、potential GDP
- 反馈：equilibrium output、price level、output gap

**Lab 3：Recessionary vs Inflationary Gap**

- 图表：Y 与 Yf 的距离高亮
- 控制：冲击大小
- 反馈：经济状态、失业与通胀压力、AP FRQ 句式

**Lab 4：Fiscal Policy Simulator**

- 图表：AD-AS + 政策按钮
- 控制：increase G、decrease G、tax cut、tax increase
- 反馈：扩张/紧缩财政政策、预算赤字方向、乘数效应

**Lab 5：Multiplier Lab**

- 图表：初始支出冲击逐轮扩散流程
- 控制：MPC、initial spending change、tax change
- 反馈：spending multiplier、tax multiplier、总 AD 变化

## Unit 4：Financial Sector / 金融部门

### 知识架构

- Money：medium of exchange、unit of account、store of value
- Money Supply：M1、M2
- Banking System：reserves、required reserves、excess reserves
- Money Multiplier：`1 / reserve requirement`
- Reserve Market：reserve demand、reserve supply、federal funds rate / reserve rate
- Money Market：money demand、money supply、nominal interest rate
- Monetary Policy：open market operations、discount rate、reserve requirement、administered rates
- Loanable Funds Market：saving supply、investment demand、real interest rate

### 交互 Lab 规划

**Lab 1：Bank Balance Sheet**

- 图表：T-account
- 控制：deposit、reserve requirement、loan amount
- 反馈：required reserves、excess reserves、maximum new loans

**Lab 2：Money Multiplier**

- 图表：银行放贷链条
- 控制：reserve ratio、initial deposit
- 反馈：maximum money creation、为什么实际创造可能更小

**Lab 3：Reserve Market**

- 图表：Reserve Market，准备金供给与需求
- 控制：reserve supply、reserve demand shock、administered rate corridor
- 反馈：federal funds rate / reserve rate 变化，央行操作方向

**Lab 4：Money Market**

- 图表：垂直 MS + 向下倾斜 MD
- 控制：money supply、money demand shock
- 反馈：nominal interest rate 上升/下降，货币政策方向

**Lab 5：Monetary Policy**

- 图表：Money Market + AD-AS 联动
- 控制：buy bonds、sell bonds、raise/lower administered rates
- 反馈：MS、interest rate、investment、AD、Real GDP、price level

**Lab 6：Loanable Funds**

- 图表：SLF 与 DLF
- 控制：government borrowing、private saving、investment demand
- 反馈：real interest rate、quantity of loanable funds、crowding out

## Unit 5：Long-Run Consequences of Stabilization Policies / 稳定政策的长期影响

### 知识架构

- Short-Run Phillips Curve：inflation 与 unemployment 的短期权衡
- Long-Run Phillips Curve：natural rate of unemployment
- Expected Inflation：预期改变会移动 SRPC
- Economic Growth：capital、technology、human capital、natural resources
- Public Policy and Growth
- Government Deficits and National Debt
- Crowding Out
- Money Growth and Inflation

### 交互 Lab 规划

**Lab 1：Phillips Curve**

- 图表：SRPC + LRPC
- 控制：AD shock、expected inflation
- 反馈：短期失业/通胀权衡，长期回到 natural rate

**Lab 2：Expectations Adjustment**

- 图表：SRPC 上移/下移动画
- 控制：actual inflation、expected inflation
- 反馈：预期通胀如何改变短期 Phillips Curve

**Lab 3：Economic Growth**

- 图表：PPC 外移 + LRAS 右移
- 控制：capital、technology、labor productivity
- 反馈：potential output、long-run growth、生活水平

**Lab 4：Deficits, Debt, and Crowding Out**

- 图表：Loanable Funds + 政府借款
- 控制：government deficit、private saving
- 反馈：real interest rate、private investment、long-run growth

**Lab 5：Money Growth and Inflation**

- 图表：Money Market + AD-AS 长期调整
- 控制：money growth rate
- 反馈：长期价格水平变化，real output 长期不由货币供给决定

## Unit 6：Open Economy: International Trade and Finance / 开放经济

### 知识架构

- Balance of Payments：current account、financial account
- Trade Balance：exports、imports、net exports
- Exchange Rates：appreciation、depreciation
- Foreign Exchange Market：currency demand、currency supply
- Capital Flows：interest rate differentials
- Policy and Exchange Rates
- Net Exports and AD

### 交互 Lab 规划

**Lab 1：Balance of Payments**

- 图表：Current Account 与 Financial Account 流向图
- 控制：exports、imports、foreign asset purchases
- 反馈：账户盈余/赤字，两个账户的镜像关系

**Lab 2：Foreign Exchange Market**

- 图表：美元外汇市场，S 与 D 交点决定 exchange rate
- 控制：foreign demand for US goods、US demand for foreign assets、interest rate
- 反馈：currency appreciation/depreciation，exports/imports 影响

**Lab 3：Capital Flows**

- 图表：Loanable Funds / Forex 联动
- 控制：domestic real interest rate、foreign real interest rate
- 反馈：capital inflow/outflow，汇率变化

**Lab 4：Policy in an Open Economy**

- 图表：AD-AS + Forex 联动
- 控制：expansionary fiscal、contractionary monetary、tariff shock
- 反馈：AD、interest rate、exchange rate、net exports 的方向链条

## 跨单元“核心模型库”

为了减少一次性页面，建议将图表抽象为可复用 SVG componentType。

| componentType | 适用 Unit | 图表能力 |
| --- | --- | --- |
| `composition` | Unit 2 | GDP、CPI、Labor Force 组成 |
| `formula` | Unit 2-5 | 公式计算与反馈 |
| `cycle` | Unit 2 | 商业周期阶段点击 |
| `ppc` | Unit 1、5 | PPC 点位、曲线内外、经济增长 |
| `adas` | Unit 3、4、5、6 | AD/SRAS/LRAS 位移与均衡 |
| `market` | Unit 4、6 | Reserve Market、Money Market、Loanable Funds、Forex |
| `phillips` | Unit 5 | SRPC/LRPC 与预期调整 |
| `flow` | Unit 4、6 | 银行体系、国际收支、资本流动 |

## 学习顺序建议

1. Unit 1 先建立选择、机会成本、PPC 和比较优势。
2. Unit 2 建立宏观指标语言：GDP、通胀、失业、商业周期。
3. Unit 3 用 AD-AS 解释短期波动和财政政策。
4. Unit 4 引入金融部门和货币政策。
5. Unit 5 处理长期后果：增长、Phillips Curve、债务、挤出。
6. Unit 6 把国内宏观模型放入开放经济中，连接汇率、资本流动和净出口。

## AP FRQ 对齐方式

每个 Lab 的底部 feedback cards 建议固定包含三类考试语言：

- `Identify`：识别变量或政策类型。
- `Explain`：用因果链解释变化方向。
- `Graph`：说明曲线如何移动、均衡如何改变。

示例：

```text
Expansionary monetary policy -> money supply increases -> nominal interest rate falls -> investment rises -> AD shifts right -> real GDP and price level rise in the short run.
```

## MVP 实施优先级

### Phase 1：修正课程地图

- 将当前首页从单一 Unit 1 目录扩展为 6 Unit 课程地图。
- 保留现有 Unit 2 内容，不急于重写。
- 增加每个 Unit 的权重、核心图表和学习目标。

### Phase 2：补齐最重要模型

优先实现：

1. Unit 1 PPC + Comparative Advantage
2. Unit 3 AD-AS
3. Unit 4 Money Market
4. Unit 5 Phillips Curve
5. Unit 6 Foreign Exchange Market

这些模型覆盖 AP Macro 绝大多数图形题与 FRQ 推理链。

### Phase 3：跨图联动

- Money Market -> AD-AS
- Loanable Funds -> Crowding Out
- AD-AS -> Phillips Curve
- Fiscal / Monetary Policy -> Forex -> Net Exports

### Phase 4：考试练习层

不做完整 quiz system，但可以在每个 Lab 内增加：

- `Check direction`：学生选择曲线移动方向
- `Explain in AP words`：展示标准因果链
- `Graph checklist`：提醒坐标轴、曲线标签、均衡点标注

## 内容边界

- 不加入后端、登录、数据库或完整 quiz 系统。
- 不引入 chart library；复杂图表继续用手写 SVG。
- 不把内容做成静态长文页面；每个核心知识点都应对应一个可操作变量或可点击图形。
- 不追求一次覆盖所有细节，优先覆盖 AP 常考图形和因果链。
