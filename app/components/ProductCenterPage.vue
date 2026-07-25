<script setup lang="ts">
import { ArrowRight, BatteryCharging, CircuitBoard, Layers3, Radio } from 'lucide-vue-next'
import { type LocaleText, usePageSeo } from '~/data/site'

const { locale } = useI18n()
const localePath = useLocalePath()
const title: LocaleText = { zh: '产品中心', en: 'Products' }
const description: LocaleText = { zh: '围绕无线连接、控制与电子板卡加工，先确认工程边界，再组织可交付的制造方案。', en: 'For wireless, control and electronic board assembly, we confirm engineering boundaries before organizing delivery.' }
usePageSeo(title, description)
const text = (value: LocaleText) => locale.value === 'en' ? value.en : value.zh

const sections = [
  { id: 'detail', label: { zh: '产品详情', en: 'Products' } },
  { id: 'scenarios', label: { zh: '应用场景', en: 'Scenarios' } },
  { id: 'inquiry', label: { zh: '产品咨询', en: 'Inquiry' } }
]
const products = [
  { icon: CircuitBoard, title: { zh: '键鼠外设控制板', en: 'Keyboard & Mouse Control Board' }, text: { zh: '蓝牙 / 2.4G 双模，覆盖按键矩阵、主控适配、低功耗优化与整板测试。', en: 'Bluetooth / 2.4G with key matrix, MCU adaptation, low-power tuning and board testing.' }, tags: ['Bluetooth / 2.4G', 'PCBA'] },
  { icon: Radio, title: { zh: '运动相机遥控器', en: 'Action Camera Remote' }, text: { zh: '远程快门、模式切换、无线通信、按键控制与样品验证。', en: 'Remote shutter, mode switching, wireless communication, key control and sample validation.' }, tags: [{ zh: '无线控制', en: 'Wireless control' }, { zh: '量产导入', en: 'Production intro' }] },
  { icon: BatteryCharging, title: { zh: '充电宝通信模块', en: 'Power Bank Communication Module' }, text: { zh: '电量采集、状态上报、蓝牙 / WiFi / 串口通信与 APP 交互。', en: 'Battery data, status reporting, Bluetooth / WiFi / UART and app communication.' }, tags: [{ zh: '状态采集', en: 'Data capture' }, { zh: '模块 PCBA', en: 'Module PCBA' }] },
  { icon: Layers3, title: { zh: '定制电子板卡加工', en: 'Custom Electronic Board Assembly' }, text: { zh: '从 PCB 制板、SMT 贴片到烧录、测试，按项目资料组织交付。', en: 'From PCB fabrication and SMT to flashing and testing, organized around project documentation.' }, tags: ['SMT', { zh: '功能测试', en: 'Functional test' }] }
]
const scenarios = [
  { number: '01', title: { zh: '办公与电竞外设', en: 'Office & Gaming Peripherals' }, text: { zh: '面向键盘、鼠标与定制外设的连接、控制与低功耗需求。', en: 'Connectivity, control and low-power support for keyboards, mice and custom peripherals.' } },
  { number: '02', title: { zh: '运动相机与影像辅助', en: 'Action Camera & Imaging' }, text: { zh: '面向便携遥控、模式控制与无线交互的工程需求。', en: 'Engineering support for compact remotes, mode control and wireless interaction.' } },
  { number: '03', title: { zh: '共享充电与移动电源', en: 'Shared Power & Portable Power' }, text: { zh: '面向设备状态采集、通信透传与应用交互。', en: 'Device data, pass-through communication and application interaction.' } },
  { number: '04', title: { zh: '消费电子与智能硬件', en: 'Consumer Electronics & Smart Hardware' }, text: { zh: '面向定制板卡、工艺导入与批量制造。', en: 'Custom boards, process introduction and batch manufacturing.' } }
]
</script>

<template>
  <div class="continuous-page product-page">
    <section class="continuous-hero"><div class="shell continuous-hero-inner"><p class="eyebrow">{{ locale === 'en' ? 'Product Center' : '产品中心' }}</p><h1>{{ text(title) }}</h1><p>{{ text(description) }}</p></div></section>
    <SectionAnchorNav :items="sections" :label="locale === 'en' ? 'Product sections' : '产品中心页面导航'" />

    <section id="detail" class="continuous-section"><div class="shell"><div class="continuous-heading"><p class="eyebrow">{{ locale === 'en' ? 'Product Directions' : '产品方向' }}</p><h2>{{ locale === 'en' ? 'No off-the-shelf products. Delivery is confirmed for each project.' : '不销售标准化成品，按项目确认工程路径与交付形态。' }}</h2></div><div class="product-grid"><article v-for="(product, index) in products" :key="text(product.title)"><p>{{ String(index + 1).padStart(2, '0') }}</p><component :is="product.icon" :size="24" aria-hidden="true" /><h3>{{ text(product.title) }}</h3><span></span><div>{{ text(product.text) }}</div><ul><li v-for="tag in product.tags" :key="typeof tag === 'string' ? tag : text(tag)">{{ typeof tag === 'string' ? tag : text(tag) }}</li></ul></article></div></div></section>

    <section id="scenarios" class="continuous-section section-paper"><div class="shell"><div class="continuous-heading"><p class="eyebrow">{{ locale === 'en' ? 'Application Scenarios' : '应用场景' }}</p><h2>{{ locale === 'en' ? 'Start from the real use case, then define the product and manufacturing path.' : '从实际应用出发，反推产品与制造路径。' }}</h2></div><div class="scenario-grid"><article v-for="item in scenarios" :key="item.number"><strong>{{ item.number }}</strong><h3>{{ text(item.title) }}</h3><p>{{ text(item.text) }}</p></article></div></div></section>

    <section id="inquiry" class="continuous-section"><div class="shell product-inquiry"><div class="continuous-heading"><p class="eyebrow">{{ locale === 'en' ? 'Product Inquiry' : '产品咨询' }}</p><h2>{{ locale === 'en' ? 'Share the product direction and expected quantity.' : '说明产品方向、应用场景与预计数量。' }}</h2><p>{{ locale === 'en' ? 'Clear requirement information lets engineering assess the next step faster.' : '清晰的需求信息，有助于工程团队更快完成评估。' }}</p></div><InquiryForm form-kind="product" /></div></section>
  </div>
</template>

<style scoped>
.continuous-page { background: var(--white); }.continuous-hero { background: var(--primary); color: var(--white); }.continuous-hero-inner { min-height: 340px; display: flex; flex-direction: column; justify-content: flex-end; padding: 78px 0 58px; }.continuous-hero h1 { margin: 0; font-size: 42px; line-height: 1.18; font-weight: 750; }.continuous-hero p:not(.eyebrow) { max-width: 660px; margin: 20px 0 0; color: rgba(255,255,255,.8); font-size: 16px; line-height: 1.8; }.continuous-section { padding: 88px 0; scroll-margin-top: 126px; }.section-paper { background: var(--paper); }.continuous-heading { max-width: 780px; margin-bottom: 40px; }.continuous-heading h2 { margin: 0; font-size: 34px; line-height: 1.28; font-weight: 750; }.continuous-heading h2::after { content: ""; display:block; width:56px; height:3px; margin-top:16px; background:var(--accent); }.continuous-heading > p:not(.eyebrow) { margin:16px 0 0; color:var(--muted); font-size:16px; }.product-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--line); border-left:1px solid var(--line); }.product-grid article { min-height:342px; display:flex; flex-direction:column; padding:26px 22px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }.product-grid article:hover { position:relative; z-index:1; border-color:var(--accent); box-shadow:var(--shadow-hover); }.product-grid article>p { margin:0 0 30px; color:var(--accent-hover); font-size:12px; font-weight:850; }.product-grid svg { color:var(--accent-hover); }.product-grid h3 { margin:20px 0 0; font-size:18px; line-height:1.35; }.product-grid article>span { width:38px; height:3px; margin:18px 0; background:var(--accent); }.product-grid article>div { color:var(--muted); font-size:14px; line-height:1.75; }.product-grid ul { display:flex; flex-wrap:wrap; gap:7px; margin:auto 0 0; padding:20px 0 0; list-style:none; }.product-grid li { min-height:26px; display:inline-flex; align-items:center; padding:0 8px; background:var(--primary-pale); color:var(--primary); font-size:11px; font-weight:700; }.scenario-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:16px; }.scenario-grid article { min-height:210px; padding:24px; border:1px solid var(--line); background:var(--white); }.scenario-grid strong { color:var(--accent-hover); font-size:14px; }.scenario-grid h3 { margin:30px 0 10px; font-size:18px; line-height:1.35; }.scenario-grid p { margin:0; color:var(--muted); font-size:14px; line-height:1.75; }.product-inquiry { max-width:1180px; }.product-inquiry :deep(.inquiry-form) { margin-top:36px; }
@media (max-width:1024px) { .product-grid,.scenario-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.product-grid article:nth-child(2) { border-right:0; }.product-grid article:nth-child(n+3) { border-top:1px solid var(--line); } }
@media (max-width:820px) { .continuous-hero-inner { min-height:300px; padding:68px 0 48px; }.continuous-hero h1 { font-size:34px; }.continuous-section { padding:62px 0; scroll-margin-top:122px; }.continuous-heading { margin-bottom:32px; }.continuous-heading h2 { font-size:27px; } }
@media (max-width:640px) { .continuous-hero h1 { font-size:30px; }.continuous-hero p:not(.eyebrow),.continuous-heading>p:not(.eyebrow) { font-size:15px; }.product-grid,.scenario-grid { grid-template-columns:1fr; }.product-grid article { min-height:282px; border-right:0; border-top:1px solid var(--line); }.product-grid article:first-child { border-top:0; }.scenario-grid { gap:12px; }.scenario-grid article { min-height:0; } }
</style>
