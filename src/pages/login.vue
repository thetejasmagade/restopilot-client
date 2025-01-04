<template>
  <div
    class="min-h-screen bg-gradient-to-r from-red-500 to-red-700 flex justify-center items-center"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <!-- Login Form -->
      <h2 class="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>

      <!-- Form -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="mobile"
            class="block text-sm font-medium text-gray-600 mb-2"
            >Mobile Number</label
          >
          <Input
            type="number"
            id="mobile"
            v-model="mobile"
            placeholder="Enter your Mobile"
            class="w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-600 mb-2"
            >Password</label
          >
          <Input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2"
            required
          />
        </div>

        <!-- Submit Button -->
        <div>
          <Button type="submit" size="lg" class="w-full focus:outline-none">
            Log In
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const router = useRouter();

// Refs to bind to form fields
const mobile = ref("");
const password = ref("");

// Handle login form submission
const handleLogin = async () => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}users`;
  const userData = {
    mobile: mobile.value,
    password: password.value,
  };

  localStorage.setItem("is_authenticated", true);
  localStorage.setItem("mobile_no", mobile.value);
  localStorage.setItem(
    "data",
    JSON.stringify({
      _id: "67707064c58ec0e5b02866af",
      mobile: 8433887822,
      filters: [
        { id: 0, value: "Most Selling" },
        { id: 1, value: "Soups" },
        { id: 2, value: "Burgers" },
        { id: 3, value: "Beverages" },
        { id: 4, value: "Coffee" },
        { id: 5, value: "Desserts" },
        { id: 6, value: "Vegetarian" },
      ],
      items: [
        {
          id: 0,
          value: "Chicken Burger",
          filter_id: 2,
          price: 200,
          food_type: 1,
          is_most_selling: true,
        },
        {
          id: 1,
          value: "Beef Burger",
          filter_id: 2,
          price: 250,
          food_type: 1,
          is_most_selling: false,
        },
        {
          id: 2,
          value: "Vegetable Soup",
          filter_id: 1,
          price: 150,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 3,
          value: "Tomato Soup",
          filter_id: 1,
          price: 130,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 4,
          value: "Coca-Cola",
          filter_id: 3,
          price: 50,
          food_type: 2,
          is_most_selling: true,
        },
        {
          id: 5,
          value: "Lemonade",
          filter_id: 3,
          price: 70,
          food_type: 2,
          is_most_selling: false,
        },
        {
          id: 6,
          value: "Latte",
          filter_id: 4,
          price: 100,
          food_type: 2,
          is_most_selling: false,
        },
        {
          id: 7,
          value: "Cappuccino",
          filter_id: 4,
          price: 120,
          food_type: 2,
          is_most_selling: false,
        },
        {
          id: 8,
          value: "Chocolate Cake",
          filter_id: 5,
          price: 180,
          food_type: 0,
          is_most_selling: true,
        },
        {
          id: 9,
          value: "Apple Pie",
          filter_id: 5,
          price: 150,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 10,
          value: "Vegetarian Burger",
          filter_id: 6,
          price: 220,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 11,
          value: "Chicken Soup",
          filter_id: 1,
          price: 180,
          food_type: 1,
          is_most_selling: true,
        },
        {
          id: 12,
          value: "Spicy Burger",
          filter_id: 2,
          price: 270,
          food_type: 1,
          is_most_selling: false,
        },
        {
          id: 13,
          value: "Iced Tea",
          filter_id: 3,
          price: 60,
          food_type: 2,
          is_most_selling: true,
        },
        {
          id: 14,
          value: "Mango Smoothie",
          filter_id: 3,
          price: 80,
          food_type: 2,
          is_most_selling: false,
        },
        {
          id: 15,
          value: "Blueberry Muffin",
          filter_id: 5,
          price: 160,
          food_type: 0,
          is_most_selling: true,
        },
        {
          id: 16,
          value: "Vanilla Cake",
          filter_id: 5,
          price: 140,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 17,
          value: "Cold Brew Coffee",
          filter_id: 4,
          price: 110,
          food_type: 2,
          is_most_selling: true,
        },
        {
          id: 18,
          value: "Cheese Burger",
          filter_id: 2,
          price: 230,
          food_type: 1,
          is_most_selling: false,
        },
        {
          id: 19,
          value: "Pumpkin Soup",
          filter_id: 1,
          price: 160,
          food_type: 0,
          is_most_selling: false,
        },
        {
          id: 20,
          value: "Chocolate Milkshake",
          filter_id: 3,
          price: 90,
          food_type: 2,
          is_most_selling: true,
        },
        {
          id: 21,
          value: "Falafel Burger",
          filter_id: 6,
          price: 210,
          food_type: 0,
          is_most_selling: false,
        },
      ],
    })
  );

  // try {
  //   const response = await fetch(url, {
  //     method: "POST", // HTTP method
  //     headers: {
  //       "Content-Type": "application/json", // Specify that we're sending JSON data
  //     },
  //     body: JSON.stringify(userData), // Convert the data to a JSON string
  //   });

  //   // Check if the response was successful
  //   const data = await response.json(); // Parse the JSON response
  //   console.log(data);
  //   if (response.ok) {
  //     localStorage.setItem("is_authenticated", true);
  //     localStorage.setItem("mobile_no", data.mobile);
  //     localStorage.setItem("data", JSON.stringify(data));
  //     setTimeout(() => {
  //       window.location.href = "/";
  //     }, 1000);
  //   } else {
  //     localStorage.setItem("is_authenticated", false);
  //     toast({
  //       title: "Uh oh! Something went wrong.",
  //       description: data.message,
  //     });
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  // }
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
