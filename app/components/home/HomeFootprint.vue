<script setup lang="ts">
const { locale } = useI18n()

const locations = computed(() => locale.value === 'en' ? [
  { image: '/assets/location-shanghai.jpg', alt: 'Shanghai customer engineering center', label: 'Shanghai Customer Engineering' },
  { image: '/assets/location-hangzhou.jpg', alt: 'Hangzhou supply chain coordination center', label: 'Hangzhou Supply Chain' },
  { image: '/assets/location-shenzhen.jpg', alt: 'Shenzhen R&D validation center', label: 'Shenzhen R&D Validation' }
] : [
  { image: '/assets/location-shanghai.jpg', alt: '上海客户工程中心', label: '上海客户工程中心' },
  { image: '/assets/location-hangzhou.jpg', alt: '杭州供应链协同中心', label: '杭州供应链协同中心' },
  { image: '/assets/location-shenzhen.jpg', alt: '深圳研发验证中心', label: '深圳研发验证中心' }
])
</script>

<template>
  <section class="home-footprint" :class="{ 'is-zh': locale !== 'en' }">
    <div class="home-footprint-shell">
      <div class="home-footprint-content">
        <h2>{{ locale === 'en' ? 'R&D, Supply Chain & Delivery Layout' : '研产协同布局' }}</h2>
        <div class="home-footprint-copy">
          <p>{{ locale === 'en' ? 'With Hangzhou as the operations coordination center, YiYuanLi connects engineering teams in Shenzhen and Shanghai to cover product definition, R&D validation, supply chain coordination and production introduction.' : '壹原理科技以杭州为运营协同中心，联动深圳、上海工程团队，形成覆盖产品定义、研发验证、供应链对接与量产导入的服务体系。' }}</p>
          <p>{{ locale === 'en' ? 'The team focuses on wireless connectivity, low-power products and scenario-based electronics solutions, improving project delivery from sample development to batch shipment.' : '团队聚焦无线连接、低功耗产品和场景化电子方案，持续提升从样品开发到批量交付的项目落地能力。' }}</p>
        </div>
      </div>

      <div class="home-footprint-gallery">
        <article v-for="location in locations" :key="location.label">
          <img :src="location.image" :alt="location.alt" loading="lazy" />
          <span>{{ location.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-footprint { padding: 82px 0 0; overflow: hidden; background: var(--paper); }
.home-footprint-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; gap: 46px; }
.home-footprint-content { max-width: 980px; margin: 0 auto; text-align: center; }
.home-footprint-content h2 { margin: 0; color: var(--ink); font-size: 32px; line-height: 1.28; font-weight: 700; letter-spacing: 0; }
.home-footprint-content h2::after { content: ""; display: block; width: 56px; height: 3px; margin: 14px auto 0; background: var(--accent); }
.home-footprint-copy { max-width: none; margin-top: 24px; display: grid; justify-items: center; gap: 12px; }
.home-footprint-copy p { margin: 0; color: rgba(26,26,26,0.70); font-size: 18px; line-height: 1.82; }
.home-footprint.is-zh .home-footprint-copy p { white-space: nowrap; }
.home-footprint-gallery { width: 100vw; margin-left: calc(50% - 50vw); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; }
.home-footprint-gallery article { position: relative; height: clamp(260px, 28vw, 340px); overflow: hidden; background: var(--primary-pale); }
.home-footprint-gallery img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.96) brightness(0.78); }
.home-footprint-gallery span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: var(--white); font-size: 24px; line-height: 1.2; font-weight: 800; letter-spacing: 0; text-align: center; text-shadow: 0 2px 16px rgba(0,0,0,0.32); white-space: nowrap; }

@media (max-width: 820px) {
  .home-footprint { padding: 62px 0; }
  .home-footprint-shell { width: min(100% - 32px, 1180px); gap: 32px; }
  .home-footprint-content h2 { font-size: 30px; }
  .home-footprint-copy { max-width: 100%; margin-top: 22px; }
  .home-footprint.is-zh .home-footprint-copy p { white-space: normal; }
  .home-footprint-copy p { font-size: 16px; line-height: 1.82; }
  .home-footprint-gallery { grid-template-columns: 1fr; gap: 0; }
  .home-footprint-gallery article { height: 230px; }
}

@media (max-width: 520px) {
  .home-footprint-content h2 { font-size: 28px; }
  .home-footprint-content h2::after { width: 48px; height: 3px; }
  .home-footprint-copy p { font-size: 15px; }
  .home-footprint-gallery article { height: 220px; }
  .home-footprint-gallery span { font-size: 24px; }
}
</style>
