import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const baseStore = useBaseStore();
// List of dynamic payment methods
const paymentMethods = [
    { id: "cash", label: "Cash" },
    { id: "card", label: "Card" },
    { id: "upi", label: "UPI" },
];
// Handle input blur (when the user finishes editing the qty)
const handleInputBlur = (id) => {
    if (baseStore.selectedFoodArray[id].qty <= 0) {
        baseStore.removeFoodItem(id);
    }
    else {
        baseStore.updateTotalAmt(); // Ensure totalAmt is updated
    }
};
// Handle input change (allow only numbers)
const handleInputChange = (id, event) => {
    const input = event.target;
    // Replace any non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, "");
    baseStore.selectedFoodArray[id].qty = Number(input.value); // Update qty with the numeric value
    baseStore.updateTotalAmt(); // Ensure totalAmt is updated
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['responsive-h-scroll-div', 'responsive-h-scroll-div', 'responsive-h-scroll-div', 'responsive-h-scroll-div',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative overflow-x-auto h-[72vh] responsive-h-scroll-div") },
    });
    if (__VLS_ctx.baseStore.selectedFoodArray.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
            ...{ class: ("w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
            ...{ class: ("text-xs text-white uppercase bg-gray-800 dark:bg-[#4f4f53] dark:text-gray-200 sticky top-0 z-10") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            scope: ("col"),
            ...{ class: ("pl-2 lg:pl-4 py-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            scope: ("col"),
            ...{ class: ("pr-2 lg:pr-6 py-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            scope: ("col"),
            ...{ class: ("pl-2 lg:px-6 py-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            scope: ("col"),
            ...{ class: ("pl-2 lg:px-6 py-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.baseStore.selectedFoodArray))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
                key: ((i)),
                ...{ class: ("bg-gray-50 dark:bg-[#18181B] border-b dark:border-gray-700") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("pl-2 lg:pl-4 py-4") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                            return;
                        __VLS_ctx.baseStore.removeFoodItem(i);
                    } },
                src: ("@/assets/icons/base/cross.svg"),
                alt: ("cross-icon"),
                ...{ class: ("cursor-pointer") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                scope: ("row"),
                ...{ class: ("pl-2 lg:pl-0 pr-2 lg:pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white") },
            });
            (item.value);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-2 lg:px-6 py-4") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("qty-input-group relative flex items-center justify-between gap-2 max-w-[10rem]") },
            });
            // @ts-ignore
            /** @type { [typeof Button, typeof Button, ] } */ ;
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(Button, new Button({
                ...{ 'onClick': {} },
                variant: ("outline"),
                size: ("sm"),
            }));
            const __VLS_1 = __VLS_0({
                ...{ 'onClick': {} },
                variant: ("outline"),
                size: ("sm"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            let __VLS_5;
            const __VLS_6 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                        return;
                    __VLS_ctx.baseStore.handleIncrementDecrement('dec', i);
                }
            };
            let __VLS_2;
            let __VLS_3;
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                ...{ class: ("w-3 h-3 text-gray-900 dark:text-white") },
                'aria-hidden': ("true"),
                xmlns: ("http://www.w3.org/2000/svg"),
                fill: ("none"),
                viewBox: ("0 0 18 2"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                stroke: ("currentColor"),
                'stroke-linecap': ("round"),
                'stroke-linejoin': ("round"),
                'stroke-width': ("2"),
                d: ("M1 1h16"),
            });
            __VLS_4.slots.default;
            var __VLS_4;
            // @ts-ignore
            /** @type { [typeof Input, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(Input, new Input({
                ...{ 'onBlur': {} },
                ...{ 'onInput': {} },
                type: ("text"),
                modelValue: ((item.qty)),
                modelModifiers: { number: true, },
                maxlength: ("4"),
                ...{ class: ("h-8 px-1 lg:px-3 text-center block w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 text-black dark:text-white") },
                required: (true),
            }));
            const __VLS_8 = __VLS_7({
                ...{ 'onBlur': {} },
                ...{ 'onInput': {} },
                type: ("text"),
                modelValue: ((item.qty)),
                modelModifiers: { number: true, },
                maxlength: ("4"),
                ...{ class: ("h-8 px-1 lg:px-3 text-center block w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 text-black dark:text-white") },
                required: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            let __VLS_12;
            const __VLS_13 = {
                onBlur: (...[$event]) => {
                    if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                        return;
                    __VLS_ctx.handleInputBlur(i);
                }
            };
            const __VLS_14 = {
                onInput: (...[$event]) => {
                    if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                        return;
                    __VLS_ctx.handleInputChange(i, $event);
                }
            };
            let __VLS_9;
            let __VLS_10;
            var __VLS_11;
            // @ts-ignore
            /** @type { [typeof Button, typeof Button, ] } */ ;
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(Button, new Button({
                ...{ 'onClick': {} },
                variant: ("outline"),
                size: ("sm"),
            }));
            const __VLS_16 = __VLS_15({
                ...{ 'onClick': {} },
                variant: ("outline"),
                size: ("sm"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            let __VLS_20;
            const __VLS_21 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                        return;
                    __VLS_ctx.baseStore.handleIncrementDecrement('inc', i);
                }
            };
            let __VLS_17;
            let __VLS_18;
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                ...{ class: ("w-3 h-3 text-gray-900 dark:text-white") },
                'aria-hidden': ("true"),
                xmlns: ("http://www.w3.org/2000/svg"),
                fill: ("none"),
                viewBox: ("0 0 18 18"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                stroke: ("currentColor"),
                'stroke-linecap': ("round"),
                'stroke-linejoin': ("round"),
                'stroke-width': ("2"),
                d: ("M9 1v16M1 9h16"),
            });
            __VLS_19.slots.default;
            var __VLS_19;
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-2 lg:px-6 py-4 font-semibold text-base") },
            });
            (item.price);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex lg:hidden items-center justify-center h-full") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col items-center justify-center") },
        });
        // @ts-ignore
        /** @type { [typeof Button, typeof Button, ] } */ ;
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(Button, new Button({
            ...{ 'onClick': {} },
            ...{ class: ("my-3 block lg:hidden") },
        }));
        const __VLS_23 = __VLS_22({
            ...{ 'onClick': {} },
            ...{ class: ("my-3 block lg:hidden") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        let __VLS_27;
        const __VLS_28 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.baseStore.selectedFoodArray.length > 0)))
                    return;
                __VLS_ctx.baseStore.handleIsFoodItemsSectionOpen();
            }
        };
        let __VLS_24;
        let __VLS_25;
        __VLS_26.slots.default;
        var __VLS_26;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center justify-center h-full") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col items-center justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        /** @type { [typeof Button, typeof Button, ] } */ ;
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(Button, new Button({
            ...{ 'onClick': {} },
            ...{ class: ("mt-3 block lg:hidden") },
        }));
        const __VLS_30 = __VLS_29({
            ...{ 'onClick': {} },
            ...{ class: ("mt-3 block lg:hidden") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        let __VLS_34;
        const __VLS_35 = {
            onClick: (...[$event]) => {
                if (!(!((__VLS_ctx.baseStore.selectedFoodArray.length > 0))))
                    return;
                __VLS_ctx.baseStore.handleIsFoodItemsSectionOpen();
            }
        };
        let __VLS_31;
        let __VLS_32;
        __VLS_33.slots.default;
        var __VLS_33;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border-t") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("block lg:flex flex-row-reverse items-center justify-between p-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full lg:w-1/4 flex items-baseline justify-end lg:justify-start gap-3 pb-2 lg:pb-0") },
    });
    const __VLS_36 = {}.Label;
    /** @type { [typeof __VLS_components.Label, typeof __VLS_components.Label, ] } */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_41.slots.default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-yellow-500 font-bold text-3xl") },
    });
    (__VLS_ctx.baseStore.totalAmt);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full lg:w-3/4 flex items-center justify-start gap-3 pt-2 lg:pt-0") },
    });
    const __VLS_42 = {}.Label;
    /** @type { [typeof __VLS_components.Label, typeof __VLS_components.Label, ] } */ ;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_47.slots.default;
    var __VLS_47;
    const __VLS_48 = {}.RadioGroup;
    /** @type { [typeof __VLS_components.RadioGroup, typeof __VLS_components.RadioGroup, ] } */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        modelValue: ((__VLS_ctx.baseStore.paymentType)),
        defaultValue: ("cash"),
        ...{ class: ("flex items-center justify-start gap-4") },
    }));
    const __VLS_50 = __VLS_49({
        modelValue: ((__VLS_ctx.baseStore.paymentType)),
        defaultValue: ("cash"),
        ...{ class: ("flex items-center justify-start gap-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    for (const [method] of __VLS_getVForSourceType((__VLS_ctx.paymentMethods))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((method.id)),
            ...{ class: ("flex items-center space-x-2") },
        });
        const __VLS_54 = {}.RadioGroupItem;
        /** @type { [typeof __VLS_components.RadioGroupItem, ] } */ ;
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
            id: ((method.id)),
            value: ((method.id)),
        }));
        const __VLS_56 = __VLS_55({
            id: ((method.id)),
            value: ((method.id)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = {}.Label;
        /** @type { [typeof __VLS_components.Label, typeof __VLS_components.Label, ] } */ ;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            for: ((method.id)),
            ...{ class: ("cursor-pointer") },
        }));
        const __VLS_62 = __VLS_61({
            for: ((method.id)),
            ...{ class: ("cursor-pointer") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        (method.label);
        __VLS_65.slots.default;
        var __VLS_65;
    }
    __VLS_53.slots.default;
    var __VLS_53;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between gap-3 p-2") },
    });
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        variant: ("secondary"),
        ...{ class: ("w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-900") },
    }));
    const __VLS_67 = __VLS_66({
        ...{ 'onClick': {} },
        variant: ("secondary"),
        ...{ class: ("w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-900") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    let __VLS_71;
    const __VLS_72 = {
        onClick: (...[$event]) => {
            __VLS_ctx.baseStore.resetData();
        }
    };
    let __VLS_68;
    let __VLS_69;
    __VLS_70.slots.default;
    var __VLS_70;
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        ...{ class: ("w-full") },
    }));
    const __VLS_74 = __VLS_73({
        ...{ 'onClick': {} },
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (...[$event]) => {
            __VLS_ctx.baseStore.resetData();
        }
    };
    let __VLS_75;
    let __VLS_76;
    __VLS_77.slots.default;
    var __VLS_77;
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        ...{ class: ("w-full bg-green-700 hover:bg-green-800") },
    }));
    const __VLS_81 = __VLS_80({
        ...{ 'onClick': {} },
        ...{ class: ("w-full bg-green-700 hover:bg-green-800") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    let __VLS_85;
    const __VLS_86 = {
        onClick: (...[$event]) => {
            __VLS_ctx.baseStore.resetData();
        }
    };
    let __VLS_82;
    let __VLS_83;
    __VLS_84.slots.default;
    var __VLS_84;
    ['flex-col', 'relative', 'overflow-x-auto', 'h-[72vh]', 'responsive-h-scroll-div', 'w-full', 'text-sm', 'text-left', 'rtl:text-right', 'text-gray-500', 'dark:text-gray-400', 'text-xs', 'text-white', 'uppercase', 'bg-gray-800', 'dark:bg-[#4f4f53]', 'dark:text-gray-200', 'sticky', 'top-0', 'z-10', 'pl-2', 'lg:pl-4', 'py-3', 'pr-2', 'lg:pr-6', 'py-3', 'pl-2', 'lg:px-6', 'py-3', 'pl-2', 'lg:px-6', 'py-3', 'bg-gray-50', 'dark:bg-[#18181B]', 'border-b', 'dark:border-gray-700', 'pl-2', 'lg:pl-4', 'py-4', 'cursor-pointer', 'pl-2', 'lg:pl-0', 'pr-2', 'lg:pr-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white', 'px-2', 'lg:px-6', 'py-4', 'qty-input-group', 'relative', 'flex', 'items-center', 'justify-between', 'gap-2', 'max-w-[10rem]', 'w-3', 'h-3', 'text-gray-900', 'dark:text-white', 'h-8', 'px-1', 'lg:px-3', 'text-center', 'block', 'w-full', 'focus:!ring-0', 'focus-visible:!ring-offset-0', 'focus:border-red-500', 'focus:border-2', 'text-black', 'dark:text-white', 'w-3', 'h-3', 'text-gray-900', 'dark:text-white', 'px-2', 'lg:px-6', 'py-4', 'font-semibold', 'text-base', 'flex', 'lg:hidden', 'items-center', 'justify-center', 'h-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'my-3', 'block', 'lg:hidden', 'flex', 'items-center', 'justify-center', 'h-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'mt-3', 'block', 'lg:hidden', 'border-t', 'block', 'lg:flex', 'flex-row-reverse', 'items-center', 'justify-between', 'p-2', 'w-full', 'lg:w-1/4', 'flex', 'items-baseline', 'justify-end', 'lg:justify-start', 'gap-3', 'pb-2', 'lg:pb-0', 'text-yellow-500', 'font-bold', 'text-3xl', 'w-full', 'lg:w-3/4', 'flex', 'items-center', 'justify-start', 'gap-3', 'pt-2', 'lg:pt-0', 'flex', 'items-center', 'justify-start', 'gap-4', 'flex', 'items-center', 'space-x-2', 'cursor-pointer', 'flex', 'items-center', 'justify-between', 'gap-3', 'p-2', 'w-full', 'bg-gray-300', 'dark:bg-gray-700', 'hover:bg-gray-400', 'dark:hover:bg-gray-900', 'w-full', 'w-full', 'bg-green-700', 'hover:bg-green-800',];
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
            Button: Button,
            Input: Input,
            Label: Label,
            RadioGroup: RadioGroup,
            RadioGroupItem: RadioGroupItem,
            baseStore: baseStore,
            paymentMethods: paymentMethods,
            handleInputBlur: handleInputBlur,
            handleInputChange: handleInputChange,
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
