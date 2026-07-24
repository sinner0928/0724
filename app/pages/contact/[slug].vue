<script setup lang="ts">
import { getPage, usePageSeo } from '~/data/site'

const route = useRoute()
const localePath = useLocalePath()
const slug = computed(() => String(route.params.slug || 'info'))

const initialPage = getPage('contact', slug.value)
if (!initialPage) {
  await navigateTo(localePath('/contact/info'), { redirectCode: 302 })
}

const page = computed(() => getPage('contact', slug.value) ?? getPage('contact', 'info')!)
usePageSeo(page.value.title, page.value.description)
</script>

<template>
  <SubPageContent :page="page" />
</template>
