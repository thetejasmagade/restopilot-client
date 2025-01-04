import { cn } from '@/lib/utils';
import { Circle } from 'lucide-vue-next';
import { RadioGroupIndicator, RadioGroupItem, useForwardProps, } from 'radix-vue';
import { computed } from 'vue';
const props = defineProps();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwardedProps = useForwardProps(delegatedProps); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.RadioGroupItem;
    /** @type { [typeof __VLS_components.RadioGroupItem, typeof __VLS_components.RadioGroupItem, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...(__VLS_ctx.forwardedProps),
        ...{ class: ((__VLS_ctx.cn('aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class))) },
    }));
    const __VLS_2 = __VLS_1({
        ...(__VLS_ctx.forwardedProps),
        ...{ class: ((__VLS_ctx.cn('aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class))) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.RadioGroupIndicator;
    /** @type { [typeof __VLS_components.RadioGroupIndicator, typeof __VLS_components.RadioGroupIndicator, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...{ class: ("flex items-center justify-center") },
    }));
    const __VLS_9 = __VLS_8({
        ...{ class: ("flex items-center justify-center") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.Circle;
    /** @type { [typeof __VLS_components.Circle, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ class: ("h-2.5 w-2.5 fill-current text-current") },
    }));
    const __VLS_15 = __VLS_14({
        ...{ class: ("h-2.5 w-2.5 fill-current text-current") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_12.slots.default;
    var __VLS_12;
    __VLS_5.slots.default;
    var __VLS_5;
    ['flex', 'items-center', 'justify-center', 'h-2.5', 'w-2.5', 'fill-current', 'text-current',];
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
            Circle: Circle,
            RadioGroupIndicator: RadioGroupIndicator,
            RadioGroupItem: RadioGroupItem,
            forwardedProps: forwardedProps,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
