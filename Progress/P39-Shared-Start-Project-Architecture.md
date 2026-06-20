# P39 Shared Start Project Architecture

> 本文只定义架构，不修改代码，不 commit，不 push。

> 备注：本阶段的 `/start-project` 方案已回退为历史架构探索，当前实际承接页是已有的 `/brief`。

## 1. 为什么取消模板内大型 CTA

当前每个模板页如果都内嵌一套大型 CTA，会带来三个问题：

1. 维护成本会随着模板数量线性增长。
2. 不同模板页会逐渐出现文案和交互不一致。
3. 模板页会再次承担“展示 + 转化 + 资料收集”的混合职责，破坏简洁的成品展示结构。

当模板数量从 2 个扩展到 30-50 个时，模板内嵌 CTA 方案会变成重复劳动，而不是系统能力。

结论：

- 模板页不再承担完整项目提交功能。
- 模板页只保留最轻量的入口。
- 完整提交流程统一交给公共页面。

## 2. 为什么改成公共 `/start-project` 页面

公共 `/start-project` 页面的价值是把“开始提交资料 / Project Brief”沉淀成一个固定版本。

好处：

- 所有模板共享同一套提交资料逻辑。
- 所有文案、字段、联系方式、交付周期都集中管理。
- 新增模板时，只需要传入 `template` 参数，不需要重写表单主体。
- 后续如果要改 WhatsApp、Email、交付周期，只改一个地方。

结论：

`/start-project` 是模板业务的公共收口页。

## 3. 模板页只保留极简入口按钮的原因

模板页的第一职责是展示成品。

因此模板页只保留一个极简入口按钮：

- 中文：`用这个模板开始项目`
- 英文：`Start with this template`

点击后统一跳转：

```text
/start-project?template=当前模板slug
```

这样做的原因：

- 保持模板页视觉干净
- 不再让大 CTA 抢主视觉
- 不再让模板页重复承担完整表单逻辑
- 用户仍然可以快速进入项目提交流程

## 4. `/start-project` 页面包含哪些功能

公共页面必须统一承载以下内容：

1. 项目资料
2. Logo
3. 图片
4. 公司名称
5. 联系方式
6. 业务介绍
7. 开始提交资料
8. 交付周期 3-5 天
9. 获取报价
10. WhatsApp
11. Email
12. 中英文切换
13. 当前选择的模板名称 / `template` slug 显示

这个页面就是之前“开始提交资料”功能的固定版本。

## 5. 已经做好的“开始提交资料”功能如何保存成固定版本

当前已做的内容不删除，而是抽成公共模块和公共页面。

建议固定版本拆分为：

- `components/project-starter/ProjectStarterPage.tsx`
- `components/project-starter/ProjectStarterForm.tsx`
- `components/project-starter/project-starter-content.ts`

职责分离建议：

- `ProjectStarterPage.tsx`：页面壳层，负责读取 `template` 参数、语言切换、布局
- `ProjectStarterForm.tsx`：表单结构、字段展示、提交按钮
- `project-starter-content.ts`：文案、字段标签、交付周期、联系方式、按钮文本

原则：

- 所有模板调用同一套固定版本
- 所有文案集中管理
- 所有字段集中管理
- 所有联系方式集中管理

## 6. 未来新增 30-50 个模板时如何统一调用

未来新增模板时，只需要在模板数据里提供：

- `slug`
- `name`
- 必要的展示文本

模板页按钮统一跳转到：

```text
/start-project?template=slug
```

公共页再读取该 `template` 参数，自动显示对应模板名称。

这样新增模板时不需要：

- 重写表单
- 重写 WhatsApp / Email
- 重写项目资料字段
- 重写交付周期展示

## 7. URL 参数 `template` 如何记录客户选择的模板

推荐使用：

```text
/start-project?template=luxury-hotel
/start-project?template=safari-lodge
/start-project?template=construction-company
```

作用：

- 记录客户从哪个模板页进入
- 在公共页面里显示当前选择的模板名称
- 未来用于表单提交、统计或路由分发

如果未来需要更完整的数据，也可以扩展为：

```text
/start-project?template=luxury-hotel&lang=zh
```

## 8. WhatsApp / Email / 交付周期 / 项目资料字段如何集中配置

这些内容必须集中，不可散落在每个模板文件里。

建议集中在一个内容文件里：

- WhatsApp number
- Email address
- 交付周期
- 项目资料字段
- 按钮文案
- 英文 / 中文文案

这样未来改动时只改一个源文件，不会逐个模板同步。

## 9. 桌面端如何展示

桌面端建议使用轻量、清晰的双区结构：

- 左侧或主体区域展示模板成品
- 右侧或顶部保留一个极简 `Start Project` 入口

`/start-project` 页面本身可以保持高级、轻奢、简洁风格，但不要再使用巨大的 sticky CTA 卡片作为模板页核心布局。

桌面端公共页建议展示：

- 当前模板名称
- 项目资料入口
- 交付周期
- 获取报价
- WhatsApp / Email
- 提交按钮

## 10. 手机端如何展示

手机端优先保证可读性和轻压迫感。

模板页只保留极简按钮：

- `用这个模板开始项目`

点击后进入 `/start-project`。

`/start-project` 页面手机端建议：

- 顶部显示当前模板名称
- 项目资料采用分组或折叠式结构
- 保持首屏轻
- 按钮紧凑
- 不要让单页表单过高

## 11. 哪些旧功能必须保留

以下功能必须保留：

- 项目资料
- Logo
- 图片
- 公司名称
- 联系方式
- 业务介绍
- 开始提交资料
- 交付周期 3-5 天
- 获取报价
- WhatsApp
- Email
- 中英文切换
- 当前模板名称 / slug 显示

## 12. 哪些当前 CTA 方案需要废弃

以下方案不是最终方案，应废弃：

- 模板页右侧巨大 sticky CTA 卡片
- 手机端巨大黑色 CTA 面板
- 每个模板页面单独维护一套完整 CTA 逻辑

这些方案会增加维护成本，并破坏模板页的简洁展示目标。

## 13. 后续真正改代码时的步骤

后续执行顺序建议如下：

1. 先抽出公共文案和字段配置
2. 再创建 `/start-project` 页面
3. 再创建公共 `ProjectStarterPage` 和 `ProjectStarterForm`
4. 再把模板页 CTA 降级成极简按钮
5. 再把模板入口统一接到 `/start-project?template=slug`
6. 再检查 build
7. 再检查线上部署

执行纪律：

- 不改首页视觉
- 不改模板图片
- 不做 SEO Matrix
- 不新增模板内容
- 不再继续强化模板内大 CTA

---

本文件为 P39 架构确认稿。
