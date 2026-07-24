<script setup lang="ts">
import { ArrowRight, CheckCircle2, CircleDot, FileDown, Layers3, MapPin, Send } from 'lucide-vue-next'
import { localeText, type LocaleText } from '~/data/site'

const props = defineProps<{ page: any }>()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const form = reactive<Record<string, string>>({})
const submitted = ref(false)
const attempted = ref(false)
const activeProductCategory = ref('all')

const formFields = computed(() => {
  const kind = props.page.sections.find((section: any) => section.type === 'form')?.formKind
  const base = [
    { key: 'name', label: { zh: '姓名', en: 'Name' }, type: 'text', required: true, autocomplete: 'name' },
    { key: 'company', label: { zh: '公司', en: 'Company' }, type: 'text', required: kind !== 'visit', autocomplete: 'organization' },
    { key: 'email', label: { zh: '邮箱', en: 'Email' }, type: 'email', required: kind !== 'visit', autocomplete: 'email' }
  ]
  if (kind === 'product') {
    return [
      ...base,
      { key: 'product', label: { zh: '产品意向', en: 'Product Direction' }, type: 'text', required: true },
      { key: 'quantity', label: { zh: '预计数量', en: 'Expected Quantity' }, type: 'text', required: false },
      { key: 'message', label: { zh: '需求描述', en: 'Requirement Details' }, type: 'textarea', required: true }
    ]
  }
  if (kind === 'visit') {
    return [
      { key: 'name', label: { zh: '姓名', en: 'Name' }, type: 'text', required: true, autocomplete: 'name' },
      { key: 'phone', label: { zh: '联系方式', en: 'Contact' }, type: 'tel', required: true, autocomplete: 'tel' },
      { key: 'date', label: { zh: '预计到访日期', en: 'Preferred Date' }, type: 'date', required: true },
      { key: 'message', label: { zh: '到访事由', en: 'Visit Purpose' }, type: 'textarea', required: true }
    ]
  }
  return [
    ...base,
    { key: 'role', label: { zh: '职位', en: 'Role' }, type: 'text', required: false },
    { key: 'message', label: { zh: '咨询内容', en: 'Inquiry Details' }, type: 'textarea', required: true }
  ]
})

const errors = computed(() => {
  const result: Record<string, string> = {}
  for (const field of formFields.value) {
    if (field.required && !String(form[field.key] ?? '').trim()) result[field.key] = t('form.required')
    if (field.type === 'email' && form[field.key] && !/^\S+@\S+\.\S+$/.test(form[field.key])) result[field.key] = t('form.invalidEmail')
  }
  return result
})
const hasErrors = computed(() => Object.values(errors.value).some(Boolean))

function text(value: LocaleText) {
  return localeText(value, locale.value)
}

function productFilterOptions(section: any) {
  const categories = Array.from(
    new Set(
      (section.items ?? [])
        .map((item: any) => item.category?.zh)
        .filter(Boolean)
    )
  )
  return ['all', ...categories]
}

function productFilterLabel(category: string) {
  if (category === 'all') return locale.value === 'en' ? 'All' : '全部'
  const item = props.page.sections
    .flatMap((section: any) => section.items ?? [])
    .find((entry: any) => entry.category?.zh === category)
  return item?.category ? text(item.category) : category
}

function visibleProductItems(section: any) {
  if (!section.filterable || activeProductCategory.value === 'all') return section.items
  return section.items.filter((item: any) => item.category?.zh === activeProductCategory.value)
}

function submit() {
  attempted.value = true
  submitted.value = false
  if (hasErrors.value) return
  submitted.value = true
}
</script>

<template>
  <PageHero :eyebrow="text(page.eyebrow)" :title="text(page.title)" :description="text(page.description)" :image="page.image" />

  <section v-for="section in page.sections" :key="`${section.type}-${text(section.title)}`" class="section" :class="{ 'section-soft': ['cards', 'metrics', 'faq', 'certs'].includes(section.type) }">
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
            <strong>{{ locale === 'en' ? 'Clear Process' : '清晰过程' }}</strong>
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

      <div v-else-if="section.type === 'products'" class="product-section">
        <div v-if="section.filterable" class="product-filter" :aria-label="locale === 'en' ? 'Product category filter' : '产品分类筛选'">
          <button
            v-for="category in productFilterOptions(section)"
            :key="category"
            type="button"
            class="filter-chip"
            :class="{ active: activeProductCategory === category }"
            @click="activeProductCategory = category"
          >
            {{ productFilterLabel(category) }}
          </button>
        </div>

        <div class="card-grid">
          <article v-for="item in visibleProductItems(section)" :key="text(item.title)" class="product-card product-card-detailed">
          <img :src="item.image" :alt="text(item.title)" loading="lazy" />
          <div class="card-body">
            <p class="card-kicker">{{ item.category ? text(item.category) : (locale === 'en' ? 'Product Direction' : '产品方向') }}</p>
            <h3>{{ text(item.title) }}</h3>
            <p>{{ text(item.text) }}</p>
            <div v-if="item.tags?.length" class="tag-row">
              <span v-for="tag in item.tags" :key="typeof tag === 'string' ? tag : text(tag)">{{ typeof tag === 'string' ? tag : text(tag) }}</span>
            </div>
            <table v-if="item.specs?.length" class="spec-table">
              <tbody>
                <tr v-for="spec in item.specs" :key="text(spec.label)">
                  <th scope="row">{{ text(spec.label) }}</th>
                  <td>{{ text(spec.value) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </article>
        </div>
      </div>

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

      <form v-else-if="section.type === 'form'" class="inquiry-form" novalidate @submit.prevent="submit">
        <p v-if="submitted" class="form-success" role="status"><CheckCircle2 :size="18" />{{ t('form.success') }}</p>
        <div class="field-grid">
          <div v-for="field in formFields" :key="field.key" class="field" :class="{ 'field-wide': field.type === 'textarea' }">
            <label :for="field.key">{{ text(field.label) }}<span v-if="field.required"> *</span></label>
            <textarea v-if="field.type === 'textarea'" :id="field.key" v-model="form[field.key]" :aria-invalid="attempted && !!errors[field.key]" />
            <input v-else :id="field.key" v-model="form[field.key]" :type="field.type" :autocomplete="field.autocomplete" :aria-invalid="attempted && !!errors[field.key]" />
            <span v-if="attempted && errors[field.key]" class="field-error">{{ errors[field.key] }}</span>
          </div>
        </div>
        <button class="button" type="submit">
          {{ t('cta.inquiry') }} <Send :size="17" />
        </button>
      </form>
    </div>
  </section>
</template>
