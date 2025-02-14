<template>
  <div>
    <component :is="layout">
      <RouterView />
    </component>
    <Toaster />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import AppLayout from "@/layouts/app-layout.vue";
import DefaultLayout from "@/layouts/default.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { useBaseStore } from "@/stores/useBaseStore";

const baseStore = useBaseStore();

const isAuthenticated = JSON.parse(
  localStorage.getItem("is_authenticated") || "false"
);

// Determine which layout to use based on authentication state
const layout = computed(() => (isAuthenticated ? AppLayout : DefaultLayout));

onMounted(() => {
  document.body.classList.remove("dark");
  if (localStorage.getItem("theme") == "light")
    localStorage.setItem("theme", "light");
  else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  }
  baseStore.handleDarkMode(localStorage.getItem("theme"));
});
</script>
