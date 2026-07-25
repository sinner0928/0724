<script setup lang="ts">
import { localeText, pages } from '~/data/site'

const { locale } = useI18n()
const localePath = useLocalePath()

const productItems = pages.products.detail.sections[0].items

const productLineTiles = computed(() => productItems.slice(0, 4).map((item, index) => ({
  title: localeText(item.category, locale.value),
  subtitle: localeText(item.title, locale.value),
  description: localeText(item.text, locale.value),
  tags: item.tags.map((tag) => localeText(tag, locale.value)),
  image: index === 2 ? '/assets/chongdianbao.jpg' : index === 3 ? '/assets/xinpian1.jpg' : item.image,
  className: `tile-${index + 1}`
})))
</script>

<template>
  <section class="home-products">
    <div class="shell home-products-shell">
      <div class="home-products-heading">
        <p class="eyebrow">{{ locale === 'en' ? 'Products' : '产品中心' }}</p>
        <h2>{{ locale === 'en' ? 'Core PCBA Solutions' : '核心产品与PCBA方案' }}</h2>
        <p class="home-products-lead">
          {{ locale === 'en'
            ? 'Focused on keyboard/mouse peripherals, action camera remotes, power bank communication modules and custom electronic board assembly, with support from PCB optimization to PCBA production delivery.'
            : '聚焦键鼠外设、运动相机遥控、充电宝通信模块及定制电子板卡加工，提供从PCB优化、SMT贴片、程序烧录到测试交付的一站式PCBA服务。'
          }}
        </p>
      </div>

      <NuxtLink
        v-for="product in productLineTiles"
        :key="product.title"
        class="home-product-tile"
        :class="product.className"
        :to="localePath('/products/detail')"
      >
        <div class="home-product-media">
          <img :src="product.image" :alt="product.title" loading="lazy" />
          <span class="home-product-more">{{ locale === 'en' ? 'View More' : '查看更多' }} <span aria-hidden="true">→</span></span>
        </div>
        <div class="home-product-body">
          <strong>{{ product.title }}</strong>
          <small>{{ product.subtitle }}</small>
          <p>{{ product.description }}</p>
          <div class="home-product-tags" aria-label="capability tags">
            <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.home-products { padding: 96px 0 108px; background: var(--white); }
.home-products-shell { max-width: 980px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; align-items: stretch; }
.home-products-heading { grid-column: 1 / -1; display: grid; align-content: start; justify-items: start; margin-bottom: 8px; }
.home-products-heading h2 { margin: 0; color: var(--ink); font-size: 32px; line-height: 1.28; font-weight: 700; letter-spacing: 0; }
.home-products-heading h2::after { content: ""; display: block; width: 56px; height: 3px; margin-top: 14px; background: var(--accent); }
.home-products-lead { max-width: 780px; margin: 18px 0 0; color: var(--muted); font-size: 15px; line-height: 1.75; }
.home-product-tile { display: grid; grid-template-rows: 250px 1fr; overflow: hidden; border: 1px solid var(--line); border-radius: 0; background: var(--white); box-shadow: var(--shadow); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.home-product-tile:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: var(--accent); }
.home-product-media { position: relative; overflow: hidden; background: var(--primary-pale); }
.home-product-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease; }
.home-product-media::after { content: ""; position: absolute; inset: 0; background: rgba(252,171,3,0.78); opacity: 0; transition: opacity 0.24s ease; }
.home-product-tile:hover img { transform: scale(1.045); }
.home-product-tile:hover .home-product-media::after,
.home-product-tile:hover .home-product-more { opacity: 1; }
.home-product-more { position: absolute; left: 50%; top: 50%; z-index: 1; transform: translate(-50%, -50%); color: var(--primary); font-size: 15px; font-weight: 800; opacity: 0; transition: opacity 0.24s ease; white-space: nowrap; }
.home-product-body { display: grid; align-content: start; gap: 9px; padding: 24px; }
.home-product-body strong { display: block; color: var(--accent-hover); font-size: 14px; line-height: 1.2; font-weight: 800; }
.home-product-body small { display: block; color: var(--ink); font-size: 20px; line-height: 1.35; font-weight: 800; }
.home-product-body p { display: -webkit-box; margin: 4px 0 0; overflow: hidden; color: var(--muted); font-size: 14px; line-height: 1.7; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
.home-product-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.home-product-tags span { display: inline-flex; align-items: center; min-height: 28px; padding: 5px 10px; border: 1px solid rgba(9, 20, 38, 0.12); background: var(--primary-pale); color: var(--primary); font-size: 12px; line-height: 1.2; font-weight: 800; }

@media (max-width: 820px) {
  .home-products { padding: 70px 0; }
  .home-products-shell { grid-template-columns: 1fr 1fr; gap: 18px; }
  .home-products-heading { min-height: auto; }
  .home-products-heading h2 { font-size: 30px; }
  .home-product-tile { grid-template-rows: 210px 1fr; }
}

@media (max-width: 520px) {
  .home-products-shell { grid-template-columns: 1fr; }
  .home-products-heading h2 { font-size: 28px; }
  .home-product-tile { grid-template-rows: 220px 1fr; }
  .home-product-body { padding: 20px; }
}
</style>
