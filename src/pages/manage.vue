<script setup lang="ts">
import { useBaseStore } from "@/stores/useBaseStore";
import FoodItemsSection from "@/components/manage/FoodItemsSection.vue";
import BillingSection from "@/components/manage/BillingSection.vue"

const baseStore = useBaseStore()
</script>

<template>
  <div class="flex items-start justify-between divide-x-0 lg:divide-x h-[93vh] max-h-[93vh]">
    <div :class="baseStore.getIsFoodItemsSectionOpen ? 'block' : 'hidden'" class="lg:block w-full lg:w-1/2 p-2 h-full">
        <FoodItemsSection  />
    </div>
    <div :class="baseStore.getIsFoodItemsSectionOpen ? 'hidden' : 'block'" class="lg:block w-full lg:w-1/2  h-full">
        <BillingSection  />
    </div>
  </div>
</template>
