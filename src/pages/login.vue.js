import { ref } from "vue";
import { useRouter } from "vue-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();
const router = useRouter();
// Refs to bind to form fields
const mobile = ref("");
const password = ref("");
// Handle login form submission
const handleLogin = async () => {
    const url = `${import.meta.env.VITE_SERVER_BASE_URL}users`;
    const userData = {
        mobile: mobile.value,
        password: password.value,
    };
    localStorage.setItem("is_authenticated", true);
    localStorage.setItem("mobile_no", mobile.value);
    localStorage.setItem("data", JSON.stringify({
        _id: "67707064c58ec0e5b02866af",
        mobile: 8433887822,
        filters: [
            { id: 0, value: "Most Selling" },
            { id: 1, value: "Soups" },
            { id: 2, value: "Burgers" },
            { id: 3, value: "Beverages" },
            { id: 4, value: "Coffee" },
            { id: 5, value: "Desserts" },
            { id: 6, value: "Vegetarian" },
        ],
        items: [
            {
                id: 0,
                value: "Chicken Burger",
                filter_id: 2,
                price: 200,
                food_type: 1,
                is_most_selling: true,
            },
            {
                id: 1,
                value: "Beef Burger",
                filter_id: 2,
                price: 250,
                food_type: 1,
                is_most_selling: false,
            },
            {
                id: 2,
                value: "Vegetable Soup",
                filter_id: 1,
                price: 150,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 3,
                value: "Tomato Soup",
                filter_id: 1,
                price: 130,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 4,
                value: "Coca-Cola",
                filter_id: 3,
                price: 50,
                food_type: 2,
                is_most_selling: true,
            },
            {
                id: 5,
                value: "Lemonade",
                filter_id: 3,
                price: 70,
                food_type: 2,
                is_most_selling: false,
            },
            {
                id: 6,
                value: "Latte",
                filter_id: 4,
                price: 100,
                food_type: 2,
                is_most_selling: false,
            },
            {
                id: 7,
                value: "Cappuccino",
                filter_id: 4,
                price: 120,
                food_type: 2,
                is_most_selling: false,
            },
            {
                id: 8,
                value: "Chocolate Cake",
                filter_id: 5,
                price: 180,
                food_type: 0,
                is_most_selling: true,
            },
            {
                id: 9,
                value: "Apple Pie",
                filter_id: 5,
                price: 150,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 10,
                value: "Vegetarian Burger",
                filter_id: 6,
                price: 220,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 11,
                value: "Chicken Soup",
                filter_id: 1,
                price: 180,
                food_type: 1,
                is_most_selling: true,
            },
            {
                id: 12,
                value: "Spicy Burger",
                filter_id: 2,
                price: 270,
                food_type: 1,
                is_most_selling: false,
            },
            {
                id: 13,
                value: "Iced Tea",
                filter_id: 3,
                price: 60,
                food_type: 2,
                is_most_selling: true,
            },
            {
                id: 14,
                value: "Mango Smoothie",
                filter_id: 3,
                price: 80,
                food_type: 2,
                is_most_selling: false,
            },
            {
                id: 15,
                value: "Blueberry Muffin",
                filter_id: 5,
                price: 160,
                food_type: 0,
                is_most_selling: true,
            },
            {
                id: 16,
                value: "Vanilla Cake",
                filter_id: 5,
                price: 140,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 17,
                value: "Cold Brew Coffee",
                filter_id: 4,
                price: 110,
                food_type: 2,
                is_most_selling: true,
            },
            {
                id: 18,
                value: "Cheese Burger",
                filter_id: 2,
                price: 230,
                food_type: 1,
                is_most_selling: false,
            },
            {
                id: 19,
                value: "Pumpkin Soup",
                filter_id: 1,
                price: 160,
                food_type: 0,
                is_most_selling: false,
            },
            {
                id: 20,
                value: "Chocolate Milkshake",
                filter_id: 3,
                price: 90,
                food_type: 2,
                is_most_selling: true,
            },
            {
                id: 21,
                value: "Falafel Burger",
                filter_id: 6,
                price: 210,
                food_type: 0,
                is_most_selling: false,
            },
        ],
    }));
    // try {
    //   const response = await fetch(url, {
    //     method: "POST", // HTTP method
    //     headers: {
    //       "Content-Type": "application/json", // Specify that we're sending JSON data
    //     },
    //     body: JSON.stringify(userData), // Convert the data to a JSON string
    //   });
    //   // Check if the response was successful
    //   const data = await response.json(); // Parse the JSON response
    //   console.log(data);
    //   if (response.ok) {
    //     localStorage.setItem("is_authenticated", true);
    //     localStorage.setItem("mobile_no", data.mobile);
    //     localStorage.setItem("data", JSON.stringify(data));
    //     setTimeout(() => {
    //       window.location.href = "/";
    //     }, 1000);
    //   } else {
    //     localStorage.setItem("is_authenticated", false);
    //     toast({
    //       title: "Uh oh! Something went wrong.",
    //       description: data.message,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen bg-gradient-to-r from-red-500 to-red-700 flex justify-center items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white p-8 rounded-lg shadow-lg w-full max-w-sm") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-semibold text-center text-gray-700 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handleLogin) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("mobile"),
        ...{ class: ("block text-sm font-medium text-gray-600 mb-2") },
    });
    const __VLS_0 = {}.Input;
    /** @type { [typeof __VLS_components.Input, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        type: ("number"),
        id: ("mobile"),
        modelValue: ((__VLS_ctx.mobile)),
        placeholder: ("Enter your Mobile"),
        ...{ class: ("w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2") },
        required: (true),
    }));
    const __VLS_2 = __VLS_1({
        type: ("number"),
        id: ("mobile"),
        modelValue: ((__VLS_ctx.mobile)),
        placeholder: ("Enter your Mobile"),
        ...{ class: ("w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2") },
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("password"),
        ...{ class: ("block text-sm font-medium text-gray-600 mb-2") },
    });
    const __VLS_6 = {}.Input;
    /** @type { [typeof __VLS_components.Input, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        type: ("password"),
        id: ("password"),
        modelValue: ((__VLS_ctx.password)),
        placeholder: ("Enter your password"),
        ...{ class: ("w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2") },
        required: (true),
    }));
    const __VLS_8 = __VLS_7({
        type: ("password"),
        id: ("password"),
        modelValue: ((__VLS_ctx.password)),
        placeholder: ("Enter your password"),
        ...{ class: ("w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2") },
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_12 = {}.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        type: ("submit"),
        size: ("lg"),
        ...{ class: ("w-full focus:outline-none") },
    }));
    const __VLS_14 = __VLS_13({
        type: ("submit"),
        size: ("lg"),
        ...{ class: ("w-full focus:outline-none") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_17.slots.default;
    var __VLS_17;
    ['min-h-screen', 'bg-gradient-to-r', 'from-red-500', 'to-red-700', 'flex', 'justify-center', 'items-center', 'bg-white', 'p-8', 'rounded-lg', 'shadow-lg', 'w-full', 'max-w-sm', 'text-2xl', 'font-semibold', 'text-center', 'text-gray-700', 'mb-4', 'mb-4', 'block', 'text-sm', 'font-medium', 'text-gray-600', 'mb-2', 'w-full', 'focus:!ring-0', 'focus-visible:!ring-offset-0', 'focus:border-red-500', 'focus:border-2', 'mb-6', 'block', 'text-sm', 'font-medium', 'text-gray-600', 'mb-2', 'w-full', 'focus:!ring-0', 'focus-visible:!ring-offset-0', 'focus:border-red-500', 'focus:border-2', 'w-full', 'focus:outline-none',];
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
            Input: Input,
            Button: Button,
            mobile: mobile,
            password: password,
            handleLogin: handleLogin,
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
