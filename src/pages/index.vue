<script setup lang="ts">
import { ref } from 'vue';
const hello = ref(JSON.parse(localStorage.getItem("data") || "null")?.items || [])
</script>

<template>
    <h1>home</h1>
    {{ hello }}
</template>