import { cn } from '@/lib/utils';
import { X } from 'lucide-vue-next';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits, } from 'radix-vue';
import { computed } from 'vue';
import { sheetVariants } from '.';
defineOptions({
    inheritAttrs: false,
});
const props = defineProps();
const emits = defineEmits();
const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.DialogPortal;
    /** @type { [typeof __VLS_components.DialogPortal, typeof __VLS_components.DialogPortal, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.DialogOverlay;
    /** @type { [typeof __VLS_components.DialogOverlay, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ class: ("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0") },
    }));
    const __VLS_8 = __VLS_7({
        ...{ class: ("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.DialogContent;
    /** @type { [typeof __VLS_components.DialogContent, typeof __VLS_components.DialogContent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.sheetVariants({ side: __VLS_ctx.side }), props.class))) },
        ...({ ...__VLS_ctx.forwarded, ...$attrs }),
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ((__VLS_ctx.cn(__VLS_ctx.sheetVariants({ side: __VLS_ctx.side }), props.class))) },
        ...({ ...__VLS_ctx.forwarded, ...$attrs }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    var __VLS_18 = {};
    const __VLS_19 = {}.DialogClose;
    /** @type { [typeof __VLS_components.DialogClose, typeof __VLS_components.DialogClose, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
        ...{ class: ("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary") },
    }));
    const __VLS_21 = __VLS_20({
        ...{ class: ("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = {}.X;
    /** @type { [typeof __VLS_components.X, ] } */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        ...{ class: ("w-4 h-4 text-muted-foreground") },
    }));
    const __VLS_27 = __VLS_26({
        ...{ class: ("w-4 h-4 text-muted-foreground") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_24.slots.default;
    var __VLS_24;
    __VLS_17.slots.default;
    var __VLS_17;
    __VLS_5.slots.default;
    var __VLS_5;
    ['fixed', 'inset-0', 'z-50', 'bg-black/80', 'data-[state=open]:animate-in', 'data-[state=closed]:animate-out', 'data-[state=closed]:fade-out-0', 'data-[state=open]:fade-in-0', 'absolute', 'right-4', 'top-4', 'rounded-sm', 'opacity-70', 'ring-offset-background', 'transition-opacity', 'hover:opacity-100', 'focus:outline-none', 'focus:ring-2', 'focus:ring-ring', 'focus:ring-offset-2', 'disabled:pointer-events-none', 'data-[state=open]:bg-secondary', 'w-4', 'h-4', 'text-muted-foreground',];
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
            X: X,
            DialogClose: DialogClose,
            DialogContent: DialogContent,
            DialogOverlay: DialogOverlay,
            DialogPortal: DialogPortal,
            sheetVariants: sheetVariants,
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
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
