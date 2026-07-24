<script setup lang="ts">
const localePath = useLocalePath()
await navigateTo(localePath('/products/detail'), { redirectCode: 302 })
</script>

<template></template>
