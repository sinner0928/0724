import { defaultChildRoutes, validRoutes } from '~/data/site'

export default defineNuxtRouteMiddleware((to) => {
  const localePrefix = to.path.startsWith('/en') ? '/en' : ''
  const normalized = localePrefix ? to.path.slice(localePrefix.length) || '/' : to.path

  if (defaultChildRoutes[normalized]) {
    return navigateTo(`${localePrefix}${defaultChildRoutes[normalized]}`, { redirectCode: 302 })
  }

  if (to.matched.length === 0 && !validRoutes.has(normalized)) {
    return navigateTo(localePrefix || '/', { redirectCode: 302 })
  }
})
