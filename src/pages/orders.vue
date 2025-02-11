<script setup lang="ts">
import { useRouter } from "vue-router";
import { useBaseStore } from "@/stores/useBaseStore";
import OrdersTable from "@/components/orders/OrdersTable.vue";

const baseStore = useBaseStore();
const router = useRouter();
</script>

<template>
  <section>
    <OrdersTable />
  </section>
</template>
