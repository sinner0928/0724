<script setup lang="ts">
import { getPage, localeText, navItems, usePageSeo, type PageGroup } from '~/data/site'

const props = defineProps<{
  group: PageGroup
}>()

const { locale } = useI18n()

const nav = computed(() => navItems.find((item) => item.key === props.group))
const children = computed(() => nav.value?.children ?? [])
const pages = computed(() => children.value
  .map((child) => ({
    child,
    page: getPage(props.group, child.key)
  }))
  .filter((item): item is { child: typeof children.value[number], page: NonNullable<ReturnType<typeof getPage>> } => Boolean(item.page)))

const firstPage = computed(() => pages.value[0]?.page)

if (firstPage.value) {
  usePageSeo(firstPage.value.title, firstPage.value.description, firstPage.value.image)
}

function text(value: { zh: string; en: string }) {
  return localeText(value, locale.value)
}
</script>

<template>
  <div>
    <SubPageContent
      v-for="(item, index) in pages"
      :key="item.child.key"
      :page="item.page"
      :show-hero="index === 0"
      :anchor-id="item.child.key"
    />
    <section v-if="!pages.length" class="section">
      <div class="shell">
        <SectionHeading
          :eyebrow="locale === 'en' ? 'Content' : '页面内容'"
          :title="locale === 'en' ? 'No content available.' : '暂无内容'"
          :description="nav ? text(nav.label) : undefined"
        />
      </div>
    </section>
  </div>
</template>
