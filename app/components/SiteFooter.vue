<script setup lang="ts">
import { ArrowUpRight, Linkedin, MessageSquareText } from 'lucide-vue-next'
import { localeText, navItems } from '~/data/site'

const { locale, t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div class="footer-brand">
        <NuxtLink class="brand brand-light" :to="localePath('/')">
          <img class="brand-logo" src="/assets/company-logo-wide.png" :alt="t('siteName')" />
        </NuxtLink>
        <p>{{ t('footer.summary') }}</p>
        <NuxtLink class="text-link text-link-light" :to="localePath('/contact/inquiry')">
          {{ t('cta.contact') }} <ArrowUpRight :size="16" />
        </NuxtLink>
      </div>

      <div class="footer-links-group" v-for="item in navItems.slice(1)" :key="item.key">
        <h3>{{ localeText(item.label, locale) }}</h3>
        <nav class="footer-links">
          <NuxtLink v-for="child in item.children" :key="child.key" :to="localePath(child.path)">
            {{ localeText(child.label, locale) }}
          </NuxtLink>
        </nav>
      </div>

      <div class="footer-follow">
        <h3>{{ t('footer.follow') }}</h3>
        <div class="qr-box">
          <MessageSquareText :size="24" />
          <span>{{ locale === 'en' ? 'WeChat official account' : '微信公众号二维码' }}</span>
        </div>
        <a href="#" aria-label="LinkedIn"><Linkedin :size="17" /> LinkedIn</a>
      </div>
    </div>
    <div class="shell footer-bottom">
      <span>© 2025 {{ t('siteName') }} {{ t('footer.rights') }} | {{ t('footer.record') }}</span>
      <span>{{ t('footer.privacy') }} · {{ t('footer.terms') }}</span>
    </div>
  </footer>
</template>
