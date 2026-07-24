<script setup lang="ts">
const localePath = useLocalePath()
await navigateTo(localePath('/about/company'), { redirectCode: 302 })
</script>

<template></template>
