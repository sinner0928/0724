<script setup lang="ts">
definePageMeta({
  middleware: (to) => {
    if (String(to.params.slug) === 'visit') {
      const localePrefix = to.path.startsWith('/en/') ? '/en' : ''
      return navigateTo(`${localePrefix}/contact#inquiry`, { redirectCode: 302 })
    }
  }
})

const page = useSubPage('contact', 'info')
</script>

<template>
  <SubPageContent :page="page" />
</template>
