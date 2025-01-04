import { cn } from '@/lib/utils';
import { Primitive } from 'radix-vue';
import { buttonVariants } from '.';
const props = withDefaults(defineProps(), {
    as: 'button',
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    as: 'button',
});
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.Primitive;
    /** @type { [typeof __VLS_components.Primitive, typeof __VLS_components.Primitive, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        as: ((__VLS_ctx.as)),
        asChild: ((__VLS_ctx.asChild)),
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: __VLS_ctx.variant, size: __VLS_ctx.size }), props.class))) },
    }));
    const __VLS_2 = __VLS_1({
        as: ((__VLS_ctx.as)),
        asChild: ((__VLS_ctx.asChild)),
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: __VLS_ctx.variant, size: __VLS_ctx.size }), props.class))) },
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
            Primitive: Primitive,
            buttonVariants: buttonVariants,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
