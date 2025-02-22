<template>
  <div>
    <VueDatePicker
      v-model="date"
      :enable-time-picker="false"
      :clearable="false"
      range
      multi-calendars
      :min-date="new Date('2024-01-01')"
      :max-date="new Date()"
      :format="formatDate"
      @update:model-value="handleApply"
      :dark="baseStore.isDarkMode"
      :month-change-on-scroll="false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useBaseStore } from "@/stores/useBaseStore";

const baseStore = useBaseStore();

const date = ref();
const emits = defineEmits(['applyDate'])

onMounted(() => {
  const startDate = new Date(new Date().setDate(new Date().getDate() - 7));
  const endDate = new Date();
  date.value = [startDate, endDate];
})

const formatDate = (date) => {
  if(date[0] && date[1]){
    const day1 = date[0].getDate();
    const month1 = date[0].getMonth() + 1;
    const year1 = date[0].getFullYear();
    const day2 = date[1].getDate();
    const month2 = date[1].getMonth() + 1;
    const year2 = date[1].getFullYear();
    
    return `${day1}-${month1}-${year1} to ${day2}-${month2}-${year2}`;
  } 
}

const handleApply = () => {
  const temp = {
    startDate: date.value[0],
    endDate: date.value[1]
  }
  
  emits('applyDate', temp)
}
</script>

<style>
.dp__calendar_item:has(.dp__cell_offset){
  pointer-events: none;
}

.dp__input {
  width: max-content !important;
  @media screen and (max-width: 767px) {
    width: 100% !important;
  }
}

.dp__menu {
  font-family: 'Inter' !important;
}

.dp__selection_preview {
  color: red !important;
  font-family: Inter;
}

.dp__range_start, .dp__range_end, .dp__action_select, .dp__overlay_cell_active, .dp__active_date  {
  background:red !important;
}

.dp__today {
  border: 1px solid red !important;
}
</style>