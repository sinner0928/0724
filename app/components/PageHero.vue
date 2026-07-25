<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string; image?: string }>()
</script>

<template>
  <section class="page-hero">
    <div class="page-hero-grid" aria-hidden="true"></div>
    <div class="shell page-hero-content">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </section>
</template>
