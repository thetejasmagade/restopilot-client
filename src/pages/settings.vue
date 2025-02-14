<script setup lang="ts">
import { ref } from "vue";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useBaseStore } from "@/stores/useBaseStore";
import { cn } from "@/lib/utils";

const baseStore = useBaseStore();
const selectedSetting = ref(0);

interface Item {
  id: number;
  title: string;
}

const sidebarNavItems: Item[] = [
  {
    id: 0,
    title: "Account",
  },
  {
    id: 1,
    title: "Appearance",
  },
];

const logOut = () => {
  localStorage.clear();
  baseStore.isAuthenticated = false;
  window.location.reload();
};

const toggleTheme = (val: "light" | "dark") => {
  if (val == "light") {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
  localStorage.setItem("theme", val);
  const theme = localStorage.getItem("theme")
  if(theme) baseStore.handleDarkMode(theme);
};
</script>

<template>
  <section class="p-4">
    <div>
      <h3 class="text-xl font-semibold">Appearance</h3>
      <p class="text-md text-muted-foreground">
        Customize the appearance of the app. Automatically switch between day
        and night themes.
      </p>
    </div>
    <Separator class="my-3" />

    <div
      class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 px-4"
    >
      <aside class="-mx-4 lg:w-1/5">
        <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
          <Button
            v-for="item in sidebarNavItems"
            :key="item.title"
            as="a"
            variant="ghost"
            @click="selectedSetting = item.id"
            :class="
              cn(
                'w-full text-left justify-start cursor-pointer',
                selectedSetting == item.id &&
                  'bg-muted hover:bg-muted cursor-default'
              )
            "
          >
            {{ item.title }}
          </Button>
        </nav>
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <div v-if="selectedSetting == 0">
            <h3 class="text-xl font-medium">Account</h3>
            <p class="text-md text-muted-foreground">
              Update your account settings. Set your preferred settings.
            </p>
            <Separator class="my-2" />
            <div>
              <h5 class="text-md">Logout</h5>
              <p class="text-sm text-muted-foreground">
                Logout from this device.
              </p>
              <Button class="my-2 w-[120px]" @click="logOut">Log Out</Button>
            </div>
          </div>
          <div v-if="selectedSetting == 1">
            <h3 class="text-xl font-medium">Appearance</h3>
            <p class="text-md text-muted-foreground">
              Customize the appearance of the app. Switch between light and dark
              themes.
            </p>
            <Separator class="my-2" />
            <div>
              <h5 class="text-md">Theme</h5>
              <p class="text-sm text-muted-foreground">
                Select the theme for the dashboard.
              </p>
              <div class="flex items-center justify-start gap-2 mt-2">
                <div
                  @click="toggleTheme('light')"
                  class="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <div class="space-y-2 rounded-sm bg-[#ecedef] p-2">
                    <div class="space-y-2 rounded-md bg-white p-2 shadow-sm">
                      <div class="h-2 w-20 rounded-lg bg-[#ecedef]"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                    </div>
                    <div
                      class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm"
                    >
                      <div class="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                    </div>
                    <div
                      class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm"
                    >
                      <div class="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                    </div>
                  </div>
                </div>
                <div
                  @click="toggleTheme('dark')"
                  class="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <div class="space-y-2 rounded-sm bg-slate-950 p-2">
                    <div
                      class="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm"
                    >
                      <div class="h-2 w-20 rounded-lg bg-slate-400"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                    </div>
                    <div
                      class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm"
                    >
                      <div class="h-4 w-4 rounded-full bg-slate-400"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                    </div>
                    <div
                      class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm"
                    >
                      <div class="h-4 w-4 rounded-full bg-slate-400"></div>
                      <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
