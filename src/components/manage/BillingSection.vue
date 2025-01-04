<script setup lang="ts">
import { ref } from "vue";
import BillTable from '@/components/manage/billing/BillTable.vue'

const selectedTab = ref(1);
</script>

<template>
  <section>
    <div class="flex w-full h-[6vh] divide-x-2">
      <div
        v-for="i in 3"
        :key="i"
        class="w-1/3 flex items-center justify-center cursor-pointer"
        :class="
          selectedTab == i
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-[#18181B] dark:hover:bg-gray-800'
        "
        @click="selectedTab = i"
      >
        {{ i == 1 ? "Dine In" : i == 2 ? "Delivery" : "Pickup" }}
      </div>
    </div>
    <div>
        <BillTable />
    </div>
  </section>
</template>
