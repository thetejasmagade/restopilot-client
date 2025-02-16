<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/toast/use-toast";
import { useBaseStore } from "@/stores/useBaseStore";

const { toast } = useToast();
const baseStore = useBaseStore();
const router = useRouter();

const is_authenticated = ref<boolean>(
  localStorage.getItem("is_authenticated") === "true"
);

const tablesInfo = [
  {
    name: "Open",
    classes:
      "bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-950 border-gray-400",
  },
  {
    name: "Running",
    classes:
      "bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-800 border-yellow-400",
  },
  {
    name: "Done",
    classes:
      "bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-900 border-green-400",
  },
];

const tablesData = ref();
onMounted(async () => {
  if (is_authenticated.value) await fetchTableData();
  baseStore.selectedTableDataHandler(null);
});

const fetchTableData = async () => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}users/get-tables-data`;
  const userData = {
    mobile: Number(localStorage.getItem("mobile_no")),
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
      tablesData.value = data;
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: data.message,
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

interface SelectedTableData {
  id: number;
  area_name: string;
  order_type: number;
  tables: any;
}

const tableClickHandler = (tableData: SelectedTableData, id: number) => {
  console.log(tableData.tables[id].items);
  if (tableData.tables[id].items.length > 0)
    baseStore.isFoodItemsSectionOpen = false;
  else baseStore.isFoodItemsSectionOpen = true;

  const data = {
    id: tableData.id,
    area_name: tableData.area_name,
    table: tableData.tables[id],
  };
  console.log(data);
  baseStore.selectedTableDataHandler(data);
  router.push("/manage");
  // baseStore.hello();
};
</script>

<template>
  <section v-if="is_authenticated" class="overflow-y-auto h-[93vh]">
    <div class="p-4 block md:flex items-center justify-between">
      <h3 class="text-xl font-semibold">Manage Tables</h3>
      <div class="flex items-center justify-start md:justify-center gap-3 mt-2 md:mt-0 mb-2 md:mb-0">
        <div v-for="(info, i) in tablesInfo" :key="i" class="flex items-center justify-start gap-2">
            <div :class="info.classes" class="w-6 h-6 rounded-full border-2 border-dashed" />
            <div>{{ info.name }}</div>
        </div>
      </div>
    </div>
    <Separator class="mb-3" />
    <!-- Loop through each table group -->
    <div v-for="(tableData, i) in tablesData" :key="i" class="mb-8 px-4">
      <h2 class="text-primary font-semibold mb-2">
        {{ tableData.area_name }}
      </h2>

      <!-- Responsive grid layout: 2 columns on very small screens, then increasing -->
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-12 gap-4"
      >
        <!-- Loop through each table -->
        <div v-for="(table, j) in tableData.tables" :key="j">
          <div
            @click="tableClickHandler(tableData, j)"
            class="aspect-square rounded-md border-2 border-dashed cursor-pointer p-2 flex flex-col justify-center items-center transition-colors duration-300"
            :class="{
              'bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-950 border-gray-400':
                table.status === 0,
              'bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-800 border-yellow-400':
                table.status === 1,
              'bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-900 border-green-400':
                table.status !== 0 && table.status !== 1,
            }"
          >
            <div class="font-semibold">
              {{ table.table_name }}
            </div>
            <div v-if="table.status !== 0" class="mt-3">
              {{ table.total_amt + ".00 ₹" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
