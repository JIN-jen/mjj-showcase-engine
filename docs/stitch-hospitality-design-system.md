# Stitch 酒店母模板设计系统提取

来源目录：

```text
stitch-imports/hospitality/TIIH_酒店母模板_V1
```

本文件仅用于设计规范提取，不代表已接入当前 Codex / Showcase Engine 系统。

## A. 设计定位

Stitch 酒店母模板的核心定位是高端酒店与度假行业的「奢华编辑式官网」。整体气质接近 Luxury Editorial + Swiss Minimalism：

- 以大幅摄影、超大标题、强留白建立高级感。
- UI 本身尽量隐形，内容、图片、排版成为主要视觉资产。
- 黑白灰为主，不依赖装饰色、渐变、阴影或卡片。
- 信息结构偏杂志化：大标题、分栏正文、编号标签、图像叙事。
- 适合酒店、度假村、Safari Lodge、精品住宿、服务式公寓等 Hospitality 模板方向。

关键词：

```text
Architectural Silence
Luxury Editorial
Swiss Minimalism
Museum-like whitespace
Black / White / Grey
Image-led storytelling
```

## B. 页面结构

### Home

文件：

```text
home_tiih_hospitality_template/code.html
```

结构：

1. Fixed Top Navigation
2. Full-screen Hero
3. Property Intro / Introduction
4. Specialized Solutions / Accommodation Grid
5. Inquiry CTA
6. Footer

特征：

- Hero 使用 `100vh` 满屏视觉。
- 首页顶部导航固定，背景为接近白色的半透明 surface。
- Hero 图片全屏铺底，叠加超大标题。
- 第二段使用 12 栏网格：左侧图片，右侧大标题和说明。
- 服务/住宿区使用不对称双图布局。
- CTA 区独立成大留白居中块。

### Mobile Home

文件：

```text
home_mobile_tiih_hospitality_template/code.html
```

结构：

1. Mobile Top Navigation
2. Mobile Hero
3. Accommodation Selection
4. Mobile Footer

特征：

- 移动端从 12 栏压缩为单列/4 栏思路。
- Hero 标题先出现，图片位于标题下方。
- 图片比例使用 `4 / 5`、`3 / 2`。
- Footer 改为纵向堆叠。

### About

文件：

```text
about_tiih_hospitality_template/code.html
```

结构：

1. Fixed Top Navigation
2. Hero Title Section
3. Brand Story
4. Core Values / Philosophy
5. Location / Coordinates
6. Footer

特征：

- About 页面重叙事。
- 大标题独占顶部，形成强烈页面进入感。
- Brand Story 使用左图右文的不对称布局。
- Principles 区域使用编号 01 / 02 / 03。
- Location 区用边框、地图图像和坐标文本构建空间感。

### Services

文件：

```text
services_tiih_hospitality_template/code.html
```

结构：

1. Fixed Top Navigation
2. Services Hero
3. Digital Presence Section
4. Systems & Operations Section
5. Brand Growth Section
6. Footer

特征：

- 每个服务区用编号标题，如 `01 — DIGITAL PRESENCE`。
- 分区顶部有细分割线。
- 图片与正文采用大幅不对称布局。
- 图片比例包括 `3 / 4`、`16 / 9`、`21 / 9`、`4 / 5`、`3 / 2`。
- 服务内容适合拆成可复用模块。

### Proposal Request

文件：

```text
proposal_request_tiih_hospitality_template/code.html
```

结构：

1. Fixed Top Navigation
2. Proposal Hero Title
3. Form Column
4. Contact Details Column
5. Supporting Image
6. Footer

特征：

- 页面上方使用超大标题 `Request a Website Proposal`。
- 表单区与联系信息区使用 12 栏布局。
- 表单为 baseline 风格：只有底线，无卡片。
- 输入 label 采用小号 uppercase。
- 提交按钮为文字 + 底线样式。

## C. 字体规范

Stitch 模板使用三类字体：

```text
Playfair Display
Hanken Grotesk
JetBrains Mono
```

### Display / Editorial 标题

用于 Hero、页面主标题、大型服务标题。

```text
fontFamily: Playfair Display
desktop: 120px
mobile: 56px
line-height: 110%
letter-spacing: -0.03em desktop / -0.02em mobile
font-weight: 400
```

使用场景：

- Home Hero
- About Hero
- Services Hero
- Proposal Hero
- 大型 CTA 标题

### Headline

用于中型标题、段落主张、服务名称。

```text
fontFamily: Playfair Display
desktop: 64px
mobile: 40px
line-height: 120%
letter-spacing: -0.01em
font-weight: 400
```

### Body

用于正文说明。

```text
fontFamily: Hanken Grotesk
body-lg: 20px / line-height 160%
body-md: 16px / line-height 160%
font-weight: 400
```

### Label / Navigation

用于导航、CTA、分区标签。

```text
fontFamily: Hanken Grotesk
font-size: 12px
line-height: 140%
letter-spacing: 0.1em
font-weight: 600
text-transform: uppercase
```

### Mono Metadata

用于编号、坐标、技术性信息。

```text
fontFamily: JetBrains Mono
font-size: 13px
line-height: 140%
font-weight: 400
```

## D. 留白规范

核心 spacing token：

```text
container-max: 1440px
gutter: 32px
margin-desktop: 80px
margin-tablet: 40px
margin-mobile: 24px
section-gap: 160px
```

规则：

- 大段落之间保留约 `160px` 垂直间距。
- 桌面左右边距约 `80px`。
- 移动端左右边距约 `24px`。
- 内容最大宽度控制在 `1440px`。
- 12 栏网格用于桌面，移动端收敛为 4 栏或单列。
- 留白不是空白，而是主要视觉材料。

## E. 图片规范

图片是该模板最重要的内容资产。

### 图片风格

- 高级建筑摄影感。
- 黑白或低饱和处理。
- 大量使用 `grayscale`。
- 强对比光影。
- 图像表达空间、材质、建筑线条和酒店体验。

### 图片比例

常见比例：

```text
Hero: full screen / 100vh
Editorial portrait: 3 / 4
Accommodation card: 4 / 5
Wide feature: 16 / 9
Panoramic section: 21 / 9
Mobile card: 3 / 2, 4 / 5
Proposal side image: 4 / 5
```

### 图片行为

- 使用 `object-cover`。
- 容器固定比例，图片不可挤压正文。
- Hover 常见效果是轻微 scale：`scale(1.03)` 到 `scale(1.05)`。
- Services 页面 hover 会从 grayscale 过渡到彩色。
- 当前导出使用远程 Google 图片 URL，接入时必须迁移到 `public/template-assets`。

## F. CTA 规范

CTA 有两类。

### 主 CTA

用于导航右侧、Proposal 区。

```text
黑底
白字
无圆角
label-caps
hover: opacity 下降或反色
```

例：

```text
Request Proposal
Contact
```

### 次级 CTA

用于正文段落后的动作。

```text
文字按钮
底部 1px border
label-caps
hover: opacity 下降
```

例：

```text
DISCOVER OUR SOLUTIONS
VIEW PORTFOLIO
SUBMIT INQUIRY
```

规则：

- 不使用圆角按钮。
- 不使用渐变。
- 不使用图标堆叠。
- CTA 应像编辑页脚注，而不是 SaaS 按钮组件。

## G. 表单规范

Proposal Request 页面提供了表单方向。

### 结构

- 左侧表单列。
- 右侧联系信息列。
- 右侧底部带一张 `4 / 5` 图片。
- 整体使用 12 栏网格。

### 输入样式

```text
border: none
border-bottom: 1px solid black/20
background: transparent
label: label-caps
input text: body-md
no rounded corners
no card container
```

### Label 行为

导出中存在 floating label 逻辑：

- 默认 label 位于输入线附近。
- focus 或有内容时上移。
- 动画约 `0.3s ease`。

### 提交按钮

```text
SUBMIT INQUIRY
文字 + 底线
hover opacity
```

接入当前 Brief 系统时，建议保留当前 Obys 极简结构，但吸收 baseline input 和轻量 review 结构。

## H. 可复用组件规范

### Hero Section

用途：

- 首页首屏
- Services 主标题
- About 主标题
- Proposal 主标题

规格：

- 大标题使用 Playfair Display / display-xl。
- 可配 full-screen image 或纯文本 hero。
- 首页 hero 可使用图像全屏铺底 + mix-blend-difference 标题。
- 其他页面使用顶部大留白 + 12 栏标题布局。

### Editorial Image Block

用途：

- Brand Story
- Introduction
- 服务说明

规格：

- 图片固定比例。
- 文字与图片错位排列。
- 左图右文或右图左文均可。
- 正文不超过中等宽度，避免横向铺满。

### Services Section

用途：

- Digital Presence
- Systems & Operations
- Brand Growth

规格：

- 顶部编号 label。
- 顶部细分割线。
- 大图 + 文案不对称布局。
- 每个 section 独立大留白。
- 可包含辅助图片组。

### Accommodation Section

用途：

- 酒店房型、住宿类型、方案卡片。

规格：

- 不使用卡片容器。
- 图片 + 标题 + label 即构成 item。
- 图片比例推荐 `4 / 5` 或 `3 / 2`。
- 标题使用 headline 或 body-lg 级别，依页面密度决定。

### Proposal CTA

用途：

- 首页底部行动区。
- 模板末尾转化区。

规格：

- 居中。
- 大标题。
- 一段短说明。
- 黑底主 CTA 或文字下划线 CTA。
- 上方可加 `border-top: 1px solid black/10`。

### Contact / Proposal Form

用途：

- Brief / Proposal Request 页面。

规格：

- 左侧表单，右侧联系信息。
- 表单采用 baseline。
- 不使用卡片，不使用背景块。
- 右侧可放联系信息和一张竖图。

### Mobile Preview

用途：

- 移动端首页模板。

规格：

- 顶部固定导航。
- Hero 标题先于图片。
- 内容单列。
- 卡片使用 `3 / 2` 和 `4 / 5` 图片比例。
- Footer 纵向排列。

## I. 后续如何接入 Codex 当前系统

当前 Stitch 导出不可直接作为 Next 页面使用，需要经过改造。

### 建议接入顺序

1. 不直接复制 HTML 到页面。
2. 先将 `code.html` 拆成 React 组件草案。
3. 将 Tailwind CDN config 转换为当前项目可控 CSS token。
4. 将远程图片迁移到：

```text
public/template-assets/hospitality/{template}/default/
```

5. 使用 `lib/getShowcaseImage.ts` 读取图片。
6. 将文案和模板信息放入 `data/templates.ts` 或新增行业模板内容数据。
7. 将 Proposal Request 表单思想对齐当前 `/brief` 系统，而不是另建独立表单系统。
8. 再决定是否建立独立模板预览路由，例如：

```text
/showcase/hospitality/[template]
```

### 与当前系统的关系

可以吸收：

- 酒店行业视觉语言。
- 图片比例系统。
- Hero / Services / Proposal CTA 组件模式。
- 表单 baseline 规则。
- 黑白灰 editorial 规范。

不应直接照搬：

- Tailwind CDN。
- Google 远程图片 URL。
- 独立 HTML document 结构。
- 内联 Tailwind config。
- 与当前 `/brief` 重复的 Proposal 表单。
- 当前项目已有 Obys 首页与详情页结构。

## 结论

该 Stitch 酒店母模板适合作为 Hospitality 视觉标准的参考基线，尤其适合定义：

- 高端酒店模板视觉方向。
- 图片规格与叙事节奏。
- 服务页模块结构。
- Proposal / Brief 页面表单质感。

但它不应直接替换当前 Showcase Engine 页面。更合理的方式是将其转化为可复用的 React 组件规范，并接入现有模板数据层、图片 fallback 系统和 Brief 系统。
