import { cn } from '@/lib/utils';
import { ToastDescription } from 'radix-vue';
import { computed } from 'vue';
const props = defineProps();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ToastDescription;
    /** @type { [typeof __VLS_components.ToastDescription, typeof __VLS_components.ToastDescription, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ((__VLS_ctx.cn('text-sm opacity-90', props.class))) },
        ...(__VLS_ctx.delegatedProps),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ((__VLS_ctx.cn('text-sm opacity-90', props.class))) },
        ...(__VLS_ctx.delegatedProps),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    var __VLS_7 = {};
    __VLS_5.slots.default;
    var __VLS_5;
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
            cn: cn,
            ToastDescription: ToastDescription,
            delegatedProps: delegatedProps,
        };
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
