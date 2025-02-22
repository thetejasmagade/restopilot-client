<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['totalAmt', 'totalOrders']);
</script>
<template>
    <div class="flex items-center justify-start gap-3">
        <div class="h-14 w-1/2 md:w-1/3 xl:w-[15%] bg-gray-100 dark:bg-[#4F4F53] rounded-lg mb-2 border p-2">
            <div class="text-sm">Total Orders</div>
            <div class="flex justify-end">    
                <div v-if="totalOrders" class=" text-green-500 font-semibold text-md">{{ totalOrders }}</div>
                <div v-else class="h-5 w-16 bg-gray-200 rounded-full dark:bg-gray-900 animate-pulse"></div>
            </div>
        </div>
        <div class="h-14 w-1/2 md:w-1/3 xl:w-[15%] bg-gray-100 dark:bg-[#4F4F53] rounded-lg mb-2 border p-2">
            <div class="text-sm">Total Amount</div>
            <div class="flex justify-end">
                <div v-if="totalAmt" class="text-green-500 font-semibold text-md">{{ '₹' + totalAmt + '.00' }}</div>
                <div v-else class="h-5 w-16 bg-gray-200 rounded-full dark:bg-gray-900 animate-pulse"></div>
            </div>
        </div>
    </div>
</template>