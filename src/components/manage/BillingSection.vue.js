import { ref } from "vue";
import BillTable from '@/components/manage/billing/BillTable.vue';
const selectedTab = ref(1);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex w-full h-[6vh] divide-x-2") },
    });
    for (const [i] of __VLS_getVForSourceType((3))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectedTab = i;
                } },
            key: ((i)),
            ...{ class: ("w-1/3 flex items-center justify-center cursor-pointer") },
            ...{ class: ((__VLS_ctx.selectedTab == i
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-[#18181B] dark:hover:bg-gray-800')) },
        });
        (i == 1 ? "Dine In" : i == 2 ? "Delivery" : "Pickup");
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    /** @type { [typeof BillTable, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BillTable, new BillTable({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ['flex', 'w-full', 'h-[6vh]', 'divide-x-2', 'w-1/3', 'flex', 'items-center', 'justify-center', 'cursor-pointer',];
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
            BillTable: BillTable,
            selectedTab: selectedTab,
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
