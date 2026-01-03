<script setup lang="ts">
import { useRouter } from "vue-router";
import { useBaseStore } from "@/stores/useBaseStore";
import FoodItemsSection from "@/components/manage/FoodItemsSection.vue";
import BillingSection from "@/components/manage/BillingSection.vue"

const baseStore = useBaseStore();
const router = useRouter();

if(!baseStore.getSelectedTableData) router.push('/');
</script>

<template>
  <div class="flex items-start justify-between divide-x-0 lg:divide-x h-[93vh] max-h-[93vh]">
    <div :class="baseStore.getIsFoodItemsSectionOpen ? 'block' : 'hidden'" class="lg:block w-full lg:w-1/2 p-2 h-full bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)]
         dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]
         bg-[size:16px_16px]">
        <FoodItemsSection  />
    </div>
    <div :class="baseStore.getIsFoodItemsSectionOpen ? 'hidden' : 'block'" class="lg:block w-full lg:w-1/2  h-full">
        <BillingSection  />
    </div>
  </div>
</template>
