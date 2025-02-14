<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";

const route = useRoute();
const router = useRouter();
const baseStore = useBaseStore();

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  if (localStorage.getItem("theme") == "light")
    localStorage.setItem("theme", "dark");
  else localStorage.setItem("theme", "light");
  const theme = localStorage.getItem("theme")
  if(theme) baseStore.handleDarkMode(theme);
};

const newOrderHandler = () => {
  baseStore.selectedTableDataHandler(null);
  router.push("/");
};
</script>
<template>
  <nav
    class="h-[7vh] bg-background dark:bg-[#09090B] p-2 flex justify-between items-center border-b"
  >
    <div class="flex items-center">
      <!-- <div class="block lg:hidden">
        <img
          v-if="baseStore.isSidebarOpen"
          class="cursor-pointer mr-2"
          @click="baseStore.handleSidebar()"
          src="@/assets/icons/base/hamburger-open.svg"
          alt="hamburger-open-icon"
        />
        <img
          v-else
          class="cursor-pointer mr-2"
          @click="baseStore.handleSidebar()"
          src="@/assets/icons/base/hamburger.svg"
          alt="hamburger-icon"
        />
      </div> -->
      <RouterLink to="/">
        <div class="logo flex items-center justify-start gap-2 mr-6">
          <div
            class="w-10 h-10 rounded-md bg-primary flex items-center justify-center"
          >
            <img
              src="@/assets/icons/base/soup.svg"
              alt="logo"
              class="h-6 w-6"
            />
          </div>
          <div
            class="grid flex-1 text-left text-sm leading-tight sm:w-auto"
            :class="route.path != '/' ? 'w-[100px]' : 'w-auto'"
          >
            <span class="truncate font-semibold">Restaurant Name</span
            ><span class="truncate text-xs">Chinese Restaurant</span>
          </div>
        </div>
      </RouterLink>
      <Button
        @click="newOrderHandler()"
        v-if="route.path != '/'"
        size="sm"
        class="flex gap-[2px]"
      >
        <img
          src="@/assets/icons/base/plus.svg"
          class="w-4 h-4 m-0"
          alt="plus-icon"
        />
        <span class="hidden lg:block">Create</span> New Order
      </Button>
    </div>
    <div
      class="md:flex items-center justify-end gap-2"
      :class="
        baseStore.getIsFoodItemsSectionOpen && route.path == '/manage'
          ? 'hidden'
          : 'flex'
      "
    >
      <RouterLink to="/orders" class="text-primary">
        <img
          src="@/assets/icons/base/pages.svg"
          alt="color-mode-sun"
          class="cursor-pointer"
        />
      </RouterLink>
      <RouterLink to="/settings" class="text-primary">
        <img
          src="@/assets/icons/base/settings.svg"
          alt="color-mode-sun"
          class="cursor-pointer"
        />
      </RouterLink>
      <img
        @click="toggleTheme()"
        src="@/assets/icons/base/sun.svg"
        alt="color-mode-sun"
        class="cursor-pointer hidden md:block"
      />
    </div>
  </nav>
</template>
