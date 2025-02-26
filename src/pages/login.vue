
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBaseStore } from "@/stores/useBaseStore";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const router = useRouter();
const baseStore = useBaseStore();

// Refs to bind to form fields
const mobile = ref("");
const password = ref("");
const isLoading = ref(false); // Loading state

// Handle login form submission
const handleLogin = async () => {
  isLoading.value = true; // Start loading
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}users`;
  const userData = {
    mobile: mobile.value,
    password: password.value,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      localStorage.setItem("is_authenticated", "true"); // Store as string
      localStorage.setItem("mobile_no", data.mobile);
      localStorage.setItem("data", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      baseStore.isAuthenticated = false;
      localStorage.clear();
      toast({
        title: "Uh oh! Something went wrong.",
        description: data.message,
      });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isLoading.value = false; // Stop loading
  }
};
</script>

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
          >
            Mobile Number
          </label>
          <Input
            type="number"
            id="mobile"
            v-model="mobile"
            placeholder="Enter your Mobile"
            class="w-full dark:bg-transparent focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 dark:border-gray-300 focus:dark:border-red-500"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-600 mb-2"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full dark:bg-transparent focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 dark:border-gray-300 focus:dark:border-red-500"
            required
          />
        </div>

        <!-- Submit Button with Loading State -->
        <div>
          <Button type="submit" size="lg" class="w-full focus:outline-none" :disabled="isLoading">
            <span v-if="isLoading" class="flex items-center justify-center">
              <svg
                class="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Loading...
            </span>
            <span v-else>Log In</span>
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* You can add custom styles here */
</style>
