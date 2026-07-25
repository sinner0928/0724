<script setup lang="ts">
import { localeText, type LocaleText } from '~/data/site'

const props = defineProps<{ section: any }>()
const { locale } = useI18n()

const activeProductCategory = ref('all')

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
  const item = props.section.items?.find((entry: any) => entry.category?.zh === category)
  return item?.category ? text(item.category) : category
}

function visibleProductItems(section: any) {
  if (!section.filterable || activeProductCategory.value === 'all') return section.items
  return section.items.filter((item: any) => item.category?.zh === activeProductCategory.value)
}
</script>

<template>
  <div class="product-section">
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
</template>

<style scoped>
.product-section { display: grid; gap: 24px; }
.product-filter { display: flex; flex-wrap: wrap; gap: 10px; margin-top: -8px; }
.filter-chip { min-height: 36px; display: inline-flex; align-items: center; justify-content: center; padding: 0 14px; border: 1px solid #d8e3ee; border-radius: 4px; background: var(--white); color: var(--muted); font-size: 13px; font-weight: 800; white-space: nowrap; transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease; }
.filter-chip { border-radius: 0; border-color: var(--line); }
.filter-chip:hover { border-color: var(--accent); color: var(--primary); }
.filter-chip.active { border-color: var(--accent); background: var(--accent); color: var(--primary); }
.product-card-detailed .card-body { display: grid; align-content: start; }
.spec-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
.spec-table th, .spec-table td { padding: 9px 11px; border: 1px solid var(--line); font-size: 13px; line-height: 1.5; vertical-align: top; }
.spec-table th { width: 34%; background: #f4f7fa; color: var(--muted); font-weight: 800; text-align: left; }
.spec-table td { color: var(--ink); }
</style>
