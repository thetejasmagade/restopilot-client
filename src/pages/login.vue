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
  

  try {
    const response = await fetch(url, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify that we're sending JSON data
      },
      body: JSON.stringify(userData), // Convert the data to a JSON string
    });

    // Check if the response was successful
    const data = await response.json(); // Parse the JSON response
    console.log(data);
    if (response.ok) {
      localStorage.setItem("is_authenticated", true);
      localStorage.setItem("mobile_no", data.mobile);
      localStorage.setItem("data", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      localStorage.setItem("is_authenticated", false);
      toast({
        title: "Uh oh! Something went wrong.",
        description: data.message,
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
