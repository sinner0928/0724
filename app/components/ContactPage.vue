<script setup lang="ts">
import { Building2, Clock3, Factory, Radio } from 'lucide-vue-next'
import { type LocaleText, usePageSeo } from '~/data/site'

const { locale } = useI18n()
const title: LocaleText = { zh: '联系我们', en: 'Contact Us' }
const description: LocaleText = { zh: '三地协同服务项目对接，通过统一咨询入口确认需求与后续安排。', en: 'Three-city coordination for project discussions, with one inquiry path for requirements and next steps.' }
usePageSeo(title, description)
const text = (value: LocaleText) => locale.value === 'en' ? value.en : value.zh
const sections = [
  { id: 'info', label: { zh: '联系方式', en: 'Contact Info' } },
  { id: 'inquiry', label: { zh: '业务咨询', en: 'Business Inquiry' } }
]
const contacts = [
  { icon: Building2, title: { zh: '杭州总部', en: 'Hangzhou Headquarters' }, text: { zh: '公司运营、客户沟通与项目统筹。', en: 'Operations, client communication and project coordination.' } },
  { icon: Factory, title: { zh: '深圳量产中心', en: 'Shenzhen Production Center' }, text: { zh: '量产制造与供应链管理，详细地址通过业务咨询获取。', en: 'Production and supply chain management. Detailed address via business inquiry.' } },
  { icon: Radio, title: { zh: '上海研发中心', en: 'Shanghai R&D Center' }, text: { zh: '无线通信协议栈与射频方向研发协同。', en: 'Wireless protocol stack and RF R&D collaboration.' } },
  { icon: Clock3, title: { zh: '工作时间', en: 'Business Hours' }, text: { zh: '工作日 09:00 - 18:00。', en: 'Weekdays, 09:00 - 18:00.' } }
]
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero"><div class="shell contact-hero-inner"><p class="eyebrow">{{ locale === 'en' ? 'Contact YiYuanLi' : '联系壹原理' }}</p><h1>{{ text(title) }}</h1><p>{{ text(description) }}</p></div></section>
    <SectionAnchorNav :items="sections" :label="locale === 'en' ? 'Contact sections' : '联系我们页面导航'" />
    <section id="info" class="contact-section"><div class="shell"><div class="contact-heading"><p class="eyebrow">{{ locale === 'en' ? 'Company Information' : '联系方式' }}</p><h2>{{ locale === 'en' ? 'Three cities, three working functions.' : '三个城市，三种协同职能。' }}</h2><p>{{ locale === 'en' ? 'Use the business inquiry form for project information or detailed contact arrangements.' : '项目资料、具体地址与对接安排，请通过业务咨询表单提交。' }}</p></div><div class="contact-grid"><article v-for="item in contacts" :key="text(item.title)"><component :is="item.icon" :size="24" aria-hidden="true" /><h3>{{ text(item.title) }}</h3><p>{{ text(item.text) }}</p></article></div></div></section>
    <section id="inquiry" class="contact-section section-paper"><div class="shell form-wrap"><div class="contact-heading"><p class="eyebrow">{{ locale === 'en' ? 'Inquiry & Visit Booking' : '业务咨询与来访预约' }}</p><h2>{{ locale === 'en' ? 'Share your project needs or arrange a focused on-site discussion.' : '说明项目需求，或提前安排高效的现场沟通。' }}</h2><p>{{ locale === 'en' ? 'Choose the contact type below and we will arrange the appropriate next step.' : '请在下方选择联系类型，我们会据此安排合适的后续对接。' }}</p></div><InquiryForm form-kind="business" /></div></section>
  </div>
</template>

<style scoped>
.contact-page { background:var(--white); }.contact-hero { background:var(--primary); color:var(--white); }.contact-hero-inner { min-height:340px; display:flex; flex-direction:column; justify-content:flex-end; padding:78px 0 58px; }.contact-hero h1 { margin:0; font-size:42px; line-height:1.18; font-weight:750; }.contact-hero p:not(.eyebrow) { max-width:660px; margin:20px 0 0; color:rgba(255,255,255,.8); font-size:16px; line-height:1.8; }.contact-section { padding:88px 0; scroll-margin-top:126px; }.section-paper { background:var(--paper); }.contact-heading { max-width:760px; margin-bottom:40px; }.contact-heading h2 { margin:0; font-size:34px; line-height:1.28; font-weight:750; }.contact-heading h2::after { content:""; display:block; width:56px; height:3px; margin-top:16px; background:var(--accent); }.contact-heading>p:not(.eyebrow) { margin:16px 0 0; color:var(--muted); font-size:16px; }.contact-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--line); border-left:1px solid var(--line); }.contact-grid article { min-height:210px; padding:26px 22px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }.contact-grid svg { color:var(--accent-hover); }.contact-grid h3 { margin:24px 0 8px; font-size:18px; }.contact-grid p { margin:0; color:var(--muted); font-size:14px; line-height:1.75; }.form-wrap :deep(.inquiry-form) { margin-top:36px; }
@media (max-width:1024px) { .contact-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.contact-grid article:nth-child(2) { border-right:0; }.contact-grid article:nth-child(n+3) { border-top:1px solid var(--line); } }
@media (max-width:820px) { .contact-hero-inner { min-height:300px; padding:68px 0 48px; }.contact-hero h1 { font-size:34px; }.contact-section { padding:62px 0; scroll-margin-top:122px; }.contact-heading { margin-bottom:32px; }.contact-heading h2 { font-size:27px; } }
@media (max-width:640px) { .contact-hero h1 { font-size:30px; }.contact-grid { grid-template-columns:1fr; }.contact-grid article { min-height:0; border-right:0; border-top:1px solid var(--line); }.contact-grid article:first-child { border-top:0; } }
</style>
