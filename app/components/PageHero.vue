<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string; image: string }>()
</script>

<template>
  <section class="page-hero">
    <img class="page-hero-media" :src="image" :alt="title" loading="eager" />
    <div class="page-hero-grid" aria-hidden="true"></div>
    <div class="shell page-hero-content">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </section>
</template>
