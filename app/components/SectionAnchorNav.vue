<script setup lang="ts">
import { type LocaleText } from '~/data/site'

const props = defineProps<{
  items: Array<{ id: string; label: LocaleText }>
  label: string
}>()

const route = useRoute()
const { locale } = useI18n()
const active = ref(props.items[0]?.id ?? '')
let observer: IntersectionObserver | undefined

function text(value: LocaleText) {
  return locale.value === 'en' ? value.en : value.zh
}

function syncActive() {
  const id = route.hash.replace('#', '')
  if (props.items.some((item) => item.id === id)) active.value = id
}

onMounted(() => {
  syncActive()
  observer = new IntersectionObserver((entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (current) active.value = current.target.id
  }, { rootMargin: '-150px 0px -52%', threshold: [0.1, 0.35, 0.6] })

  props.items.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) observer?.observe(element)
  })
})

watch(() => route.hash, syncActive)
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <nav class="section-anchor-nav" :aria-label="label">
    <div class="shell section-anchor-list">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: active === item.id }"
        :aria-current="active === item.id ? 'location' : undefined"
        @click="active = item.id"
      >
        {{ text(item.label) }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.section-anchor-nav { position: sticky; top: 72px; z-index: 30; border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.98); }
.section-anchor-list { display: grid; grid-auto-columns: minmax(0, 1fr); grid-auto-flow: column; }
.section-anchor-list a { position: relative; min-height: 54px; display: flex; align-items: center; justify-content: center; color: var(--muted); font-size: 14px; font-weight: 700; transition: color 0.2s ease, background 0.2s ease; }
.section-anchor-list a::after { content: ""; position: absolute; right: 20px; bottom: 0; left: 20px; height: 3px; background: var(--accent); transform: scaleX(0); transition: transform 0.2s ease; }
.section-anchor-list a:hover, .section-anchor-list a.active { color: var(--primary); background: var(--paper); }
.section-anchor-list a.active::after { transform: scaleX(1); }
@media (max-width: 820px) { .section-anchor-nav { top: 68px; } }
@media (max-width: 640px) {
  .section-anchor-list { width: 100%; overflow-x: auto; scrollbar-width: none; }
  .section-anchor-list::-webkit-scrollbar { display: none; }
  .section-anchor-list a { min-width: 112px; min-height: 50px; padding: 0 12px; font-size: 13px; text-align: center; white-space: nowrap; }
  .section-anchor-list a::after { right: 12px; left: 12px; }
}
</style>
