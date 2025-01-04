import { useBaseStore } from "@/stores/useBaseStore";
import FoodItemsSection from "@/components/manage/FoodItemsSection.vue";
import BillingSection from "@/components/manage/BillingSection.vue";
const baseStore = useBaseStore(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-start justify-between divide-x-0 lg:divide-x h-[93vh] max-h-[93vh]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ((__VLS_ctx.baseStore.getIsFoodItemsSectionOpen ? 'block' : 'hidden')) },
        ...{ class: ("lg:block w-full lg:w-1/2 p-2 h-full") },
    });
    // @ts-ignore
    /** @type { [typeof FoodItemsSection, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(FoodItemsSection, new FoodItemsSection({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ((__VLS_ctx.baseStore.getIsFoodItemsSectionOpen ? 'hidden' : 'block')) },
        ...{ class: ("lg:block w-full lg:w-1/2  h-full") },
    });
    // @ts-ignore
    /** @type { [typeof BillingSection, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BillingSection, new BillingSection({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ['flex', 'items-start', 'justify-between', 'divide-x-0', 'lg:divide-x', 'h-[93vh]', 'max-h-[93vh]', 'lg:block', 'w-full', 'lg:w-1/2', 'p-2', 'h-full', 'lg:block', 'w-full', 'lg:w-1/2', 'h-full',];
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
            FoodItemsSection: FoodItemsSection,
            BillingSection: BillingSection,
            baseStore: baseStore,
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
