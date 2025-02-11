<script setup>
import { ref, watch } from "vue";
import { Input } from "@/components/ui/input";
import DateRangePicker from "@/components/ui/DateRangePicker.vue";
import { format } from "date-fns";

// Define searchTerm and dateRange state
const searchTerm = ref("");
const dateRange = ref({ startDate: format(new Date(new Date().setDate(new Date().getDate() - 7)), 'dd/MM/yyyy'), endDate: format(new Date(), 'dd/MM/yyyy') });

// Emit filter-update event
const emit = defineEmits(["filter-update"]);

// Watch for changes and emit updated filters
watch([searchTerm], () => {
  if (searchTerm.value.length == 0 || searchTerm.value.length > 3) {
    emit("filter-update", {
      search: searchTerm.value.trim(),
      startDate: dateRange.value.startDate,
      endDate: dateRange.value.endDate,
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
    startDate: newDateRange.startDate,
    endDate: newDateRange.endDate,
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
