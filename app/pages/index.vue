<script setup lang="ts">
import { usePageSeo } from '~/data/site'

usePageSeo(
  { zh: '无线连接芯片与模组制造商', en: 'Wireless Connectivity Chip & Module Manufacturer' },
  { zh: '壹原理科技围绕蓝牙、2.4G、NFC 等方向，提供芯片设计、模组制造、测试验证与量产交付支持。', en: 'YiYuanLi supports Bluetooth, 2.4G, NFC and related directions with chip design, module manufacturing, testing validation and production delivery.' }
)
</script>

<template>
  <HomeHero />
  <HomeCapabilityStats />
  <HomeAbout />
  <HomeProductTiles />
  <HomeFootprint />
  <HomeSupport />
</template>
