import { a as useLocalePath, n as navigateTo } from '../virtual/entry.mjs';
import { defineComponent, withAsyncContext, useSSRContext } from 'vue';
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
import 'vue/server-renderer';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region app/pages/manufacturing/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const localePath = useLocalePath();
		[__temp, __restore] = withAsyncContext(() => navigateTo(localePath("/manufacturing/production"), { redirectCode: 302 })), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {};
	}
});
//#endregion
//#region app/pages/manufacturing/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manufacturing/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var manufacturing_default = index_vue_vue_type_script_setup_true_lang_default;

export { manufacturing_default as default };
//# sourceMappingURL=manufacturing-DrroBFn8.mjs.map
