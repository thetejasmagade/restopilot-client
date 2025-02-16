<script setup>
import { ref, watch } from "vue";
import { Input } from "@/components/ui/input";
import DateRangePicker from "@/components/ui/DateRangePicker.vue";

// Define searchTerm and dateRange state
const searchTerm = ref("");
const dateRange = ref({ startDate: new Date(new Date().setDate(new Date().getDate() - 7)), endDate: new Date() });

// Emit filter-update event
const emit = defineEmits(["filter-update"]);

// Watch for changes and emit updated filters
watch([searchTerm], () => {
  if (searchTerm.value.length == 0 || searchTerm.value.length > 3) {
    emit("filter-update", {
      search: searchTerm.value.trim(),
      startDate: new Date(dateRange.value.startDate),
      endDate: new Date(dateRange.value.endDate),
    });
  }
});

// Handle the 'apply' event from DateRangePicker
const handleApply = (newDateRange) => {
  console.log("euf", newDateRange);
  // Update the date range in the parent component
  dateRange.value = newDateRange;
  // Emit any additional updates if necessary
  emit("filter-update", {
    search: searchTerm.value.trim(),
    startDate: new Date(newDateRange.startDate),
    endDate: new Date(newDateRange.endDate),
  });
};
</script>

<template>
  <div class="block md:flex items-center justify-end gap-3">
    <!-- DateRangePicker with the apply event listener -->
    <DateRangePicker @applyDate="(val) => handleApply(val)" />

    <!-- Search Input -->
    <Input
      v-model="searchTerm"
      type="text"
      id="search"
      placeholder="🔍 Search"
      class="mt-2 md:mt-0 w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 dark:bg-[#18181B] dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700"
    />
  </div>
</template>
