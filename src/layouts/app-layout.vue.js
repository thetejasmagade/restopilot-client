import { useRoute } from 'vue-router';
import { useBaseStore } from '@/stores/useBaseStore';
import Sidebar from '@/components/layouts/Sidebar.vue';
import Navbar from '@/components/layouts/Navbar.vue';
const baseStore = useBaseStore();
const route = useRoute(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-inter flex items-start justify-start w-full") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-screen overflow-hidden transition-all duration-300 ease-in-out border-r bg-gray-100 dark:bg-[#18181B] lg:block") },
        ...{ class: (([__VLS_ctx.route.name == 'ManagePage' ? 'w-[40%] lg:w-[16vw]' : 'w-0', __VLS_ctx.baseStore.getIsFoodItemsSectionOpen ? 'block' : 'hidden'])) },
    });
    // @ts-ignore
    /** @type { [typeof Sidebar, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full h-screen bg-background dark:bg-[#09090B]") },
    });
    // @ts-ignore
    /** @type { [typeof Navbar, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    var __VLS_10 = {};
    ['font-inter', 'flex', 'items-start', 'justify-start', 'w-full', 'h-screen', 'overflow-hidden', 'transition-all', 'duration-300', 'ease-in-out', 'border-r', 'bg-gray-100', 'dark:bg-[#18181B]', 'lg:block', 'w-full', 'h-screen', 'bg-background', 'dark:bg-[#09090B]',];
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
            Sidebar: Sidebar,
            Navbar: Navbar,
            baseStore: baseStore,
            route: route,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
