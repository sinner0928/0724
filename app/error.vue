<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>(); const { locale } = useI18n(); const localePath = useLocalePath()
function goHome() { clearError({ redirect: localePath('/') }) }
</script>
<template><main class="error-page"><div><p class="eyebrow">{{ error.statusCode || 404 }}</p><h1>{{ locale === 'en' ? 'This page is not available.' : '页面暂时无法访问。' }}</h1><p>{{ locale === 'en' ? 'The address may have changed or the page may no longer exist.' : '该地址可能已变更，或页面暂不存在。' }}</p><button class="button" @click="goHome">{{ locale === 'en' ? 'Back to home' : '返回首页' }}</button></div></main></template>
