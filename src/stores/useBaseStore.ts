import { computed } from 'vue';
import { defineStore } from 'pinia';

interface Filter {
  id: number;
  value: string;
}

interface Food {
  id: number;
  value: string;
  filter_id: number;
  price: number;
  food_type: number;
  is_most_selling: boolean;
  qty: number;
}

export const useBaseStore = defineStore('base', {
  state: () => ({
    isAuthenticated: false,
    sidebarOpen: true,
    selectedFilter: (JSON.parse(localStorage.getItem("data") || "null")?.filters[0]) || [],
    selectedFoodArray: [] as Food[],
    paymentType: 'cash' as 'cash' | 'card' | 'upi',
    totalAmt: 0,
    isFoodItemsSectionOpen: true,
  }),
  actions: {
    handleAuth() {
      this.isAuthenticated = !this.isAuthenticated;
    },
    handleSidebar() {
      this.sidebarOpen = !this.isSidebarOpen;
    },
    handleSelectedFilter(filter: Filter) {
      this.selectedFilter = filter;
    },
    handleSelectedFood(food: Food) {
      // Check if the food already exists in the cart by its 'id'
      const existingFood = this.selectedFoodArray.find(item => item.id === food.id);

      if (existingFood) {
        // If food already exists, increase the qty by 1
        existingFood.qty += 1;
      } else {
        // If food is not found, add it with qty set to 1
        const newFood = { ...food, qty: 1 };
        this.selectedFoodArray.push(newFood);
      }

      // Update the totalAmt
      this.updateTotalAmt();
    },
    handleIncrementDecrement(type: 'inc' | 'dec', id: number): void {
      const food = this.selectedFoodArray[id];

      if (type === 'inc') {
        food.qty += 1;
      } else if (type === 'dec') {
        if (food.qty == 1) {
          this.selectedFoodArray = this.selectedFoodArray.filter((_item: Food, i: number) => i != id);
        } else {
          food.qty -= 1;
        }
      }

      // Update the totalAmt after increment or decrement
      this.updateTotalAmt();
    },
    removeFoodItem(id: number): void {
      // Remove food item by its id
      this.selectedFoodArray = this.selectedFoodArray.filter((_item: Food, i: number) => i != id);

      // Update the totalAmt after removal
      this.updateTotalAmt();
    },
    // Method to update the total amount based on the selected food items
    updateTotalAmt() {
      this.totalAmt = this.selectedFoodArray.reduce((total, food) => total + (food.price * food.qty), 0);
    },
    // Method to reset the store data to its default values
    resetData() {
      this.selectedFilter = (JSON.parse(localStorage.getItem("data") || "null")?.filters[0]) || [];
      this.selectedFoodArray = [];
      this.paymentType = 'cash';
      this.totalAmt = 0;
    },
    handleIsFoodItemsSectionOpen() {
      this.isFoodItemsSectionOpen = !this.isFoodItemsSectionOpen;
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated,
    isSidebarOpen: (state) => state.sidebarOpen,
    selectedFoodType: (state) => state.selectedFilter,
    selectedFood: (state) => state.selectedFoodArray,
    getTotalAmt: (state) => state.totalAmt,
    getIsFoodItemsSectionOpen: (state) => state.isFoodItemsSectionOpen
  },
});
