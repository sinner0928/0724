<script setup lang="ts">
import { getPage, usePageSeo } from '~/data/site'

const route = useRoute()
const localePath = useLocalePath()
const slug = computed(() => String(route.params.slug || 'detail'))

const initialPage = getPage('products', slug.value)
if (!initialPage) {
  await navigateTo(localePath('/products/detail'), { redirectCode: 302 })
}

const page = computed(() => getPage('products', slug.value) ?? getPage('products', 'detail')!)
usePageSeo(page.value.title, page.value.description)
</script>

<template>
  <SubPageContent :page="page" />
</template>
