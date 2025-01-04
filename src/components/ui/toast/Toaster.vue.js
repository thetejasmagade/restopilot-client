import { isVNode } from 'vue';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '.';
import { useToast } from './use-toast';
const { toasts } = useToast(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ToastProvider;
    /** @type { [typeof __VLS_components.ToastProvider, typeof __VLS_components.ToastProvider, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    for (const [toast] of __VLS_getVForSourceType((__VLS_ctx.toasts))) {
        const __VLS_7 = {}.Toast;
        /** @type { [typeof __VLS_components.Toast, typeof __VLS_components.Toast, ] } */ ;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
            key: ((toast.id)),
            ...(toast),
        }));
        const __VLS_9 = __VLS_8({
            key: ((toast.id)),
            ...(toast),
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid gap-1") },
        });
        if (toast.title) {
            const __VLS_13 = {}.ToastTitle;
            /** @type { [typeof __VLS_components.ToastTitle, typeof __VLS_components.ToastTitle, ] } */ ;
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
            const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
            (toast.title);
            __VLS_18.slots.default;
            var __VLS_18;
        }
        if (toast.description) {
            if (__VLS_ctx.isVNode(toast.description)) {
                const __VLS_19 = {}.ToastDescription;
                /** @type { [typeof __VLS_components.ToastDescription, typeof __VLS_components.ToastDescription, ] } */ ;
                // @ts-ignore
                const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
                const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
                const __VLS_25 = ((toast.description));
                // @ts-ignore
                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
                const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
                __VLS_24.slots.default;
                var __VLS_24;
            }
            else {
                const __VLS_31 = {}.ToastDescription;
                /** @type { [typeof __VLS_components.ToastDescription, typeof __VLS_components.ToastDescription, ] } */ ;
                // @ts-ignore
                const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
                const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
                (toast.description);
                __VLS_36.slots.default;
                var __VLS_36;
            }
        }
        const __VLS_37 = {}.ToastClose;
        /** @type { [typeof __VLS_components.ToastClose, ] } */ ;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
        const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
        const __VLS_43 = ((toast.action));
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
        const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
        __VLS_12.slots.default;
        var __VLS_12;
    }
    const __VLS_49 = {}.ToastViewport;
    /** @type { [typeof __VLS_components.ToastViewport, ] } */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
    const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_5.slots.default;
    var __VLS_5;
    ['grid', 'gap-1',];
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
            isVNode: isVNode,
            Toast: Toast,
            ToastClose: ToastClose,
            ToastDescription: ToastDescription,
            ToastProvider: ToastProvider,
            ToastTitle: ToastTitle,
            ToastViewport: ToastViewport,
            toasts: toasts,
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
