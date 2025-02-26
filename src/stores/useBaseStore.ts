import { computed } from 'vue';
import { defineStore } from 'pinia';

export interface Filter {
  id: number;
  value: string;
}

export interface Food {
  id: number;
  value: string;
  filter_id: number;
  price: number;
  food_type: number;
  is_most_selling: boolean;
  qty: number;
}

export interface TableData {
  id: number,
  table_name: string,
  status: number,
  total_amt: number,
  order_type: number,
  items: Array<Food>
}

export interface SelectedTableData {
  id: number,
  area_name: string,
  table: TableData,
}

interface CustomerInfo {
  name: string,
  mobile_no: string,
  dob: string,
}

export const useBaseStore = defineStore('base', {
  state: () => ({
    isAuthenticated: false,
    sidebarOpen: true,
    darkMode: false,
    selectedFilter: (() => {
      const data = JSON.parse(localStorage.getItem("data") || "null");
      return Array.isArray(data?.filters) && data.filters.length > 0 ? data.filters[0] : [];
    })(),    
    selectedFoodArray: [] as Food[],
    paymentType: 'cash' as 'cash' | 'card' | 'upi',
    totalAmt: 0,
    isFoodItemsSectionOpen: true,
    selectedTableData: null as SelectedTableData | null,
    customerInfo: {
      name: '',
      mobile_no: '',
      dob: '',
    } as CustomerInfo
  }),
  actions: {
    handleAuth() {
      this.isAuthenticated = !this.isAuthenticated;
    },
    handleSidebar() {
      this.sidebarOpen = !this.isSidebarOpen;
    },
    handleDarkMode(val: string) {
      this.darkMode = val === 'dark';
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
      this.selectedTableData = null;
      this.paymentType = 'cash';
      this.totalAmt = 0;
    },
    handleIsFoodItemsSectionOpen() {
      this.isFoodItemsSectionOpen = !this.isFoodItemsSectionOpen;
    },
    selectedTableDataHandler(data: SelectedTableData | null): void {
      if(data) {
        this.selectedTableData = data;
        this.selectedFoodArray = data.table.items;
        this.updateTotalAmt()
      } else {
        this.selectedTableData = null;
        this.selectedFoodArray = [];
      }
    },
    updateOrderTypeHandler(id: number): void {
      if (this.selectedTableData?.table) {
        this.selectedTableData.table.order_type = id;
      } else {
        console.error("selectedTableData or table is undefined");
      }
    }
    
  },
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated,
    isSidebarOpen: (state) => state.sidebarOpen,
    isDarkMode: (state) => state.darkMode,
    selectedFoodType: (state) => state.selectedFilter,
    selectedFood: (state) => state.selectedFoodArray,
    getTotalAmt: (state) => state.totalAmt,
    getIsFoodItemsSectionOpen: (state) => state.isFoodItemsSectionOpen,
    getSelectedTableData: (state) => state.selectedTableData
  },
});
