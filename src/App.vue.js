import { computed } from 'vue';
import AppLayout from '@/layouts/app-layout.vue';
import DefaultLayout from '@/layouts/default.vue';
import Toaster from '@/components/ui/toast/Toaster.vue';
const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');
// Determine which layout to use based on authentication state
const layout = computed(() => isAuthenticated ? AppLayout : DefaultLayout);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = ((__VLS_ctx.layout));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_5.slots.default;
    var __VLS_5;
    // @ts-ignore
    /** @type { [typeof Toaster, ] } */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Toaster, new Toaster({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Toaster: Toaster,
            layout: layout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
