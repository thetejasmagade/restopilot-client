<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Filters from "@/components/orders/Filters.vue";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const columns = [
  "Order ID",
  "Table Name",
  "Order Type",
  "Payment",
  "Amount",
  "Date",
  "Total Items",
  "Customer Info",
];
const data = ref<any>([]);
const totalItems = ref(0);

const itemsPerPage = ref(20);
const currentPage = ref(1);
const isLoading = ref(false);
const refreshing = ref(false);

const filters = ref({
  search: "",
  startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
  endDate: new Date(),
});

const totalPages = computed(() =>
  Math.ceil(totalItems.value / itemsPerPage.value)
);

// Fetch data from backend API
const fetchData = async (isFromRefresh: any) => {
  if(isFromRefresh == true) refreshing.value = true;
  isLoading.value = true;
  try {
    const body = {
      mobile: Number(localStorage.getItem("mobile_no")),
      search: filters.value.search || null,
      startDate: filters.value.startDate
        ? new Date(filters.value.startDate).toISOString().split("T")[0]
        : null,
      endDate: filters.value.endDate
        ? new Date(filters.value.endDate).toISOString().split("T")[0]
        : null,
      limit: itemsPerPage.value,
      offset: (currentPage.value - 1) * itemsPerPage.value,
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}users/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    const result = await response.json();
    data.value = result.orders || [];
    totalItems.value = result.totalItems || 0; // Assuming the total count is returned as `totalItems`
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = [];
    totalItems.value = 0;
  } finally {
    isLoading.value = false;
    if(isFromRefresh == true) refreshing.value = false;
  }
};

// Watch for changes in filters or current page
watch([filters, currentPage], fetchData, { immediate: true });

// Handle filter updates from Filters.vue
const updateFilters = (newFilters: any) => {
  filters.value = newFilters;
};

const badgeStyles: any = {
  cash: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  upi: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  card: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  dinein: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  delivery: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  pickup:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

const badgeTypeClasses = (badgeType: any) => {
  return (
    badgeStyles[badgeType] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};
</script>

<template>
  <div class="p-4">
    <div class="block md:flex items-center justify-between mb-4">
      <div class="flex md:block items-center justify-between mb-3 md:mb-0">
        <h1 class="text-xl font-semibold">Orders Data</h1>
        <Button class="flex md:hidden" @click="fetchData(true)">
          <img src="@/assets/icons/base/refresh.svg" class="h-4 w-4" :class="refreshing ? 'animate-spin' : ''" />
          Refresh
        </Button>
      </div>
      <div class="block md:flex items-center justify-start gap-2">
        <Button class="hidden md:flex" @click="fetchData(true)">
          <img src="@/assets/icons/base/refresh.svg" class="h-4 w-4" :class="refreshing ? 'animate-spin' : ''" />
          Refresh
        </Button>
        <Filters @filter-update="updateFilters" />
      </div>
    </div>

    <!-- Data Table -->
    <div
      class="overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 max-h-[calc(100vh-280px)] xl:max-h-[calc(100vh-200px)]"
    >
      <table
        class="order-table min-w-full bg-white dark:bg-[#18181B] table-fixed"
      >
        <thead class="bg-gray-800 dark:bg-[#4f4f53] sticky top-0 z-10">
          <tr>
            <th
              v-for="column in columns"
              :key="column"
              class="text-left p-3 text-sm font-medium uppercase text-white dark:text-gray-200 whitespace-nowrap"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody v-if="!isLoading">
          <tr
            v-for="(row, index) in data"
            :key="row.order_id"
            :class="[
              'bg-gray-50 dark:bg-[#18181B]',
              'last:border-b-0 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#121213] cursor-pointer text-sm',
            ]"
          >
            <td class="px-3 py-2 dark:text-gray-200 whitespace-nowrap">
              {{ row.order_id }}
            </td>
            <td class="px-3 py-2 dark:text-gray-200 whitespace-nowrap">
              {{ row.table_name }}
            </td>
            <td class="px-3 py-2 uppercase whitespace-nowrap">
              <span
                :class="
                  badgeTypeClasses(
                    row.order_type == 1
                      ? 'dinein'
                      : row.order_type == 2
                      ? 'delivery'
                      : 'pickup'
                  )
                "
                class="text-sm font-bold me-2 px-2.5 py-0.5 rounded-sm"
              >
                {{
                  row.order_type == 1
                    ? "Dine In"
                    : row.order_type == 2
                    ? "Delivery"
                    : "Pickup"
                }}
              </span>
            </td>
            <td class="px-3 py-2 uppercase whitespace-nowrap">
              <span
                :class="badgeTypeClasses(row.payment_type)"
                class="text-sm font-bold me-2 px-2.5 py-0.5 rounded-sm"
              >
                {{ row.payment_type }}
              </span>
            </td>
            <td
              class="px-3 py-2 text-green-500 dark:text-green-300 whitespace-nowrap"
            >
              {{ "₹" + row.total_amt + ".00" }}
            </td>
            <td class="px-3 py-2 dark:text-gray-200 whitespace-nowrap">
              {{ format(row.created_at, "dd MMMM, yyyy") }}
            </td>
            <td class="px-3 py-2 dark:text-gray-200 whitespace-nowrap">
              <Popover>
                <PopoverTrigger>
                  <div class="flex items-center justify-start gap-1">
                    <span>
                      {{ row.items.length }}
                    </span>
                    <img src="@/assets/icons/base/info.svg" class="w-4 h-4" />
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div
                    v-for="(item, i) in row.items"
                    :key="i"
                    class="mb-3 last:mb-0"
                  >
                    <div class="font-semibold">
                      {{ item.value }}
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">
                      {{ "₹" + item.price + ".00" }} x {{ item.qty }}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </td>
            <td class="px-3 py-2 dark:text-gray-200 whitespace-nowrap">
              <Popover>
                <PopoverTrigger>
                  <div class="flex items-center justify-start gap-1">
                    <span>
                      {{ row.customer_info.name || "N/A" }}
                    </span>
                    <img
                      v-if="
                        row.customer_info.mobile_no || row.customer_info.name
                      "
                      src="@/assets/icons/base/info.svg"
                      class="w-4 h-4"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div>
                    <span class="font-semibold">Name: </span>
                    <span class="text-sm text-gray-600 dark:text-gray-300">
                      {{ row.customer_info.name || "N/A" }}
                    </span>
                  </div>
                  <div>
                    <span class="font-semibold">Mobile No: </span>
                    <span class="text-sm text-gray-600 dark:text-gray-300">
                      {{ row.customer_info.mobile_no || "N/A" }}
                    </span>
                  </div>
                  <div>
                    <span class="font-semibold">DOB: </span>
                    <span class="text-sm text-gray-600 dark:text-gray-300">
                      {{ row.customer_info.dob || "N/A" }}
                    </span>
                  </div>
                </PopoverContent>
              </Popover>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="isLoading">
      <div class="text-center py-8">
        <div
          class="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"
        ></div>
        <p class="mt-2 text-gray-500 dark:text-gray-300">Loading...</p>
      </div>
    </div>

    <div v-if="!isLoading && !data.length" class="flex justify-center mt-4">
      <div>
        <div class="flex justify-center">
          <img class="h-24 w-24" src="@/assets/icons/base/no-records.svg" />
        </div>
        <p class="text-gray-500 mt-1 italic dark:text-gray-300">
          No records found.
        </p>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex items-center justify-end mt-4 space-x-2">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1 || !data.length"
        class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages || !data.length"
        class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style>
/* Add animation styles here */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Ensure table data stays on a single line */
.order-table table {
  table-layout: fixed;
}

.order-table td,
th {
  white-space: nowrap;
}
</style>
