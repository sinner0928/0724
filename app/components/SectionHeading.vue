<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; description?: string; light?: boolean }>()
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading-light': light }">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>
