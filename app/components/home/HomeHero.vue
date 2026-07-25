<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { locale } = useI18n()
const localePath = useLocalePath()
const heroSlides = ['/assets/chang1.jpg', '/assets/chang2.jpg']
const activeSlide = ref(0)

let heroTimer: ReturnType<typeof setInterval> | undefined

function setHeroSlide(index: number) {
  activeSlide.value = index
}

onMounted(() => {
  heroTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length
  }, 5200)
})

onBeforeUnmount(() => {
  if (heroTimer) clearInterval(heroTimer)
})
</script>

<template>
  <section class="home-hero">
    <div class="home-hero-slider" aria-hidden="true">
      <img
        v-for="(slide, index) in heroSlides"
        :key="slide"
        class="home-hero-media"
        :class="{ 'is-active': activeSlide === index }"
        :src="slide"
        :alt="locale === 'en' ? 'Manufacturing site' : '制造现场'"
      />
    </div>
    <div class="home-hero-grid" aria-hidden="true"></div>
    <div class="shell home-hero-content">
      <h1>{{ locale === 'en' ? 'Wireless connectivity chip and module manufacturer.' : '无线连接芯片与模组制造商' }}</h1>
      <p>{{ locale === 'en' ? 'Headquartered in Hangzhou, with R&D and production collaboration centers in Shenzhen and Shanghai, YiYuanLi covers Bluetooth, 2.4G, NFC and multi-protocol chip modules from design to production delivery.' : '总部位于杭州，深圳、上海设有研发与量产协同中心。围绕蓝牙、2.4G、NFC 与多协议芯片模组，提供从设计到量产交付的全链路支持。' }}</p>
      <div class="hero-actions">
        <NuxtLink class="button" :to="localePath('/products/detail')">{{ locale === 'en' ? 'View Product Lines' : '查看产品线' }} <ArrowRight :size="17" /></NuxtLink>
        <NuxtLink class="button button-ghost" :to="localePath('/contact/inquiry')">{{ locale === 'en' ? 'Contact Us' : '联系我们' }} <ArrowRight :size="17" /></NuxtLink>
      </div>
      <div class="home-hero-dots" :aria-label="locale === 'en' ? 'Hero slides' : '首页轮播图'">
        <button
          v-for="(_, index) in heroSlides"
          :key="index"
          type="button"
          :class="{ 'is-active': activeSlide === index }"
          :aria-label="locale === 'en' ? `Show slide ${index + 1}` : `切换到第 ${index + 1} 张图`"
          @click="setHeroSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero { position: relative; min-height: min(680px, 72vh); display: flex; align-items: stretch; overflow: hidden; isolation: isolate; background: var(--primary); color: var(--white); }
.home-hero-slider { position: absolute; inset: 0; z-index: -3; overflow: hidden; }
.home-hero-media { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transform: scale(1.035); transition: opacity 0.8s ease, transform 5.6s ease; }
.home-hero-media.is-active { opacity: 1; transform: scale(1); }
.home-hero::before { content: ""; position: absolute; inset: 0; z-index: -2; background: linear-gradient(90deg, rgba(9,20,38,0.92) 0%, rgba(9,20,38,0.72) 54%, rgba(9,20,38,0.40) 100%); }
.home-hero-grid { position: absolute; inset: 0; z-index: -1; background: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 56px 56px, linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 56px 56px; opacity: 0.44; }
.home-hero-content { width: min(1360px, calc(100% - 260px)); min-height: min(680px, 72vh); max-width: none; display: grid; align-content: center; justify-items: start; padding: 88px 0 66px; }
.home-hero h1 { max-width: 820px; margin: 0; color: var(--white); font-size: clamp(32px, 2.5vw, 44px); line-height: 1.28; font-weight: 700; letter-spacing: 0; text-shadow: 0 2px 18px rgba(0,0,0,0.22); }
.home-hero h1::after { content: ""; display: block; width: 68px; height: 3px; margin-top: 22px; background: var(--accent); }
.home-hero p:not(.eyebrow) { max-width: 760px; margin: 24px 0 0; color: rgba(255,255,255,0.84); font-size: 16px; line-height: 1.85; font-weight: 400; text-shadow: 0 2px 14px rgba(0,0,0,0.18); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
.home-hero .button { min-width: 150px; height: 52px; }
.home-hero .button-ghost { color: var(--white); box-shadow: none; }
.home-hero-dots { display: flex; gap: 10px; margin-top: 34px; }
.home-hero-dots button { width: 34px; height: 4px; padding: 0; border: 0; border-radius: 0; background: rgba(255,255,255,0.34); cursor: pointer; transition: width 0.2s ease, background 0.2s ease; }
.home-hero-dots button.is-active { width: 52px; background: var(--accent); }

@media (max-width: 820px) {
  .home-hero { min-height: 620px; }
  .home-hero::before { background: linear-gradient(90deg, rgba(9,20,38,0.94) 0%, rgba(9,20,38,0.74) 100%); }
  .home-hero-media { object-position: 58% center; }
  .home-hero-content { min-height: 620px; padding: 92px 0 52px; }
  .home-hero h1 { font-size: 36px; line-height: 1.25; }
  .home-hero p:not(.eyebrow) { max-width: 620px; font-size: 16px; line-height: 1.85; }
}

@media (max-width: 520px) {
  .home-hero { min-height: 620px; }
  .home-hero-media { object-position: 64% center; }
  .home-hero-content { min-height: 620px; padding: 82px 0 42px; }
  .home-hero h1 { font-size: 30px; }
  .home-hero p:not(.eyebrow) { margin-top: 20px; font-size: 15px; line-height: 1.78; }
  .home-hero .button { min-width: 132px; height: 46px; }
  .home-hero-dots { margin-top: 28px; }
}
</style>
