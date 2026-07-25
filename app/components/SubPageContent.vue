<script setup lang="ts">
import { ArrowRight, CircleDot, FileDown, Layers3, MapPin } from 'lucide-vue-next'
import { localeText, type LocaleText } from '~/data/site'

withDefaults(defineProps<{
  page: any
  showHero?: boolean
  anchorId?: string
}>(), {
  showHero: true,
  anchorId: undefined
})

const { locale, t } = useI18n()
const localePath = useLocalePath()

function text(value: LocaleText) {
  return localeText(value, locale.value)
}
</script>

<template>
  <PageHero v-if="showHero" :eyebrow="text(page.eyebrow)" :title="text(page.title)" :description="text(page.description)" :image="page.image" />

  <section
    v-for="(section, sectionIndex) in page.sections"
    :id="sectionIndex === 0 ? anchorId : undefined"
    :key="`${section.type}-${text(section.title)}`"
    class="section"
    :class="{ 'section-soft': ['cards', 'metrics', 'faq', 'certs'].includes(section.type) }"
  >
    <div class="shell">
      <SectionHeading :eyebrow="text(section.eyebrow)" :title="text(section.title)" :description="section.description ? text(section.description) : undefined" />

      <div v-if="section.type === 'text'" class="split">
        <div class="text-block">
          <p v-for="paragraph in section.paragraphs" :key="text(paragraph)">{{ text(paragraph) }}</p>
          <NuxtLink class="button" :to="localePath('/contact/inquiry')">
            {{ t('cta.contact') }} <ArrowRight :size="17" />
          </NuxtLink>
        </div>
        <div class="image-frame">
          <img :src="page.image" :alt="text(page.title)" loading="lazy" />
          <div class="image-note">
            <strong>{{ locale === 'en' ? 'Clear Process' : '清晰流程' }}</strong>
            <span>{{ locale === 'en' ? 'Confirm, coordinate and follow through.' : '确认、协同、跟进。' }}</span>
          </div>
        </div>
      </div>

      <div v-else-if="['cards', 'people'].includes(section.type)" class="card-grid">
        <article v-for="(item, index) in section.items" :key="text(item.title)" class="product-card">
          <div class="card-body">
            <p class="card-kicker">0{{ index + 1 }}</p>
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
          </div>
        </article>
      </div>

      <ProductSection v-else-if="section.type === 'products'" :section="section" />

      <div v-else-if="section.type === 'metrics'" class="stat-cards">
        <article v-for="item in section.items" :key="text(item.title)" class="stat-card">
          <Layers3 :size="22" />
          <strong>{{ text(item.title) }}</strong>
          <span>{{ text(item.text) }}</span>
        </article>
      </div>

      <div v-else-if="section.type === 'timeline'" class="timeline">
        <article v-for="item in section.items" :key="text(item.title)" class="timeline-item">
          <span class="timeline-year">{{ text(item.title) }}</span>
          <p>{{ text(item.text) }}</p>
        </article>
      </div>

      <div v-else-if="section.type === 'process'" class="process-grid process-grid-light">
        <article v-for="(item, index) in section.items" :key="text(item.title)" class="process-item">
          <span class="process-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ text(item.title) }}</h3>
          <p>{{ text(item.text) }}</p>
        </article>
      </div>

      <div v-else-if="section.type === 'gallery'" class="gallery-grid">
        <article v-for="item in section.items" :key="text(item.title)" class="gallery-item">
          <img :src="item.image" :alt="text(item.title)" loading="lazy" />
          <div>
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
          </div>
        </article>
      </div>

      <div v-else-if="section.type === 'case'" class="card-grid">
        <article v-for="item in section.items" :key="text(item.title)" class="case-card">
          <div class="card-body">
            <strong class="case-metric">{{ item.metric }}</strong>
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
            <div v-if="item.tags?.length" class="tag-row">
              <span v-for="tag in item.tags" :key="typeof tag === 'string' ? tag : text(tag)">{{ typeof tag === 'string' ? tag : text(tag) }}</span>
            </div>
          </div>
        </article>
      </div>

      <div v-else-if="section.type === 'certs'" class="cert-row">
        <article v-for="item in section.items" :key="text(item.title)" class="cert">
          <FileDown :size="22" />
          <strong>{{ text(item.title) }}</strong>
          <span>{{ text(item.text) }}</span>
        </article>
      </div>

      <div v-else-if="section.type === 'contact'" class="contact-info-grid">
        <article v-for="item in section.items" :key="text(item.title)" class="contact-info-card">
          <MapPin :size="20" />
          <div>
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
          </div>
        </article>
      </div>

      <div v-else-if="section.type === 'faq'" class="faq-list">
        <details v-for="item in section.items" :key="text(item.title)" open>
          <summary><CircleDot :size="16" />{{ text(item.title) }}</summary>
          <p>{{ text(item.text) }}</p>
        </details>
      </div>

      <InquiryForm v-else-if="section.type === 'form'" :form-kind="section.formKind" />
    </div>
  </section>
</template>
