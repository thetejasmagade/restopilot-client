<script setup lang="ts">
import { ref } from "vue";
import { useBaseStore } from '@/stores/useBaseStore'


// Define the type for the filter items
interface Filter {
    id: number;
    value: string;
}

const baseStore = useBaseStore();

// Retrieve filters from localStorage and ensure it's typed correctly
const filters = ref<Filter[]>(JSON.parse(localStorage.getItem("data") || "null")?.filters || []);

</script>

<template>
  <aside class="px-2 py-3">
    <span class="text-xs px-2 font-medium">Food Filters</span>
    <ul class="mt-3">
      <li class="cursor-pointer my-1" v-for="(filter, i) in filters" :key="i" @click="baseStore.handleSelectedFilter(filter)">
        <div class="p-2 rounded-md" :class="[baseStore.selectedFoodType.id === filter.id ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700']">
            {{ filter.value }}
        </div>
      </li>
    </ul>
  </aside>
</template>
