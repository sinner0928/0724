<script setup lang="ts">
const { locale } = useI18n()
useHead({ htmlAttrs: { lang: () => locale.value === 'en' ? 'en-US' : 'zh-CN' } })
</script>

<template><div class="site-frame"><SiteHeader /><main id="main"><slot /></main><SiteFooter /></div></template>
