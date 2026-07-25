<script setup lang="ts">
import { ArrowRight, CheckCircle2, CircuitBoard, PackageCheck, ShieldCheck } from 'lucide-vue-next'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const supportSteps = computed(() => locale.value === 'en' ? [
  { title: 'Engineering Sample', text: 'Provide samples, evaluation boards and SDKs for early functional validation.', icon: CircuitBoard },
  { title: 'Pilot Validation', text: 'Run small-batch validation and lock key process parameters before production.', icon: CheckCircle2 },
  { title: 'Batch Manufacturing', text: 'Coordinate supply chain production, SMT mounting, assembly and testing.', icon: PackageCheck },
  { title: 'QC Shipment', text: 'Combine inspection records, packing checks and batch shipment release.', icon: ShieldCheck }
] : [
  { title: '工程打样', text: '提供工程样品、评估板和 SDK，支持前期功能验证。', icon: CircuitBoard },
  { title: '试产验证', text: '小批量验证并固化关键工艺参数，为量产做准备。', icon: CheckCircle2 },
  { title: '批量制造', text: '衔接供应链排产，执行 SMT 贴装、组装和测试。', icon: PackageCheck },
  { title: '质检出货', text: '结合检测记录、包装核验和批次出货放行。', icon: ShieldCheck }
])
</script>

<template>
  <section class="home-support">
    <div class="shell home-support-shell">
      <div class="home-support-head">
        <h2>{{ locale === 'en' ? 'From engineering sample to batch shipment, we provide continuous manufacturing support.' : '从工程打样到批量出货，我们提供持续制造支持。' }}</h2>
        <p>{{ locale === 'en' ? 'Around specification confirmation, pilot validation, production coordination and shipment inspection, we help products move steadily into the next stage.' : '围绕规格确认、试产验证、生产协同与出货检验，帮助产品更稳定地进入下一阶段。' }}</p>
      </div>

      <div class="home-support-grid">
        <article v-for="step in supportSteps" :key="step.title">
          <component :is="step.icon" :size="28" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>

      <div class="home-support-action">
        <CircuitBoard :size="34" />
        <div>
          <strong>{{ locale === 'en' ? 'Have a product requirement? Submit project information for follow-up.' : '有产品需求？提交信息，我们会根据产品方向和预计数量安排后续对接。' }}</strong>
          <span>{{ locale === 'en' ? 'Share product direction, sample status, expected quantity and delivery target to start a focused conversation.' : '建议说明产品方向、样品状态、预计数量和交付目标，便于工程与商务快速判断。' }}</span>
        </div>
        <NuxtLink :to="localePath('/contact/inquiry')" class="button">{{ t('cta.contact') }} <ArrowRight :size="17" /></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-support { padding: 82px 0 70px; background: var(--white); }
.home-support-shell { display: grid; gap: 34px; }
.home-support-head { max-width: 820px; }
.home-support-head h2 { margin: 0; color: var(--ink); font-size: 32px; line-height: 1.28; font-weight: 700; letter-spacing: 0; }
.home-support-head h2::after { content: ""; display: block; width: 56px; height: 3px; margin-top: 16px; background: var(--accent); }
.home-support-head p { max-width: 760px; margin: 16px 0 0; color: var(--muted); font-size: 17px; line-height: 1.82; }
.home-support-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.home-support-grid article { min-height: 218px; padding: 28px; border: 1px solid var(--line); border-radius: 0; background: var(--white); box-shadow: var(--shadow); transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
.home-support-grid article:hover { transform: translateY(-2px); border-color: var(--accent); box-shadow: var(--shadow-hover); }
.home-support-grid svg { color: var(--accent-hover); }
.home-support-grid h3 { margin: 22px 0 10px; color: var(--ink); font-size: 20px; line-height: 1.3; }
.home-support-grid p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.78; }
.home-support-action { min-height: 156px; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 28px; margin-top: 14px; padding: 34px 42px; border: 1px solid #1a3350; border-left: 6px solid var(--accent); background: var(--primary); color: var(--white); }
.home-support-action svg { color: var(--accent); }
.home-support-action strong { display: block; color: var(--ink); font-size: 26px; line-height: 1.3; }
.home-support-action strong { color: var(--white); }
.home-support-action span { display: block; margin-top: 8px; color: rgba(255,255,255,0.70); font-size: 15px; }

@media (max-width: 820px) {
  .home-support { padding: 62px 0 54px; }
  .home-support-head h2 { font-size: 28px; }
  .home-support-head p { font-size: 16px; }
  .home-support-grid { grid-template-columns: 1fr; gap: 12px; }
  .home-support-grid article { min-height: auto; padding: 24px; }
  .home-support-action { grid-template-columns: 1fr; justify-items: start; gap: 18px; padding: 28px; }
  .home-support-action strong { font-size: 22px; }
}

@media (max-width: 520px) {
  .home-support-head h2 { font-size: 25px; }
  .home-support-action { padding: 24px; }
  .home-support-action strong { font-size: 20px; }
  .home-support-action span { font-size: 14px; }
}
</style>
