<script setup lang="ts">
const { locale } = useI18n()

const capabilityStats = computed(() => locale.value === 'en' ? [
  { value: 'Batch', label: 'Chip & module shipment', note: 'Capacity confirmed by project plan' },
  { value: '4', label: 'Product line structure', note: 'Keyboard/mouse, action camera remote, power bank module and custom PCBA' },
  { value: '3', label: 'R&D / production cities', note: 'Hangzhou, Shenzhen and Shanghai' },
  { value: 'Full Flow', label: 'Manufacturing support', note: 'Sample, pilot run, production and QC shipment' }
] : [
  { value: '批量', label: '芯片模组出货', note: '产能按项目计划确认' },
  { value: '4', label: '产品线结构', note: '键鼠外设、运动相机遥控、充电宝模块、定制板卡' },
  { value: '3 城', label: '研发与量产协同', note: '杭州、深圳、上海联动' },
  { value: '全流程', label: '制造交付支持', note: '打样、试产、量产、质检出货' }
])
</script>

<template>
  <section class="home-capability-band">
    <div class="shell home-capability-grid">
      <article v-for="item in capabilityStats" :key="item.label" class="home-capability-card">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
        <p>{{ item.note }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.home-capability-band { position: relative; z-index: 2; padding: 0 0 54px; background: var(--white); }
.home-capability-grid { width: 100%; max-width: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: -38px; border: 1px solid var(--line); background: var(--white); box-shadow: var(--shadow); }
.home-capability-card { position: relative; min-height: 146px; display: grid; align-content: start; gap: 7px; padding: 30px 24px 24px; border-right: 1px solid var(--line); transition: border-color 0.2s ease, transform 0.2s ease; }
.home-capability-card::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 4px; background: var(--accent); transform: scaleX(0.42); transform-origin: left; transition: transform 0.2s ease; }
.home-capability-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.home-capability-card:hover::before { transform: scaleX(1); }
.home-capability-card:last-child { border-right: 0; }
.home-capability-card strong { color: var(--accent-hover); font-size: 38px; line-height: 1; font-weight: 900; }
.home-capability-card span { color: var(--ink); font-size: 15px; font-weight: 800; }
.home-capability-card p { margin: 3px 0 0; color: var(--muted); font-size: 13px; line-height: 1.55; }

@media (max-width: 820px) {
  .home-capability-band { padding-bottom: 42px; }
  .home-capability-grid { width: min(100% - 32px, 1180px); }
  .home-capability-grid { grid-template-columns: repeat(2, 1fr); }
  .home-capability-card:nth-child(2) { border-right: 0; }
  .home-capability-card:nth-child(-n + 2) { border-bottom: 1px solid var(--line); }
}

@media (max-width: 520px) {
  .home-capability-grid { grid-template-columns: 1fr; margin-top: 0; }
  .home-capability-card { min-height: auto; border-right: 0; border-bottom: 1px solid var(--line); }
  .home-capability-card:nth-child(2) { border-right: 0; }
  .home-capability-card:nth-child(-n + 2) { border-bottom: 1px solid var(--line); }
  .home-capability-card:last-child { border-bottom: 0; }
}
</style>
