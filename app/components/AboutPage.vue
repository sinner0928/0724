<script setup lang="ts">
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  MapPin,
  MessageSquare,
  Network,
  RefreshCw,
  Ruler,
  Workflow
} from 'lucide-vue-next'
import { type LocaleText, usePageSeo } from '~/data/site'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const pageTitle: LocaleText = { zh: '关于我们', en: 'About Us' }
const pageDescription: LocaleText = {
  zh: '电子板卡与无线通信模块制造企业，覆盖研发协同、供应链对接与量产交付。',
  en: 'An electronic board and wireless module manufacturer covering engineering coordination, supply chain and production delivery.'
}

usePageSeo(pageTitle, pageDescription)

function text(value: LocaleText) {
  return locale.value === 'en' ? value.en : value.zh
}

const sections = [
  { id: 'company', label: { zh: '公司简介', en: 'Company' } },
  { id: 'business', label: { zh: '业务范围', en: 'Business' } },
  { id: 'culture', label: { zh: '企业文化', en: 'Culture' } }
]

const companyParagraphs: LocaleText[] = [
  {
    zh: '壹原理科技专注电子板卡与无线通信模块制造。以杭州为运营协同中心，联动深圳量产与供应链、上海工程研发资源，服务产品从样品到批量交付的全过程。',
    en: 'YiYuanLi focuses on electronic board and wireless communication module manufacturing. Hangzhou coordinates operations, with Shenzhen supporting production and supply chain while Shanghai provides engineering R&D resources.'
  },
  {
    zh: '我们不销售标准化成品，而是围绕客户的产品定义、工艺要求与交付节奏，组织可验证、可追溯的制造服务。',
    en: 'We do not sell off-the-shelf products. Around each client’s product definition, process requirements and delivery schedule, we organize manufacturing services that are verifiable and traceable.'
  }
]

const facts = [
  { icon: MapPin, title: { zh: '三地协同', en: 'Three-City Coordination' }, text: { zh: '杭州、深圳、上海联动推进项目。', en: 'Hangzhou, Shenzhen and Shanghai move projects together.' } },
  { icon: CircuitBoard, title: { zh: '四类方向', en: 'Four Product Directions' }, text: { zh: '控制板、遥控器、通信模块与定制 PCBA。', en: 'Control boards, remotes, communication modules and custom PCBA.' } },
  { icon: Factory, title: { zh: '制造交付', en: 'Manufacturing Delivery' }, text: { zh: '覆盖打样、试产、量产与出货。', en: 'Covering sampling, pilot runs, production and shipment.' } },
  { icon: ClipboardCheck, title: { zh: '过程可控', en: 'Controlled Process' }, text: { zh: '关键节点留存工程与质量记录。', en: 'Engineering and quality records are retained at key stages.' } }
]

const layoutNodes = [
  { number: '01', title: { zh: '杭州', en: 'Hangzhou' }, text: { zh: '运营与项目协同', en: 'Operations and project coordination' } },
  { number: '02', title: { zh: '深圳', en: 'Shenzhen' }, text: { zh: '量产与供应链对接', en: 'Production and supply chain' } },
  { number: '03', title: { zh: '上海', en: 'Shanghai' }, text: { zh: '客户工程与研发验证', en: 'Customer engineering and R&D validation' } },
  { number: '04', title: { zh: '交付', en: 'Delivery' }, text: { zh: '样品至批量出货', en: 'From sample to batch shipment' } }
]

const businessCards = [
  { title: { zh: '键鼠外设控制板', en: 'Keyboard & Mouse Control Boards' }, text: { zh: '蓝牙 / 2.4G 双模、按键矩阵、主控适配、低功耗优化与整板测试。', en: 'Bluetooth / 2.4G, key matrix, MCU adaptation, low-power tuning and board testing.' }, tags: [{ zh: '无线连接', en: 'Wireless' }, { zh: '功能测试', en: 'Board testing' }] },
  { title: { zh: '运动相机遥控器', en: 'Action Camera Remotes' }, text: { zh: '远程快门、模式切换、低功耗待机、按键自定义与量产导入。', en: 'Remote shutter, mode switching, low-power standby, key mapping and production introduction.' }, tags: [{ zh: '控制固件', en: 'Control firmware' }, { zh: '样品验证', en: 'Sample validation' }] },
  { title: { zh: '充电宝通信模块', en: 'Power Bank Communication Modules' }, text: { zh: '蓝牙 / WiFi / 串口透传、电量采集、状态上报与 APP 交互通信。', en: 'Bluetooth / WiFi / UART, battery data collection, status reporting and app communication.' }, tags: [{ zh: '状态采集', en: 'Data capture' }, { zh: '模块 PCBA', en: 'Module PCBA' }] },
  { title: { zh: '定制电子板卡加工', en: 'Custom Electronic Board Assembly' }, text: { zh: 'PCB 制板、SMT 贴片、DIP 焊接、程序烧录与功能测试一体推进。', en: 'PCB fabrication, SMT, DIP soldering, firmware flashing and functional testing in one flow.' }, tags: [{ zh: 'SMT 贴片', en: 'SMT' }, { zh: '批量交付', en: 'Batch delivery' }] }
]

const workflow = [
  { title: { zh: '需求确认', en: 'Requirement Alignment' }, text: { zh: '明确规格、数量、时间与验证边界。', en: 'Confirm scope, volume, timeline and validation boundaries.' } },
  { title: { zh: '工程打样', en: 'Engineering Sample' }, text: { zh: '完成物料、工艺与功能验证。', en: 'Validate materials, process and functionality.' } },
  { title: { zh: '试产固化', en: 'Pilot Run & Lock' }, text: { zh: '沉淀工艺参数与测试标准。', en: 'Lock process parameters and test standards.' } },
  { title: { zh: '量产交付', en: 'Production Delivery' }, text: { zh: '按计划排产、质检与出货。', en: 'Schedule, inspect and ship to plan.' } }
]

const cultureCards = [
  { icon: Ruler, title: { zh: '工匠精神', en: 'Craftsmanship' }, text: { zh: '每个参数有标准、有记录，不接受“差不多”。', en: 'Every parameter has a standard and a record. Close enough is not accepted.' } },
  { icon: MessageSquare, title: { zh: '务实沟通', en: 'Pragmatic Communication' }, text: { zh: '给方案、给排期、给结果，让项目进度可预期。', en: 'Provide plans, schedules and results so progress stays predictable.' } },
  { icon: BadgeCheck, title: { zh: '责任到人', en: 'Individual Accountability' }, text: { zh: '明确工程负责人，问题在发生处及时闭环。', en: 'Assign clear engineering ownership and close issues where they arise.' } },
  { icon: RefreshCw, title: { zh: '持续改进', en: 'Continuous Improvement' }, text: { zh: '用每一次交付复盘，改进下一次制造。', en: 'Use every delivery review to improve the next manufacturing run.' } }
]

const activeSection = ref('company')
let observer: IntersectionObserver | undefined

function syncActiveSection() {
  const id = route.hash.replace('#', '')
  if (sections.some((section) => section.id === id)) activeSection.value = id
}

onMounted(() => {
  syncActiveSection()
  observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

    if (visible) activeSection.value = visible.target.id
  }, { rootMargin: '-150px 0px -52%', threshold: [0.1, 0.35, 0.6] })

  sections.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) observer?.observe(element)
  })
})

watch(() => route.hash, syncActiveSection)
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="shell about-hero-inner">
        <p class="eyebrow">{{ locale === 'en' ? 'About YiYuanLi' : '关于壹原理' }}</p>
        <h1>{{ text(pageTitle) }}</h1>
        <p>{{ text(pageDescription) }}</p>
      </div>
    </section>

    <nav class="about-anchor-nav" :aria-label="locale === 'en' ? 'About page sections' : '关于我们页面导航'">
      <div class="shell about-anchor-list">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          :class="{ active: activeSection === section.id }"
          :aria-current="activeSection === section.id ? 'location' : undefined"
          @click="activeSection = section.id"
        >
          {{ text(section.label) }}
        </a>
      </div>
    </nav>

    <section id="company" class="about-section about-company">
      <div class="shell">
        <div class="about-section-heading">
          <p class="eyebrow">{{ locale === 'en' ? 'Company Profile' : '公司简介' }}</p>
          <h2>{{ locale === 'en' ? 'A manufacturing partner built around project delivery.' : '围绕项目交付组织制造协同。' }}</h2>
        </div>

        <div class="company-overview">
          <div class="company-copy">
            <p v-for="paragraph in companyParagraphs" :key="text(paragraph)">{{ text(paragraph) }}</p>
          </div>

          <div class="company-facts">
            <article v-for="fact in facts" :key="text(fact.title)">
              <component :is="fact.icon" :size="22" aria-hidden="true" />
              <h3>{{ text(fact.title) }}</h3>
              <p>{{ text(fact.text) }}</p>
            </article>
          </div>
        </div>

        <div class="about-layout">
          <div class="about-layout-title">
            <Network :size="20" aria-hidden="true" />
            <span>{{ locale === 'en' ? 'R&D, Supply Chain & Delivery Layout' : '研产协同布局' }}</span>
          </div>
          <div class="about-layout-track">
            <article v-for="node in layoutNodes" :key="node.number">
              <span>{{ node.number }}</span>
              <strong>{{ text(node.title) }}</strong>
              <p>{{ text(node.text) }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="business" class="about-section about-business">
      <div class="shell">
        <div class="about-section-heading">
          <p class="eyebrow">{{ locale === 'en' ? 'Business Scope' : '业务范围' }}</p>
          <h2>{{ locale === 'en' ? 'Four product directions, organized by deliverable capability.' : '四类产品方向，按可交付能力组织。' }}</h2>
          <p>{{ locale === 'en' ? 'Every project confirms its engineering path, process requirements and delivery form before moving forward.' : '每个项目在推进前，先确认工程路径、工艺要求与交付形式。' }}</p>
        </div>

        <div class="business-grid">
          <article v-for="(item, index) in businessCards" :key="text(item.title)" class="business-card">
            <p>{{ String(index + 1).padStart(2, '0') }}</p>
            <h3>{{ text(item.title) }}</h3>
            <span></span>
            <div>{{ text(item.text) }}</div>
            <ul>
              <li v-for="tag in item.tags" :key="text(tag)">{{ text(tag) }}</li>
            </ul>
          </article>
        </div>

        <div class="about-workflow">
          <div class="about-workflow-heading">
            <Workflow :size="20" aria-hidden="true" />
            <span>{{ locale === 'en' ? 'Collaboration Path' : '合作路径' }}</span>
          </div>
          <div class="about-workflow-grid">
            <article v-for="(step, index) in workflow" :key="text(step.title)">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <h3>{{ text(step.title) }}</h3>
              <p>{{ text(step.text) }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="culture" class="about-section about-culture">
      <div class="shell">
        <div class="about-section-heading about-section-heading-light">
          <p class="eyebrow">{{ locale === 'en' ? 'Corporate Culture' : '企业文化' }}</p>
          <h2>{{ locale === 'en' ? 'Principles that belong in every sample run and shipment.' : '每一次打样和交付中，都能看见这些原则。' }}</h2>
        </div>

        <div class="culture-grid">
          <article v-for="item in cultureCards" :key="text(item.title)">
            <component :is="item.icon" :size="25" aria-hidden="true" />
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="shell about-cta-inner">
        <div>
          <p class="eyebrow">{{ locale === 'en' ? 'Start A Project' : '开始合作' }}</p>
          <h2>{{ locale === 'en' ? 'Clear from requirement to delivery.' : '从需求到交付，过程清晰，责任明确。' }}</h2>
        </div>
        <NuxtLink class="button" :to="localePath('/contact#inquiry')">
          {{ locale === 'en' ? 'Business Inquiry' : '业务咨询' }} <ArrowRight :size="17" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page { background: var(--white); }
.about-hero { background: var(--primary); color: var(--white); }
.about-hero-inner { min-height: 340px; display: flex; flex-direction: column; justify-content: flex-end; padding: 78px 0 58px; }
.about-hero h1 { margin: 0; max-width: 680px; font-size: 42px; line-height: 1.18; font-weight: 750; }
.about-hero p:not(.eyebrow) { max-width: 660px; margin: 20px 0 0; color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.8; }

.about-anchor-nav { position: sticky; top: 72px; z-index: 30; border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.98); }
.about-anchor-list { display: grid; grid-template-columns: repeat(3, 1fr); }
.about-anchor-list a { position: relative; min-height: 54px; display: flex; align-items: center; justify-content: center; color: var(--muted); font-size: 14px; font-weight: 700; transition: color 0.2s ease, background 0.2s ease; }
.about-anchor-list a::after { content: ""; position: absolute; right: 24px; bottom: 0; left: 24px; height: 3px; background: var(--accent); transform: scaleX(0); transition: transform 0.2s ease; }
.about-anchor-list a:hover, .about-anchor-list a.active { color: var(--primary); background: var(--paper); }
.about-anchor-list a.active::after { transform: scaleX(1); }

.about-section { scroll-margin-top: 126px; padding: 88px 0; }
.about-section-heading { max-width: 760px; margin-bottom: 40px; }
.about-section-heading h2 { margin: 0; color: var(--ink); font-size: 34px; line-height: 1.28; font-weight: 750; }
.about-section-heading h2::after { content: ""; display: block; width: 56px; height: 3px; margin-top: 16px; background: var(--accent); }
.about-section-heading > p:not(.eyebrow) { margin: 16px 0 0; color: var(--muted); font-size: 16px; line-height: 1.8; }

.company-overview { display: grid; grid-template-columns: minmax(0, 1fr) minmax(420px, 0.95fr); gap: 70px; align-items: start; }
.company-copy { max-width: 580px; }
.company-copy p { margin: 0 0 18px; color: var(--muted); font-size: 16px; line-height: 1.9; }
.company-copy .button { margin-top: 14px; }
.company-facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.company-facts article { min-height: 176px; padding: 26px 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.company-facts svg { color: var(--accent-hover); }
.company-facts h3 { margin: 18px 0 7px; color: var(--ink); font-size: 18px; line-height: 1.3; }
.company-facts p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }

.about-layout { margin-top: 76px; padding-top: 24px; border-top: 1px solid var(--line); }
.about-layout-title, .about-workflow-heading { display: inline-flex; align-items: center; gap: 9px; color: var(--primary); font-size: 14px; font-weight: 750; }
.about-layout-title svg, .about-workflow-heading svg { color: var(--accent-hover); }
.about-layout-track { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 22px; }
.about-layout-track article { min-height: 132px; padding: 0 22px; border-right: 1px solid var(--line); }
.about-layout-track article:first-child { padding-left: 0; }
.about-layout-track article:last-child { border-right: 0; }
.about-layout-track span, .about-workflow-grid > article > span { display: block; color: var(--accent-hover); font-size: 12px; font-weight: 850; }
.about-layout-track strong { display: block; margin-top: 18px; color: var(--ink); font-size: 20px; }
.about-layout-track p { margin: 6px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6; }

.about-business { background: var(--paper); }
.business-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.business-card { min-height: 324px; display: flex; flex-direction: column; padding: 26px 22px 22px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--white); transition: border-color 0.2s ease, box-shadow 0.2s ease; }
.business-card:hover { position: relative; z-index: 1; border-color: var(--accent); box-shadow: var(--shadow-hover); }
.business-card > p { margin: 0; color: var(--accent-hover); font-size: 12px; font-weight: 850; }
.business-card h3 { margin: 28px 0 0; color: var(--ink); font-size: 18px; line-height: 1.35; }
.business-card > span { width: 38px; height: 3px; margin: 18px 0; background: var(--accent); }
.business-card > div { color: var(--muted); font-size: 14px; line-height: 1.75; }
.business-card ul { display: flex; flex-wrap: wrap; gap: 7px; margin: auto 0 0; padding: 20px 0 0; list-style: none; }
.business-card li { min-height: 26px; display: inline-flex; align-items: center; padding: 0 8px; background: var(--primary-pale); color: var(--primary); font-size: 11px; font-weight: 700; }

.about-workflow { margin-top: 56px; }
.about-workflow-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 18px; border: 1px solid var(--line); background: var(--white); }
.about-workflow-grid article { min-height: 168px; padding: 24px 22px; border-right: 1px solid var(--line); }
.about-workflow-grid article:last-child { border-right: 0; }
.about-workflow-grid h3 { margin: 22px 0 7px; color: var(--ink); font-size: 17px; line-height: 1.35; }
.about-workflow-grid p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }

.about-culture { background: var(--primary); }
.about-section-heading-light h2 { color: var(--white); }
.culture-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,0.18); }
.culture-grid article { min-height: 246px; padding: 28px 24px 24px; border-right: 1px solid rgba(255,255,255,0.18); }
.culture-grid article:last-child { border-right: 0; }
.culture-grid svg { color: var(--accent); }
.culture-grid h3 { margin: 24px 0 10px; color: var(--white); font-size: 19px; line-height: 1.35; }
.culture-grid p { margin: 0; color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.75; }

.about-cta { background: var(--paper); }
.about-cta-inner { min-height: 210px; display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 46px 0; }
.about-cta h2 { margin: 0; color: var(--ink); font-size: 30px; line-height: 1.3; }

@media (max-width: 1024px) {
  .company-overview { grid-template-columns: 1fr; gap: 42px; }
  .company-copy { max-width: 760px; }
  .business-grid, .culture-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .business-card:nth-child(2), .culture-grid article:nth-child(2) { border-right: 0; }
  .business-card:nth-child(n + 3), .culture-grid article:nth-child(n + 3) { border-top: 1px solid var(--line); }
  .culture-grid article:nth-child(n + 3) { border-color: rgba(255,255,255,0.18); }
}

@media (max-width: 820px) {
  .about-hero-inner { min-height: 300px; padding: 68px 0 48px; }
  .about-hero h1 { font-size: 34px; }
  .about-anchor-nav { top: 68px; }
  .about-section { padding: 62px 0; scroll-margin-top: 122px; }
  .about-section-heading { margin-bottom: 32px; }
  .about-section-heading h2 { font-size: 27px; }
  .about-layout { margin-top: 52px; }
  .about-layout-track { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 26px; }
  .about-layout-track article { min-height: 106px; padding-left: 18px; }
  .about-layout-track article:nth-child(2) { border-right: 0; }
  .about-layout-track article:nth-child(3) { padding-left: 0; }
  .about-workflow-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-workflow-grid article:nth-child(2) { border-right: 0; }
  .about-workflow-grid article:nth-child(n + 3) { border-top: 1px solid var(--line); }
  .about-cta-inner { align-items: flex-start; flex-direction: column; }
  .about-cta h2 { font-size: 27px; }
}

@media (max-width: 640px) {
  .about-anchor-list { width: 100%; overflow-x: auto; scrollbar-width: none; }
  .about-anchor-list::-webkit-scrollbar { display: none; }
  .about-anchor-list a { min-width: 112px; padding: 0 12px; white-space: nowrap; }
  .about-anchor-list a::after { right: 12px; left: 12px; }
  .about-hero h1 { font-size: 30px; }
  .about-hero p:not(.eyebrow), .about-section-heading > p:not(.eyebrow), .company-copy p { font-size: 15px; }
  .about-anchor-list a { min-height: 50px; font-size: 13px; }
  .about-anchor-list a::after { right: 10px; left: 10px; }
  .company-facts, .business-grid, .culture-grid, .about-layout-track, .about-workflow-grid { grid-template-columns: 1fr; }
  .company-facts article, .business-card, .culture-grid article, .about-layout-track article, .about-workflow-grid article { min-height: auto; border-right: 0; border-top: 1px solid var(--line); }
  .company-facts article:first-child, .business-card:first-child, .culture-grid article:first-child, .about-layout-track article:first-child, .about-workflow-grid article:first-child { border-top: 0; }
  .company-facts article { min-height: 148px; }
  .about-layout-track { margin-top: 18px; border: 1px solid var(--line); }
  .about-layout-track article, .about-layout-track article:first-child, .about-layout-track article:nth-child(3) { padding: 20px; }
  .business-card { min-height: 272px; }
  .culture-grid article { min-height: 188px; border-color: rgba(255,255,255,0.18); }
  .about-workflow-grid article { min-height: 142px; }
}
</style>
