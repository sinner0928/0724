<script setup lang="ts">
const page = useSubPage('products', 'detail')
</script>

<template>
  <SubPageContent :page="page" />
</template>
