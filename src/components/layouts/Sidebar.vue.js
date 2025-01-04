import { ref } from "vue";
import { useBaseStore } from '@/stores/useBaseStore';
const baseStore = useBaseStore();
// Retrieve filters from localStorage and ensure it's typed correctly
const filters = ref(JSON.parse(localStorage.getItem("data") || "null")?.filters || []);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
        ...{ class: ("px-2 py-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xs px-2 font-medium") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("mt-3") },
    });
    for (const [filter, i] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.baseStore.handleSelectedFilter(filter);
                } },
            ...{ class: ("cursor-pointer my-1") },
            key: ((i)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("p-2 rounded-md") },
            ...{ class: (([__VLS_ctx.baseStore.selectedFoodType.id === filter.id ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'])) },
        });
        (filter.value);
    }
    ['px-2', 'py-3', 'text-xs', 'px-2', 'font-medium', 'mt-3', 'cursor-pointer', 'my-1', 'p-2', 'rounded-md',];
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
            baseStore: baseStore,
            filters: filters,
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
