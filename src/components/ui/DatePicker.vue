<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { ref, watch } from "vue";
import { format } from 'date-fns'
import { useBaseStore } from "@/stores/useBaseStore";
import VueDatePicker from '@vuepic/vue-datepicker';

const baseStore = useBaseStore();
const date = defineModel<Date>();
const isOpen = ref(false);

watch(date, () => {
  isOpen.value = false;
});
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn('w-[250px] md:w-[280px] justify-start text-left font-normal', 'text-muted-foreground')"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ date ? format(date, 'dd-MM-yyyy') : "Select Date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        :clearable="false"
        auto-apply
        no-today
        inline
        :max-date="new Date()"
        :dark="baseStore.isDarkMode"
      />
    </PopoverContent>
  </Popover>
</template>

<style>

</style>
