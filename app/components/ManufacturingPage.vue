<script setup lang="ts">
import { ClipboardCheck, Factory, Gauge, PackageCheck } from 'lucide-vue-next'
import { type LocaleText, usePageSeo } from '~/data/site'

const { locale } = useI18n()
const title: LocaleText = { zh: '制造与服务', en: 'Manufacturing' }
const description: LocaleText = { zh: '从工程打样到批量出货，以明确的工艺、质量与交期节点支撑项目交付。', en: 'From engineering samples to batch shipment, with clear process, quality and schedule checkpoints.' }
usePageSeo(title, description)
const text = (value: LocaleText) => locale.value === 'en' ? value.en : value.zh

const sections = [
  { id: 'production', label: { zh: '生产服务', en: 'Production' } },
  { id: 'process', label: { zh: '工艺流程', en: 'Process' } },
  { id: 'testing', label: { zh: '测试与交付', en: 'Testing' } }
]
const production = [
  { icon: ClipboardCheck, title: { zh: '工程打样', en: 'Engineering Sample' }, text: { zh: '根据项目规格完成工程样品与初步功能验证。', en: 'Build engineering samples and complete initial functional validation.' } },
  { icon: Gauge, title: { zh: '试产验证', en: 'Pilot Validation' }, text: { zh: '验证 SMT 参数、测试工装并固化工艺文件。', en: 'Validate SMT parameters and fixtures, then lock process documents.' } },
  { icon: Factory, title: { zh: '批量制造', en: 'Batch Manufacturing' }, text: { zh: '衔接供应链排产，执行贴装、组装与成品测试。', en: 'Coordinate supply chain scheduling, assembly and finished-product testing.' } },
  { icon: PackageCheck, title: { zh: '质检出货', en: 'QC Shipment' }, text: { zh: '结合全检与抽检，附批次记录按规范交付。', en: 'Combine full and sampling inspection with batch records for shipment.' } }
]
const process = [
  { number: '01', title: { zh: '规格确认', en: 'Specification Confirmation' }, text: { zh: '确认接口、功耗、器件与关键工程条件。', en: 'Confirm interfaces, power targets, components and engineering conditions.' } },
  { number: '02', title: { zh: '工程准备', en: 'Engineering Preparation' }, text: { zh: '组织物料、工艺与测试方案，形成可执行清单。', en: 'Prepare materials, process and test plans as an executable checklist.' } },
  { number: '03', title: { zh: '试产固化', en: 'Pilot Run & Lock' }, text: { zh: '验证制造参数、治具适配与测试覆盖。', en: 'Validate manufacturing parameters, fixtures and test coverage.' } },
  { number: '04', title: { zh: '量产管控', en: 'Production Control' }, text: { zh: '按固化工艺监控良率、质量与交期。', en: 'Monitor yield, quality and schedule against the locked process.' } }
]
const testing = [
  { title: { zh: '功能测试', en: 'Functional Test' }, text: { zh: '围绕连接、按键、功耗与关键功能进行验证。', en: 'Validate connectivity, key response, power and key functions.' } },
  { title: { zh: '射频校准', en: 'RF Calibration' }, text: { zh: '按项目要求完成频偏与发射功率等校准。', en: 'Calibrate frequency offset and transmit power as required.' } },
  { title: { zh: '可靠性验证', en: 'Reliability Validation' }, text: { zh: '按产品形态评估温度、ESD、跌落等测试。', en: 'Evaluate temperature, ESD, drop and related tests by product type.' } },
  { title: { zh: '出货检验', en: 'Shipment Inspection' }, text: { zh: '核对外观、数量、标签、包装与交付资料。', en: 'Check appearance, quantity, labels, packaging and delivery records.' } }
]
</script>

<template>
  <div class="manufacturing-page">
    <section class="manufacturing-hero"><div class="shell manufacturing-hero-inner"><p class="eyebrow">{{ locale === 'en' ? 'Manufacturing & Service' : '制造与服务' }}</p><h1>{{ text(title) }}</h1><p>{{ text(description) }}</p></div></section>
    <SectionAnchorNav :items="sections" :label="locale === 'en' ? 'Manufacturing sections' : '制造与服务页面导航'" />
    <section id="production" class="manufacturing-section"><div class="shell"><div class="manufacturing-heading"><p class="eyebrow">{{ locale === 'en' ? 'Production Service' : '生产服务' }}</p><h2>{{ locale === 'en' ? 'Four stages, one traceable delivery standard.' : '四个阶段，一套可追溯的交付标准。' }}</h2></div><div class="manufacturing-grid"><article v-for="(item, index) in production" :key="text(item.title)"><p>{{ String(index + 1).padStart(2,'0') }}</p><component :is="item.icon" :size="24" aria-hidden="true" /><h3>{{ text(item.title) }}</h3><span></span><div>{{ text(item.text) }}</div></article></div></div></section>
    <section id="process" class="manufacturing-section section-paper"><div class="shell"><div class="manufacturing-heading"><p class="eyebrow">{{ locale === 'en' ? 'Process Flow' : '工艺流程' }}</p><h2>{{ locale === 'en' ? 'Every process node can be confirmed and followed up.' : '每一个制程节点，都能确认并持续跟进。' }}</h2></div><div class="process-track"><article v-for="item in process" :key="item.number"><strong>{{ item.number }}</strong><h3>{{ text(item.title) }}</h3><p>{{ text(item.text) }}</p></article></div></div></section>
    <section id="testing" class="manufacturing-section"><div class="shell"><div class="manufacturing-heading"><p class="eyebrow">{{ locale === 'en' ? 'Testing & Delivery' : '测试与交付' }}</p><h2>{{ locale === 'en' ? 'Quality is documented before every shipment.' : '每一批出货前，质量都落实在可核验的数据里。' }}</h2></div><div class="testing-grid"><article v-for="item in testing" :key="text(item.title)"><h3>{{ text(item.title) }}</h3><p>{{ text(item.text) }}</p></article></div></div></section>
  </div>
</template>

<style scoped>
.manufacturing-page { background: var(--white); }
.manufacturing-hero { background: var(--primary); color: var(--white); }
.manufacturing-hero-inner { min-height: 340px; display: flex; flex-direction: column; justify-content: flex-end; padding: 78px 0 58px; }
.manufacturing-hero h1 { margin: 0; font-size: 42px; line-height: 1.18; font-weight: 750; }
.manufacturing-hero p:not(.eyebrow) { max-width: 660px; margin: 20px 0 0; color: rgba(255,255,255,.8); font-size: 16px; line-height: 1.8; }
.manufacturing-section { padding: 88px 0; scroll-margin-top: 126px; }
.section-paper { background: var(--paper); }
.manufacturing-heading { max-width: 760px; margin-bottom: 40px; }
.manufacturing-heading h2 { margin: 0; font-size: 34px; line-height: 1.28; font-weight: 750; }
.manufacturing-heading h2::after { content: ""; display: block; width: 56px; height: 3px; margin-top: 16px; background: var(--accent); }
.manufacturing-grid, .testing-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.manufacturing-grid article { min-height: 300px; padding: 26px 22px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.manufacturing-grid article > p, .process-track strong { margin: 0; color: var(--accent-hover); font-size: 12px; font-weight: 850; }
.manufacturing-grid svg { margin-top: 30px; color: var(--accent-hover); }
.manufacturing-grid h3 { margin: 20px 0 0; font-size: 18px; }
.manufacturing-grid span { display: block; width: 38px; height: 3px; margin: 18px 0; background: var(--accent); }
.manufacturing-grid div { color: var(--muted); font-size: 14px; line-height: 1.75; }
.process-track { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); background: var(--white); border: 1px solid var(--line); }
.process-track article { min-height: 186px; padding: 26px 22px; border-right: 1px solid var(--line); }
.process-track article:last-child { border: 0; }
.process-track h3 { margin: 22px 0 8px; font-size: 18px; }
.process-track p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
.testing-grid article { min-height: 204px; padding: 25px 22px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--white); }
.testing-grid h3 { margin: 0; font-size: 18px; }
.testing-grid p { margin: 12px 0 0; color: var(--muted); font-size: 14px; line-height: 1.75; }
@media (max-width: 1024px) { .manufacturing-grid, .testing-grid, .process-track { grid-template-columns: repeat(2, minmax(0, 1fr)); } .manufacturing-grid article:nth-child(2), .testing-grid article:nth-child(2), .process-track article:nth-child(2) { border-right: 0; } .manufacturing-grid article:nth-child(n + 3), .testing-grid article:nth-child(n + 3), .process-track article:nth-child(n + 3) { border-top: 1px solid var(--line); } }
@media (max-width: 820px) { .manufacturing-hero-inner { min-height: 300px; padding: 68px 0 48px; } .manufacturing-hero h1 { font-size: 34px; } .manufacturing-section { padding: 62px 0; scroll-margin-top: 122px; } .manufacturing-heading { margin-bottom: 32px; } .manufacturing-heading h2 { font-size: 27px; } }
@media (max-width: 640px) { .manufacturing-hero h1 { font-size: 30px; } .manufacturing-grid, .testing-grid, .process-track { grid-template-columns: 1fr; } .manufacturing-grid article, .testing-grid article, .process-track article { min-height: 0; border-right: 0; border-top: 1px solid var(--line); } .manufacturing-grid article:first-child, .testing-grid article:first-child, .process-track article:first-child { border-top: 0; } .manufacturing-grid article { min-height: 252px; } }
</style>
