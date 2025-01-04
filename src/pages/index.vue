<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const hello = ref(JSON.parse(localStorage.getItem("data") || "null")?.items || [])
</script>

<template>
    <h1>home</h1>
    <RouterLink to="/manage">
        manage
    </RouterLink>
    <RouterLink to="/login">login</RouterLink>
    {{ hello }}
</template>