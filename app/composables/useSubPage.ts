import { getPage, usePageSeo, type PageGroup } from '~/data/site'

export function useSubPage(group: PageGroup, defaultSlug: string) {
  const route = useRoute()
  const localePath = useLocalePath()
  const slug = computed(() => String(route.params.slug || defaultSlug))

  if (!getPage(group, slug.value)) {
    navigateTo(localePath(`/${group}/${defaultSlug}`), { redirectCode: 302 })
  }

  const page = computed(() => getPage(group, slug.value) ?? getPage(group, defaultSlug)!)
  usePageSeo(page.value.title, page.value.description, page.value.image)
  return page
}
