<script setup lang="ts">
import { ArrowRight, CheckCircle2, PackageCheck, ShieldCheck } from 'lucide-vue-next'

const { locale } = useI18n()
const localePath = useLocalePath()
const aboutImage = '/assets/gongsi.jpg'

const aboutValues = computed(() => locale.value === 'en' ? [
  { subtitle: 'Scale Capability', text: 'Batch delivery for chips and modules, with capacity and schedule confirmed by project plan.', icon: CheckCircle2 },
  { subtitle: 'Full-Flow Manufacturing', text: 'From chip specification and reference design to engineering validation and production delivery.', icon: PackageCheck },
  { subtitle: 'Quality Assurance', text: 'Functional tests, RF calibration, reliability validation and shipment inspection by product type.', icon: ShieldCheck }
] : [
  { subtitle: '规模产能', text: '支持芯片与模组批量交付，产能与排期按项目计划确认。', icon: CheckCircle2 },
  { subtitle: '全链路制造', text: '从芯片规格、参考设计到工程验证和量产交付全流程贯通。', icon: PackageCheck },
  { subtitle: '品质保障', text: '按产品类型执行功能测试、射频校准、可靠性验证与出货检验。', icon: ShieldCheck }
])
</script>

<template>
  <section class="home-about">
    <div class="shell home-about-main">
      <div class="home-about-image" :class="{ empty: !aboutImage }">
        <img v-if="aboutImage" :src="aboutImage" :alt="locale === 'en' ? 'Company and engineering collaboration scene' : '企业与工程协作场景'" loading="lazy" />
      </div>
      <div class="home-about-copy">
        <p class="eyebrow">{{ locale === 'en' ? 'About YiYuanLi' : '关于壹原理' }}</p>
        <h2>{{ locale === 'en' ? 'A manufacturer from chip design to module production.' : '从芯片设计到模组量产的制造商。' }}</h2>
        <p>{{ locale === 'en' ? 'YiYuanLi focuses on Bluetooth SoC, 2.4G RF, NFC and multi-protocol chip modules. The company links product definition, reference design, engineering validation, pilot run and batch shipment into a clear delivery path.' : '壹原理科技覆盖蓝牙 SoC、2.4G 射频、NFC 及多协议芯片模组的研发设计与量产制造。公司将产品定义、参考设计、工程验证、试产确认和批量出货串联成清晰的交付路径。' }}</p>
        <NuxtLink class="button" :to="localePath('/about/company')">{{ locale === 'en' ? 'View Details' : '查看详情' }} <ArrowRight :size="17" /></NuxtLink>
      </div>
    </div>

    <div class="home-value-band">
      <div class="shell home-value-grid">
        <article v-for="value in aboutValues" :key="value.subtitle" class="home-value-card">
          <span class="home-value-icon"><component :is="value.icon" :size="28" /></span>
          <strong>{{ value.subtitle }}</strong>
          <p>{{ value.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-about { position: relative; overflow: hidden; background: var(--white); }
.home-about-main { position: relative; min-height: 520px; display: grid; grid-template-columns: 1.06fr 0.94fr; gap: 70px; align-items: center; padding: 86px 0 58px; }
.home-about-copy { max-width: 560px; }
.home-about-copy h2 { margin: 0; font-size: 32px; line-height: 1.3; font-weight: 700; letter-spacing: 0; color: var(--ink); }
.home-about-copy h2::after { content: ""; display: block; width: 64px; height: 3px; margin: 16px 0 34px; background: var(--accent); }
.home-about-copy p { margin: 0 0 15px; color: rgba(26,26,26,0.68); font-size: 16px; line-height: 1.85; }
.home-about-copy .button { margin-top: 18px; }
.home-about-image { aspect-ratio: 1.12 / 1; overflow: hidden; border-radius: 0; box-shadow: var(--shadow); background: linear-gradient(135deg, var(--primary-pale), #f4f4f4); border: 1px solid var(--line); }
.home-about-image.empty::before { content: ""; display: block; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(9,20,38,0.04), rgba(252,171,3,0.10)); }
.home-about-image img { width: 100%; height: 100%; object-fit: cover; }
.home-value-band { position: relative; background: var(--primary); color: var(--white); }
.home-value-grid { display: grid; grid-template-columns: repeat(3, 1fr); min-height: 258px; }
.home-value-card { display: grid; justify-items: center; align-content: start; gap: 12px; padding: 46px 28px; text-align: center; }
.home-value-icon { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 50%; background: var(--white); color: var(--accent-hover); }
.home-value-card strong { margin-top: 10px; color: var(--white); font-size: 20px; line-height: 1.25; }
.home-value-card p { max-width: 330px; margin: 4px 0 0; color: rgba(255,255,255,0.78); font-size: 14px; line-height: 1.7; }

@media (max-width: 820px) {
  .home-about-main { min-height: auto; grid-template-columns: 1fr; gap: 36px; padding: 62px 0 44px; }
  .home-about-copy h2 { font-size: 27px; }
  .home-about-image { aspect-ratio: 1.25 / 1; }
  .home-value-grid { grid-template-columns: 1fr; }
  .home-value-card { min-height: 210px; padding: 38px 22px; }
}

@media (max-width: 520px) {
  .home-about-main { padding-top: 52px; }
  .home-about-copy h2 { font-size: 25px; }
  .home-value-card strong { font-size: 18px; }
}
</style>
