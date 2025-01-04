<script setup lang="ts">
import { ref } from "vue";
import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { onMounted } from "vue";
import { watch } from "vue";

interface FoodItem {
  id: number;
  value: string;
  filter_id: number;
  price: number;
  food_type: number;
  is_most_selling: boolean;
  qty: number;
}

const baseStore = useBaseStore();

const foodItemsCopy = ref<FoodItem[]>(
  JSON.parse(localStorage.getItem("data") || "null")?.items || []
);
const foodItems = ref(foodItemsCopy.value);
const searchValue = ref("");

onMounted(() => {
  showMostSellingItems();
});

watch(
  () => baseStore.selectedFilter,
  () => {
    if (baseStore.selectedFilter.id != 0)
      foodItems.value = foodItemsCopy.value.filter(
        (item) => item.filter_id == baseStore.selectedFilter.id
      );
    else showMostSellingItems();
  }
);

const showMostSellingItems = () => {
  foodItems.value = foodItemsCopy.value.filter(
    (item) => item.is_most_selling == true
  );
};

const searchItems = () => {
  if (searchValue.value.trim() !== "") {
    foodItems.value = foodItemsCopy.value.filter((item) =>
      item.value.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  } else {
    if (baseStore.selectedFilter.id !== 0) {
      foodItems.value = foodItemsCopy.value.filter(
        (item) => item.filter_id === baseStore.selectedFilter.id
      );
    } else {
      showMostSellingItems();
    }
  }
};

const addFoodItem = (item: FoodItem) => {
  baseStore.handleSelectedFood(item);
}

const moveToBillSection = () => {
  baseStore.handleIsFoodItemsSectionOpen();
}
</script>
<template>
  <section>
    <div class="flex justify-center">
      <div class="relative w-full max-w-sm items-center">
        <Input
          v-model="searchValue"
          @input="searchItems()"
          id="search"
          type="text"
          placeholder="Search items..."
          class="pl-10 focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 bg-gray-100 dark:bg-[#18181B]"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-3"
        >
          <img
            src="@/assets/icons/base/search.svg"
            alt="search-icon"
            class="w-4 h-4"
          />
        </span>
      </div>
    </div>
    <div v-if="foodItems.length != 0" class="flex flex-wrap justify-start gap-3 mt-4 overflow-y-auto max-h-[85.5vh] lg:max-h-[84vh]">
        <div
        v-for="(item, i) in foodItems" :key="i"
          :class="[
            item.food_type == 0
              ? 'border-green-500'
              : item.food_type == 1
              ? 'border-red-500'
              : 'border-yellow-500',
          ]"
          @click="addFoodItem(item)"
          class="bg-gray-100 hover:bg-gray-200 dark:bg-[#18181B] dark:hover:bg-gray-800 p-2 rounded-md w-[47.5%] lg:w-[23.5%] h-24 border-l-[5px] cursor-pointer flex items-center relative select-none"
        >
          <img
            v-if="item.is_most_selling"
            src="@/assets/icons/base/star.svg"
            alt="top-right-image"
            class="absolute top-0 right-0 w-4 h-4 mr-2 mt-2"
          />
          {{ item?.value }}
        </div>
      </div>
    <div v-else class="flex items-center justify-center h-44">
      <h2 class="text-lg">No food items found....</h2>
    </div>
    <Button class="absolute bottom-2 right-2 block lg:hidden" @click="moveToBillSection()">Next</Button>
  </section>
</template>
