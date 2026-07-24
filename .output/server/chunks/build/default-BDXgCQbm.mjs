import { _ as _plugin_vue_export_helper_default, c as useI18n, a as useLocalePath, u as useRoute$1, d as getNavByPath, e as navItems, s as searchIndex, l as localeText, N as NuxtLink } from '../virtual/entry.mjs';
import { mergeProps, defineComponent, ref, computed, watch, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Globe2, ChevronDown, Search, X, Menu, ArrowUpRight, MessageSquareText, Linkedin } from 'lucide-vue-next';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue-router';
import '@vue/shared';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

//#region \0virtual:public?%2Fassets%2Fcompany-logo-wide.png
var _virtual_public__2Fassets_2Fcompany_logo_wide_default = publicAssetsURL("/assets/company-logo-wide.png");
//#endregion
//#region app/components/SiteHeader.vue?vue&type=script&setup=true&lang.ts
var SiteHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SiteHeader",
	__ssrInlineRender: true,
	setup(__props) {
		const { locale, setLocale, t } = useI18n();
		const localePath = useLocalePath();
		const route = useRoute$1();
		const menuOpen = ref(false);
		const languageOpen = ref(false);
		const searchOpen = ref(false);
		const searchQuery = ref("");
		const hoveredNavKey = ref(null);
		const activeState = computed(() => getNavByPath(route.path));
		const currentNav = computed(() => navItems.find((item) => item.key === hoveredNavKey.value) ?? null);
		const showSubNav = computed(() => !!currentNav.value?.children?.length && currentNav.value.key !== "home");
		const subNavChildren = computed(() => currentNav.value?.children ?? []);
		const routeChildren = computed(() => activeState.value.activeNav.children ?? []);
		const localizedSearchIndex = computed(() => searchIndex.map((item) => ({
			...item,
			localizedLabel: localeText(item.label, locale.value),
			localizedDescription: localeText(item.description, locale.value)
		})));
		const searchResults = computed(() => {
			const query = searchQuery.value.trim().toLowerCase();
			if (!query) return localizedSearchIndex.value.slice(0, 6);
			return localizedSearchIndex.value.filter((item) => `${item.localizedLabel} ${item.localizedDescription}`.toLowerCase().includes(query)).slice(0, 6);
		});
		function closeFloating() {
			menuOpen.value = false;
			languageOpen.value = false;
			searchOpen.value = false;
			hoveredNavKey.value = null;
		}
		function clearSubNav() {
			hoveredNavKey.value = null;
		}
		watch(() => route.fullPath, () => closeFloating());
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<!--[--><a class="skip-link" href="#main">${ssrInterpolate(unref(locale) === "en" ? "Skip to content" : "跳到正文")}</a><header class="site-header"><div class="shell header-inner">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				class: "brand",
				to: unref(localePath)("/"),
				"aria-label": unref(t)("siteName")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img class="brand-logo"${ssrRenderAttr("src", _virtual_public__2Fassets_2Fcompany_logo_wide_default)}${ssrRenderAttr("alt", unref(t)("siteName"))}${_scopeId}>`);
					else return [createVNode("img", {
						class: "brand-logo",
						src: _virtual_public__2Fassets_2Fcompany_logo_wide_default,
						alt: unref(t)("siteName")
					}, null, 8, ["alt"])];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="desktop-nav"${ssrRenderAttr("aria-label", unref(locale) === "en" ? "Primary navigation" : "主导航")}><!--[-->`);
			ssrRenderList(unref(navItems), (item) => {
				_push(`<div class="nav-item-group"><button type="button" class="${ssrRenderClass([{ active: unref(activeState).activeNav.key === item.key }, "nav-link"])}"${ssrRenderAttr("aria-expanded", unref(showSubNav) && unref(currentNav)?.key === item.key ? "true" : "false")}>${ssrInterpolate(unref(localeText)(item.label, unref(locale)))}</button>`);
				if (unref(showSubNav) && unref(currentNav)?.key === item.key) {
					_push(`<div class="subnav"><!--[-->`);
					ssrRenderList(unref(subNavChildren), (child) => {
						_push(ssrRenderComponent(_component_NuxtLink, {
							key: child.key,
							class: ["subnav-pill", { active: unref(activeState).activeChild?.key === child.key }],
							to: unref(localePath)(child.path),
							onClick: clearSubNav
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(localeText)(child.label, unref(locale)))}`);
								else return [createTextVNode(toDisplayString(unref(localeText)(child.label, unref(locale))), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></nav><div class="header-actions"><div class="language-menu"><button class="icon-text-button" type="button"${ssrRenderAttr("aria-expanded", unref(languageOpen))}>`);
			_push(ssrRenderComponent(unref(Globe2), { size: 17 }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(locale) === "zh" ? "中 / EN" : "EN / 中")}</span>`);
			_push(ssrRenderComponent(unref(ChevronDown), { size: 15 }, null, _parent));
			_push(`</button>`);
			if (unref(languageOpen)) _push(`<div class="popover language-popover"><button type="button">中文简体</button><button type="button">English</button></div>`);
			else _push(`<!---->`);
			_push(`</div><div class="${ssrRenderClass([{ expanded: unref(searchOpen) }, "search-box"])}"><button class="icon-button" type="button"${ssrRenderAttr("aria-label", unref(t)("cta.search"))}>`);
			_push(ssrRenderComponent(unref(Search), { size: 18 }, null, _parent));
			_push(`</button>`);
			if (unref(searchOpen)) _push(`<input${ssrRenderAttr("value", unref(searchQuery))}${ssrRenderAttr("placeholder", unref(locale) === "en" ? "Search site" : "站内搜索")} type="search">`);
			else _push(`<!---->`);
			if (unref(searchOpen)) {
				_push(`<div class="popover search-popover"><!--[-->`);
				ssrRenderList(unref(searchResults), (result) => {
					_push(`<button type="button"><strong>${ssrInterpolate(result.localizedLabel)}</strong><span>${ssrInterpolate(result.localizedDescription)}</span></button>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</div><button class="menu-button" type="button"${ssrRenderAttr("aria-label", unref(menuOpen) ? "Close menu" : "Open menu")}${ssrRenderAttr("aria-expanded", unref(menuOpen))}>`);
			if (unref(menuOpen)) _push(ssrRenderComponent(unref(X), { size: 23 }, null, _parent));
			else _push(ssrRenderComponent(unref(Menu), { size: 23 }, null, _parent));
			_push(`</button></div></div>`);
			if (unref(menuOpen)) {
				_push(`<div class="mobile-nav"><div class="shell mobile-nav-inner"><!--[-->`);
				ssrRenderList(unref(navItems), (item) => {
					_push(`<button type="button">${ssrInterpolate(unref(localeText)(item.label, unref(locale)))}</button>`);
				});
				_push(`<!--]--><!--[-->`);
				ssrRenderList(unref(routeChildren), (child) => {
					_push(ssrRenderComponent(_component_NuxtLink, {
						key: child.key,
						class: "mobile-sub-link",
						to: unref(localePath)(child.path)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(localeText)(child.label, unref(locale)))}`);
							else return [createTextVNode(toDisplayString(unref(localeText)(child.label, unref(locale))), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</header><!--]-->`);
		};
	}
});
//#endregion
//#region app/components/SiteHeader.vue
var _sfc_setup$2 = SiteHeader_vue_vue_type_script_setup_true_lang_default.setup;
SiteHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SiteHeader_default = Object.assign(SiteHeader_vue_vue_type_script_setup_true_lang_default, { __name: "SiteHeader" });
//#endregion
//#region app/components/SiteFooter.vue?vue&type=script&setup=true&lang.ts
var SiteFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SiteFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const { locale, t } = useI18n();
		const localePath = useLocalePath();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))}><div class="shell footer-grid"><div class="footer-brand">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				class: "brand brand-light",
				to: unref(localePath)("/")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img class="brand-logo"${ssrRenderAttr("src", _virtual_public__2Fassets_2Fcompany_logo_wide_default)}${ssrRenderAttr("alt", unref(t)("siteName"))}${_scopeId}>`);
					else return [createVNode("img", {
						class: "brand-logo",
						src: _virtual_public__2Fassets_2Fcompany_logo_wide_default,
						alt: unref(t)("siteName")
					}, null, 8, ["alt"])];
				}),
				_: 1
			}, _parent));
			_push(`<p>${ssrInterpolate(unref(t)("footer.summary"))}</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				class: "text-link text-link-light",
				to: unref(localePath)("/contact/inquiry")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`${ssrInterpolate(unref(t)("cta.contact"))} `);
						_push(ssrRenderComponent(unref(ArrowUpRight), { size: 16 }, null, _parent, _scopeId));
					} else return [createTextVNode(toDisplayString(unref(t)("cta.contact")) + " ", 1), createVNode(unref(ArrowUpRight), { size: 16 })];
				}),
				_: 1
			}, _parent));
			_push(`</div><!--[-->`);
			ssrRenderList(unref(navItems).slice(1), (item) => {
				_push(`<div class="footer-links-group"><h3>${ssrInterpolate(unref(localeText)(item.label, unref(locale)))}</h3><nav class="footer-links"><!--[-->`);
				ssrRenderList(item.children, (child) => {
					_push(ssrRenderComponent(_component_NuxtLink, {
						key: child.key,
						to: unref(localePath)(child.path)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(localeText)(child.label, unref(locale)))}`);
							else return [createTextVNode(toDisplayString(unref(localeText)(child.label, unref(locale))), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></nav></div>`);
			});
			_push(`<!--]--><div class="footer-follow"><h3>${ssrInterpolate(unref(t)("footer.follow"))}</h3><div class="qr-box">`);
			_push(ssrRenderComponent(unref(MessageSquareText), { size: 24 }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(locale) === "en" ? "WeChat official account" : "微信公众号二维码")}</span></div><a href="#" aria-label="LinkedIn">`);
			_push(ssrRenderComponent(unref(Linkedin), { size: 17 }, null, _parent));
			_push(` LinkedIn</a></div></div><div class="shell footer-bottom"><span>© 2025 ${ssrInterpolate(unref(t)("siteName"))} ${ssrInterpolate(unref(t)("footer.rights"))} | ${ssrInterpolate(unref(t)("footer.record"))}</span><span>${ssrInterpolate(unref(t)("footer.privacy"))} · ${ssrInterpolate(unref(t)("footer.terms"))}</span></div></footer>`);
		};
	}
});
//#endregion
//#region app/components/SiteFooter.vue
var _sfc_setup$1 = SiteFooter_vue_vue_type_script_setup_true_lang_default.setup;
SiteFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SiteFooter_default = Object.assign(SiteFooter_vue_vue_type_script_setup_true_lang_default, { __name: "SiteFooter" });
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_SiteHeader = SiteHeader_default;
	const _component_SiteFooter = SiteFooter_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "site-frame" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
	_push(`<main id="main">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main>`);
	_push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-BDXgCQbm.mjs.map
