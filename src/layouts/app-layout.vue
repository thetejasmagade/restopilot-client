<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useBaseStore } from '@/stores/useBaseStore'
import Sidebar from '@/components/layouts/Sidebar.vue';
import Navbar from '@/components/layouts/Navbar.vue';

const baseStore = useBaseStore()
const route = useRoute()
</script>

<template>
    <div class="font-inter flex items-start justify-start w-full">
        <div class="h-screen overflow-hidden transition-all duration-300 ease-in-out border-r bg-gray-100 dark:bg-[#18181B] lg:block"
            :class="[route.name == 'ManagePage' ? 'w-[40%] lg:w-[16vw]' : 'w-0', baseStore.getIsFoodItemsSectionOpen ? 'block' : 'hidden']">
            <Sidebar />
        </div>

        <div class="w-full h-screen bg-background dark:bg-[#09090B]">
            <Navbar />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
