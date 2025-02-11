<script setup lang="ts">
import { ref, onMounted } from "vue";
import BillTable from "@/components/manage/billing/BillTable.vue";
import { useBaseStore } from "@/stores/useBaseStore";

const baseStore = useBaseStore();
const selectedTab = ref<number>(1);

onMounted(() => {
  selectedTab.value = baseStore.selectedTableData ? baseStore.selectedTableData.table.order_type : 1;
})

const updateOrderType = (id: number) => {
  selectedTab.value = id;
  baseStore.updateOrderTypeHandler(id);
}
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
        @click="() => updateOrderType(i)"
      >
        {{ i == 1 ? "Dine In" : i == 2 ? "Delivery" : "Pickup" }}
      </div>
    </div>
    <div class="h-[5vh] flex items-center justify-end">
      <div class="px-2">Table Info:</div>

      <div class="text-red-800 flex items-center bg-yellow-500 h-full px-2">
        {{
          baseStore.selectedTableData
            ? baseStore.selectedTableData.area_name
            : "N/A"
        }}
      </div>
      <div class="text-red-800 flex items-center bg-green-500 h-full px-2">
        {{
          baseStore.selectedTableData
            ? baseStore.selectedTableData.table.table_name
            : "N/A"
        }}
      </div>
    </div>
    <div>
      <BillTable />
    </div>
  </section>
</template>
