import { u as useRoute$1, a as useLocalePath, g as getPage, n as navigateTo, b as usePageSeo } from '../virtual/entry.mjs';
import { S as SubPageContent_default } from './SubPageContent-Brz9xGW1.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';
import '@vue/shared';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'lucide-vue-next';

//#region app/pages/manufacturing/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute$1();
		const localePath = useLocalePath();
		const slug = computed(() => String(route.params.slug || "production"));
		if (!getPage("manufacturing", slug.value)) [__temp, __restore] = withAsyncContext(() => navigateTo(localePath("/manufacturing/production"), { redirectCode: 302 })), await __temp, __restore();
		const page = computed(() => getPage("manufacturing", slug.value) ?? getPage("manufacturing", "production"));
		usePageSeo(page.value.title, page.value.description);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(SubPageContent_default, mergeProps({ page: unref(page) }, _attrs), null, _parent));
		};
	}
});
//#endregion
//#region app/pages/manufacturing/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manufacturing/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = _slug__vue_vue_type_script_setup_true_lang_default;

export { _slug__default as default };
//# sourceMappingURL=_slug_-Cpaqfnbk.mjs.map
