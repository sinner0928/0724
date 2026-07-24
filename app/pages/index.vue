<script setup lang="ts">
import { ArrowRight, CheckCircle2, CircuitBoard, PackageCheck, ShieldCheck } from 'lucide-vue-next'
import { images, localeText, pages, usePageSeo } from '~/data/site'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const capabilityStats = computed(() => locale.value === 'en' ? [
  { value: 'Batch', label: 'Chip & module shipment', note: 'Capacity confirmed by project plan' },
  { value: '4+1', label: 'Product line structure', note: 'Keyboard, imaging, remote, wearable and general modules' },
  { value: '3', label: 'R&D / production cities', note: 'Hangzhou, Shenzhen and Shanghai' },
  { value: 'Full Flow', label: 'Manufacturing support', note: 'Sample, pilot run, production and QC shipment' }
] : [
  { value: '批量', label: '芯片模组出货', note: '产能按项目计划确认' },
  { value: '4+1', label: '产品线结构', note: '键鼠、影像、遥控、穿戴、通用模组' },
  { value: '3 城', label: '研发与量产协同', note: '杭州、深圳、上海联动' },
  { value: '全流程', label: '制造交付支持', note: '打样、试产、量产、质检出货' }
])

const aboutValues = computed(() => locale.value === 'en' ? [
  { subtitle: 'Scale Capability', text: 'Batch delivery for chips and modules, with capacity and schedule confirmed by project plan.', icon: CheckCircle2 },
  { subtitle: 'Full-Flow Manufacturing', text: 'From chip specification and reference design to engineering validation and production delivery.', icon: PackageCheck },
  { subtitle: 'Quality Assurance', text: 'Functional tests, RF calibration, reliability validation and shipment inspection by product type.', icon: ShieldCheck }
] : [
  { subtitle: '规模产能', text: '支持芯片与模组批量交付，产能与排期按项目计划确认。', icon: CheckCircle2 },
  { subtitle: '全链路制造', text: '从芯片规格、参考设计到工程验证和量产交付全流程贯通。', icon: PackageCheck },
  { subtitle: '品质保障', text: '按产品类型执行功能测试、射频校准、可靠性验证与出货检验。', icon: ShieldCheck }
])

const productItems = pages.products.detail.sections[0].items

const productLineTiles = computed(() => productItems.slice(0, 4).map((item, index) => ({
  title: localeText(item.category, locale.value),
  subtitle: localeText(item.title, locale.value),
  image: item.image,
  className: `tile-${index + 1}`
})))

const leftProductTiles = computed(() => productLineTiles.value.filter((_, index) => [1, 3].includes(index)))
const rightProductTiles = computed(() => productLineTiles.value.filter((_, index) => [0, 2].includes(index)))

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

usePageSeo(
  { zh: '无线连接芯片与模组制造商', en: 'Wireless Connectivity Chip & Module Manufacturer' },
  { zh: '壹原理科技围绕蓝牙、2.4G、NFC 等方向，提供芯片设计、模组制造、测试验证与量产交付支持。', en: 'YiYuanLi supports Bluetooth, 2.4G, NFC and related directions with chip design, module manufacturing, testing validation and production delivery.' }
)
</script>

<template>
  <section class="home-hero">
    <img class="home-hero-media" src="/assets/gongsi.jpg" :alt="locale === 'en' ? 'Company building' : '公司大楼'" />
    <div class="home-hero-grid" aria-hidden="true"></div>
    <div class="shell home-hero-content">
      <h1>{{ locale === 'en' ? 'Wireless connectivity chip and module manufacturer.' : '无线连接芯片与模组制造商' }}</h1>
      <p>{{ locale === 'en' ? 'Headquartered in Hangzhou, with R&D and production collaboration centers in Shenzhen and Shanghai, YiYuanLi covers Bluetooth, 2.4G, NFC and multi-protocol chip modules from design to production delivery.' : '总部位于杭州，深圳、上海设有研发与量产协同中心。围绕蓝牙、2.4G、NFC 与多协议芯片模组，提供从设计到量产交付的全链路支持。' }}</p>
      <div class="hero-actions">
        <NuxtLink class="button button-ghost" :to="localePath('/products/detail')">{{ locale === 'en' ? 'View Product Lines' : '查看产品线' }} <ArrowRight :size="17" /></NuxtLink>
      </div>
    </div>
  </section>

  <section class="home-capability-band">
    <div class="shell home-capability-grid">
      <article v-for="item in capabilityStats" :key="item.label" class="home-capability-card">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
        <p>{{ item.note }}</p>
      </article>
    </div>
  </section>

  <section class="home-about">
    <div class="shell home-about-main">
      <div class="home-about-copy">
        <p class="eyebrow">{{ locale === 'en' ? 'About YiYuanLi' : '关于壹原理' }}</p>
        <h2>{{ locale === 'en' ? 'A manufacturer from chip design to module production.' : '从芯片设计到模组量产的制造商。' }}</h2>
        <p>{{ locale === 'en' ? 'YiYuanLi focuses on Bluetooth SoC, 2.4G RF, NFC and multi-protocol chip modules. The company links product definition, reference design, engineering validation, pilot run and batch shipment into a clear delivery path.' : '壹原理科技覆盖蓝牙 SoC、2.4G 射频、NFC 及多协议芯片模组的研发设计与量产制造。公司将产品定义、参考设计、工程验证、试产确认和批量出货串联成清晰的交付路径。' }}</p>
        <NuxtLink class="button" :to="localePath('/about/company')">{{ locale === 'en' ? 'View Details' : '查看详情' }} <ArrowRight :size="17" /></NuxtLink>
      </div>
      <div class="home-about-image">
        <img :src="images.office" :alt="locale === 'en' ? 'Company and engineering collaboration scene' : '企业与工程协作场景'" loading="lazy" />
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

  <section class="home-products">
    <div class="shell home-products-shell">
      <div class="home-products-left">
        <div class="home-products-heading">
          <h2>{{ locale === 'en' ? 'Product\nLines' : '产品线速览' }}</h2>
        </div>

        <NuxtLink
          v-for="product in leftProductTiles"
          :key="product.title"
          class="home-product-tile"
          :class="product.className"
          :to="localePath('/products/detail')"
        >
          <img :src="product.image" :alt="product.title" loading="lazy" />
          <span>
            <strong>{{ product.title }}</strong>
            <small>{{ product.subtitle }}</small>
          </span>
        </NuxtLink>
      </div>

      <div class="home-products-grid">
        <NuxtLink
          v-for="product in rightProductTiles"
          :key="product.title"
          class="home-product-tile"
          :class="product.className"
          :to="localePath('/products/detail')"
        >
          <img :src="product.image" :alt="product.title" loading="lazy" />
          <span>
            <strong>{{ product.title }}</strong>
            <small>{{ product.subtitle }}</small>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="home-footprint" :class="{ 'is-zh': locale !== 'en' }">
    <div class="home-footprint-shell">
      <div class="home-footprint-content">
        <h2>{{ locale === 'en' ? 'R&D Layout' : '研发布局' }}</h2>
        <div class="home-footprint-copy">
          <p>{{ locale === 'en' ? 'YiYuanLi Technology is a technology-driven enterprise headquartered in Hangzhou, with R&D centers in Shenzhen and Shanghai.' : '壹原理科技是一家总部位于杭州、研发中心设于深圳和上海的技术驱动型企业。' }}</p>
          <p>{{ locale === 'en' ? 'The team focuses on wireless connectivity, low-power products and scenario-based solution support, linking product definition, R&D collaboration and delivery communication.' : '团队聚焦无线连接、低功耗产品与场景化方案支持，围绕产品定义、研发协同和交付沟通持续推进项目落地。' }}</p>
        </div>
      </div>

      <div class="home-footprint-gallery">
        <article>
          <img src="/assets/location-shanghai.jpg" :alt="locale === 'en' ? 'Shanghai R&D center' : '上海研发中心'" loading="lazy" />
          <span>{{ locale === 'en' ? 'Shanghai R&D' : '上海研发中心' }}</span>
        </article>
        <article>
          <img src="/assets/location-hangzhou.jpg" :alt="locale === 'en' ? 'Hangzhou headquarters' : '杭州总部'" loading="lazy" />
          <span>{{ locale === 'en' ? 'Hangzhou HQ' : '杭州总部' }}</span>
        </article>
        <article>
          <img src="/assets/location-shenzhen.jpg" :alt="locale === 'en' ? 'Shenzhen R&D center' : '深圳研发中心'" loading="lazy" />
          <span>{{ locale === 'en' ? 'Shenzhen R&D' : '深圳研发中心' }}</span>
        </article>
      </div>
    </div>
  </section>

  <section class="home-support">
    <div class="shell home-support-shell">
      <div class="home-support-head">
        <h2>{{ locale === 'en' ? 'From engineering sample to batch shipment, we provide continuous manufacturing support.' : '从工程打样到批量出货，我们提供持续制造支持' }}</h2>
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
