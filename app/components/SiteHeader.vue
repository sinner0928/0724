<script setup lang="ts">
import { ChevronDown, Globe2, Menu, Search, X } from 'lucide-vue-next'
import { getNavByPath, localeText, navItems, searchIndex } from '~/data/site'

const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const menuOpen = ref(false)
const languageOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const hoveredNavKey = ref<string | null>(null)

const activeState = computed(() => getNavByPath(route.path))
const activeChildKey = computed(() => route.hash.replace(/^#/, '') || activeState.value.activeChild?.key)
const currentNav = computed(() => navItems.find((item) => item.key === hoveredNavKey.value) ?? null)
const showSubNav = computed(() => !!currentNav.value?.children?.length && currentNav.value.key !== 'home')
const subNavChildren = computed(() => currentNav.value?.children ?? [])
const routeChildren = computed(() => activeState.value.activeNav.children ?? [])
const localizedSearchIndex = computed(() => searchIndex.map((item) => ({
  ...item,
  localizedLabel: localeText(item.label, locale.value),
  localizedDescription: localeText(item.description, locale.value)
})))
const searchResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return localizedSearchIndex.value.slice(0, 6)
  return localizedSearchIndex.value
    .filter((item) => `${item.localizedLabel} ${item.localizedDescription}`.toLowerCase().includes(query))
    .slice(0, 6)
})

function closeFloating() {
  menuOpen.value = false
  languageOpen.value = false
  searchOpen.value = false
  hoveredNavKey.value = null
}

function openSubNav(key: string) {
  hoveredNavKey.value = key
}

function clearSubNav() {
  hoveredNavKey.value = null
}

function goMain(item: typeof navItems[number]) {
  closeFloating()
  return navigateTo(localePath(item.key === 'home' ? '/' : item.path))
}

function goSearch(path: string) {
  searchQuery.value = ''
  closeFloating()
  return navigateTo(localePath(path))
}

async function changeLanguage(nextLocale: 'zh' | 'en') {
  localStorage.setItem('site-locale', nextLocale)
  languageOpen.value = false
  await setLocale(nextLocale)
}

watch(() => route.fullPath, () => closeFloating())

onMounted(async () => {
  const stored = localStorage.getItem('site-locale')
  if ((stored === 'zh' || stored === 'en') && stored !== locale.value) {
    await setLocale(stored)
  }
})
</script>

<template>
  <a class="skip-link" href="#main">{{ locale === 'en' ? 'Skip to content' : '跳到正文' }}</a>
  <header class="site-header" @mouseleave="clearSubNav">
    <div class="shell header-inner">
      <NuxtLink class="brand" :to="localePath('/')" :aria-label="t('siteName')">
        <img class="brand-logo" src="/assets/company-logo-wide.png" :alt="t('siteName')" />
      </NuxtLink>

      <nav class="desktop-nav" :aria-label="locale === 'en' ? 'Primary navigation' : '主导航'">
        <div
          v-for="item in navItems"
          :key="item.key"
          class="nav-item-group"
          @mouseenter="openSubNav(item.key)"
        >
          <button
            type="button"
            class="nav-link"
            :class="{ active: activeState.activeNav.key === item.key }"
            :aria-expanded="showSubNav && currentNav?.key === item.key ? 'true' : 'false'"
            :aria-current="activeState.activeNav.key === item.key ? 'page' : undefined"
            @focus="openSubNav(item.key)"
            @click="goMain(item)"
          >
            {{ localeText(item.label, locale) }}
          </button>

          <Transition name="subnav">
            <div v-if="showSubNav && currentNav?.key === item.key" class="subnav">
              <NuxtLink
                v-for="child in subNavChildren"
                :key="child.key"
                class="subnav-pill"
                :class="{ active: activeChildKey === child.key }"
                :to="localePath(child.path)"
                @click="clearSubNav"
              >
                {{ localeText(child.label, locale) }}
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </nav>

      <div class="header-actions">
        <div class="language-menu">
          <button class="icon-text-button" type="button" :aria-expanded="languageOpen" @click="languageOpen = !languageOpen">
            <Globe2 :size="17" />
            <span>{{ locale === 'zh' ? '中 / EN' : 'EN / 中' }}</span>
            <ChevronDown :size="15" />
          </button>
          <div v-if="languageOpen" class="popover language-popover">
            <button type="button" @click="changeLanguage('zh')">中文简体</button>
            <button type="button" @click="changeLanguage('en')">English</button>
          </div>
        </div>

        <div class="search-box" :class="{ expanded: searchOpen }">
          <button class="icon-button" type="button" :aria-label="t('cta.search')" @click="searchOpen = !searchOpen">
            <Search :size="18" />
          </button>
          <input
            v-if="searchOpen"
            v-model="searchQuery"
            :placeholder="locale === 'en' ? 'Search site' : '站内搜索'"
            type="search"
            :aria-label="locale === 'en' ? 'Search site' : '站内搜索'"
            @keydown.esc="searchOpen = false"
          />
          <div v-if="searchOpen" class="popover search-popover">
            <button v-for="result in searchResults" :key="result.path" type="button" @click="goSearch(result.path)">
              <strong>{{ result.localizedLabel }}</strong>
              <span>{{ result.localizedDescription }}</span>
            </button>
          </div>
        </div>

        <button class="menu-button" type="button" :aria-label="menuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          <X v-if="menuOpen" :size="23" />
          <Menu v-else :size="23" />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="menuOpen" class="mobile-nav">
        <div class="shell mobile-nav-inner">
          <button v-for="item in navItems" :key="item.key" type="button" @click="goMain(item)">
            {{ localeText(item.label, locale) }}
          </button>
          <NuxtLink
            v-for="child in routeChildren"
            :key="child.key"
            class="mobile-sub-link"
            :to="localePath(child.path)"
          >
            {{ localeText(child.label, locale) }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
