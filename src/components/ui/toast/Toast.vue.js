import { cn } from '@/lib/utils';
import { ToastRoot, useForwardPropsEmits } from 'radix-vue';
import { computed } from 'vue';
import { toastVariants } from '.';
const props = defineProps();
const emits = defineEmits();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ToastRoot;
    /** @type { [typeof __VLS_components.ToastRoot, typeof __VLS_components.ToastRoot, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onUpdate:open': {} },
        ...(__VLS_ctx.forwarded),
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.toastVariants({ variant: __VLS_ctx.variant }), props.class))) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onUpdate:open': {} },
        ...(__VLS_ctx.forwarded),
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.toastVariants({ variant: __VLS_ctx.variant }), props.class))) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        'onUpdate:open': (__VLS_ctx.onOpenChange)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_9 = {};
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
            ToastRoot: ToastRoot,
            toastVariants: toastVariants,
            forwarded: forwarded,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
