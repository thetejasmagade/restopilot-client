<template>
  <div>
    <component :is="layout">
      <RouterView />
    </component>
    <Toaster />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '@/layouts/app-layout.vue';
import DefaultLayout from '@/layouts/default.vue';
import Toaster from '@/components/ui/toast/Toaster.vue'

const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');


// Determine which layout to use based on authentication state
const layout = computed(() => isAuthenticated ? AppLayout : DefaultLayout);
</script>

