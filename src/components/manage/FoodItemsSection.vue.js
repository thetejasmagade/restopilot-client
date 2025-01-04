import { ref } from "vue";
import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { onMounted } from "vue";
import { watch } from "vue";
const baseStore = useBaseStore();
const foodItemsCopy = ref(JSON.parse(localStorage.getItem("data") || "null")?.items || []);
const foodItems = ref(foodItemsCopy.value);
const searchValue = ref("");
onMounted(() => {
    showMostSellingItems();
});
watch(() => baseStore.selectedFilter, () => {
    if (baseStore.selectedFilter.id != 0)
        foodItems.value = foodItemsCopy.value.filter((item) => item.filter_id == baseStore.selectedFilter.id);
    else
        showMostSellingItems();
});
const showMostSellingItems = () => {
    foodItems.value = foodItemsCopy.value.filter((item) => item.is_most_selling == true);
};
const searchItems = () => {
    if (searchValue.value.trim() !== "") {
        foodItems.value = foodItemsCopy.value.filter((item) => item.value.toLowerCase().includes(searchValue.value.toLowerCase()));
    }
    else {
        if (baseStore.selectedFilter.id !== 0) {
            foodItems.value = foodItemsCopy.value.filter((item) => item.filter_id === baseStore.selectedFilter.id);
        }
        else {
            showMostSellingItems();
        }
    }
};
const addFoodItem = (item) => {
    baseStore.handleSelectedFood(item);
};
const moveToBillSection = () => {
    baseStore.handleIsFoodItemsSectionOpen();
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative w-full max-w-sm items-center") },
    });
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onInput': {} },
        modelValue: ((__VLS_ctx.searchValue)),
        id: ("search"),
        type: ("text"),
        placeholder: ("Search items..."),
        ...{ class: ("pl-10 focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 bg-gray-100 dark:bg-[#18181B]") },
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onInput': {} },
        modelValue: ((__VLS_ctx.searchValue)),
        id: ("search"),
        type: ("text"),
        placeholder: ("Search items..."),
        ...{ class: ("pl-10 focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 bg-gray-100 dark:bg-[#18181B]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onInput: (...[$event]) => {
            __VLS_ctx.searchItems();
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("absolute start-0 inset-y-0 flex items-center justify-center px-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("@/assets/icons/base/search.svg"),
        alt: ("search-icon"),
        ...{ class: ("w-4 h-4") },
    });
    if (__VLS_ctx.foodItems.length != 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-wrap justify-start gap-3 mt-4 overflow-y-auto max-h-[85.5vh] lg:max-h-[84vh]") },
        });
        for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.foodItems))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.foodItems.length != 0)))
                            return;
                        __VLS_ctx.addFoodItem(item);
                    } },
                key: ((i)),
                ...{ class: (([
                        item.food_type == 0
                            ? 'border-green-500'
                            : item.food_type == 1
                                ? 'border-red-500'
                                : 'border-yellow-500',
                    ])) },
                ...{ class: ("bg-gray-100 hover:bg-gray-200 dark:bg-[#18181B] dark:hover:bg-gray-800 p-2 rounded-md w-[47.5%] lg:w-[23.5%] h-24 border-l-[5px] cursor-pointer flex items-center relative select-none") },
            });
            if (item.is_most_selling) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                    src: ("@/assets/icons/base/star.svg"),
                    alt: ("top-right-image"),
                    ...{ class: ("absolute top-0 right-0 w-4 h-4 mr-2 mt-2") },
                });
            }
            (item?.value);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center justify-center h-44") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("text-lg") },
        });
    }
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        ...{ class: ("absolute bottom-2 right-2 block lg:hidden") },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        ...{ class: ("absolute bottom-2 right-2 block lg:hidden") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (...[$event]) => {
            __VLS_ctx.moveToBillSection();
        }
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_11.slots.default;
    var __VLS_11;
    ['flex', 'justify-center', 'relative', 'w-full', 'max-w-sm', 'items-center', 'pl-10', 'focus:!ring-0', 'focus-visible:!ring-offset-0', 'focus:border-red-500', 'focus:border-2', 'bg-gray-100', 'dark:bg-[#18181B]', 'absolute', 'start-0', 'inset-y-0', 'flex', 'items-center', 'justify-center', 'px-3', 'w-4', 'h-4', 'flex', 'flex-wrap', 'justify-start', 'gap-3', 'mt-4', 'overflow-y-auto', 'max-h-[85.5vh]', 'lg:max-h-[84vh]', 'bg-gray-100', 'hover:bg-gray-200', 'dark:bg-[#18181B]', 'dark:hover:bg-gray-800', 'p-2', 'rounded-md', 'w-[47.5%]', 'lg:w-[23.5%]', 'h-24', 'border-l-[5px]', 'cursor-pointer', 'flex', 'items-center', 'relative', 'select-none', 'absolute', 'top-0', 'right-0', 'w-4', 'h-4', 'mr-2', 'mt-2', 'flex', 'items-center', 'justify-center', 'h-44', 'text-lg', 'absolute', 'bottom-2', 'right-2', 'block', 'lg:hidden',];
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
            foodItems: foodItems,
            searchValue: searchValue,
            searchItems: searchItems,
            addFoodItem: addFoodItem,
            moveToBillSection: moveToBillSection,
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
