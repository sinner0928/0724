<script setup lang="ts">
import { getPage, usePageSeo } from '~/data/site'

const route = useRoute()
const localePath = useLocalePath()
const slug = computed(() => String(route.params.slug || 'production'))

const initialPage = getPage('manufacturing', slug.value)
if (!initialPage) {
  await navigateTo(localePath('/manufacturing/production'), { redirectCode: 302 })
}

const page = computed(() => getPage('manufacturing', slug.value) ?? getPage('manufacturing', 'production')!)
usePageSeo(page.value.title, page.value.description)
</script>

<template>
  <SubPageContent :page="page" />
</template>
