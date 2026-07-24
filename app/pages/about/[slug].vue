<script setup lang="ts">
import { getPage, usePageSeo } from '~/data/site'

const route = useRoute()
const localePath = useLocalePath()
const slug = computed(() => String(route.params.slug || 'company'))

const initialPage = getPage('about', slug.value)
if (!initialPage) {
  await navigateTo(localePath('/about/company'), { redirectCode: 302 })
}

const page = computed(() => getPage('about', slug.value) ?? getPage('about', 'company')!)
usePageSeo(page.value.title, page.value.description)
</script>

<template>
  <SubPageContent :page="page" />
</template>
