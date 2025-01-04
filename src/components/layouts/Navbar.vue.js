import { useRoute } from "vue-router";
import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";
const route = useRoute();
const baseStore = useBaseStore();
const toggleTheme = () => document.body.classList.toggle("dark");
const hello = () => {
    localStorage.clear();
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("h-[7vh] bg-background dark:bg-[#09090B] p-2 flex justify-between items-center border-b") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("logo flex items-center justify-start gap-2 mr-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-10 h-10 rounded-md bg-primary flex items-center justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("@/assets/icons/base/soup.svg"),
        alt: ("logo"),
        ...{ class: ("h-6 w-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid flex-1 text-left text-sm leading-tight") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("truncate font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("truncate text-xs") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/"),
    }));
    const __VLS_2 = __VLS_1({
        to: ("/"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.route.path != '/') {
        // @ts-ignore
        /** @type { [typeof Button, typeof Button, ] } */ ;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(Button, new Button({
            size: ("sm"),
            ...{ class: ("flex gap-[2px]") },
        }));
        const __VLS_7 = __VLS_6({
            size: ("sm"),
            ...{ class: ("flex gap-[2px]") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ("@/assets/icons/base/plus.svg"),
            ...{ class: ("w-4 h-4 m-0") },
            alt: ("plus-icon"),
        });
        __VLS_10.slots.default;
        var __VLS_10;
    }
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-end gap-2") },
    });
    const __VLS_11 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        to: ("/login"),
        ...{ class: ("text-primary") },
    }));
    const __VLS_13 = __VLS_12({
        to: ("/login"),
        ...{ class: ("text-primary") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.hello();
            } },
        src: ("@/assets/icons/base/settings.svg"),
        alt: ("color-mode-sun"),
        ...{ class: ("cursor-pointer") },
    });
    __VLS_16.slots.default;
    var __VLS_16;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleTheme();
            } },
        src: ("@/assets/icons/base/sun.svg"),
        alt: ("color-mode-sun"),
        ...{ class: ("cursor-pointer hidden md:block") },
    });
    ['h-[7vh]', 'bg-background', 'dark:bg-[#09090B]', 'p-2', 'flex', 'justify-between', 'items-center', 'border-b', 'flex', 'items-center', 'logo', 'flex', 'items-center', 'justify-start', 'gap-2', 'mr-6', 'w-10', 'h-10', 'rounded-md', 'bg-primary', 'flex', 'items-center', 'justify-center', 'h-6', 'w-6', 'grid', 'flex-1', 'text-left', 'text-sm', 'leading-tight', 'truncate', 'font-semibold', 'truncate', 'text-xs', 'flex', 'gap-[2px]', 'w-4', 'h-4', 'm-0', 'flex', 'items-center', 'justify-end', 'gap-2', 'text-primary', 'cursor-pointer', 'cursor-pointer', 'hidden', 'md:block',];
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
            route: route,
            toggleTheme: toggleTheme,
            hello: hello,
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
