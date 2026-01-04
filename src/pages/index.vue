<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/toast/use-toast";
import { useBaseStore } from "@/stores/useBaseStore";

interface TableItem {
  id: number | string;
  [key: string]: any;
}

const { toast } = useToast();
const baseStore = useBaseStore();
const router = useRouter();

const is_authenticated = ref<boolean>(
  localStorage.getItem("is_authenticated") === "true"
);
const userType = ref<string>(localStorage.getItem("userType") || "");

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
  {
    name: "Needs Cleaning",
    classes:
      "bg-red-200 hover:bg-red-300 dark:bg-red-800 dark:hover:bg-red-900 border-red-400",
  },
];

const refreshing = ref(false);
const tablesData = ref(JSON.parse(localStorage.getItem("data") || "null")?.table_data || []);
onMounted(async () => {
  if (is_authenticated.value && userType.value == 'billing') await fetchTablesData(false);
  baseStore.selectedTableDataHandler(null);
});

const fetchTablesData = async (isFromRefresh: any) => {
  if (isFromRefresh == true) refreshing.value = true;
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
  } finally {
    if (isFromRefresh == true)
      setTimeout(() => (refreshing.value = false), 500);
  }
};

interface SelectedTableData {
  id: number;
  area_name: string;
  order_type: number;
  tables: any;
}

const tableClickHandler = async (tableData: SelectedTableData, id: any) => {
  console.log(tableData.tables[id], tableData);
  if (tableData.tables[id].status == 2) {
    // Send update to server when table status is 2
    try {
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}users/update-table-status`;
      const body = {
        mobile: Number(localStorage.getItem("mobile_no")),
        table_data_id: tableData.id,
        table_id: tableData.tables[id].id,
        status: 0,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // const respData = await response.json();
      await updateSpecificTable(response);
    } catch (err) {
      console.error("Error updating table status:", err);
    }

    return;
  }
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

const updateSpecificTable = async (response: any) => {
  // Get stored data
    const data = JSON.parse(localStorage.getItem("data") || "{}");
    const tableData = Array.isArray(data.table_data) ? data.table_data : [];

    // API response
    const responseData = await response.json();

    // Find index of matching record
    const index = tableData.findIndex(
      (item: TableItem ) => item.id === responseData.id
    );

    if (index !== -1) {
      // Update only that record (merge or replace)
      tableData[index] = {
        ...tableData[index], // keep old fields if any
        ...responseData      // overwrite with latest response
      };

      // Save back to localStorage
      localStorage.setItem(
        "data",
        JSON.stringify({
          ...data,
          table_data: tableData
        })
      );
      // Update reactive ref so UI updates immediately
      tablesData.value = tableData;
    }
}
</script>

<template>
  <section>
    <div v-if="is_authenticated && userType == 'billing'" class="overflow-y-auto h-[93vh]">
      <div class="p-2 block md:flex items-center justify-between">
        <h3 class="text-xl font-semibold">Manage Tables</h3>
        <div class="flex items-center justify-between md:justify-start gap-2">
          <div class="flex items-center justify-start md:justify-center gap-3 mt-2 md:mt-0 mb-2 md:mb-0">
            <div v-for="(info, i) in tablesInfo" :key="i" class="flex items-center justify-start gap-2">
              <div :class="info.classes" class="w-6 h-6 rounded border-2 border-dashed" />
              <div>{{ info.name }}</div>
            </div>
          </div>
          <Button @click="fetchTablesData(true)">
            <img src="@/assets/icons/base/refresh.svg" class="h-4 w-4" :class="refreshing ? 'animate-[spin_1s_linear_infinite_reverse]' : ''
              " />
            <span class="hidden md:block">Refresh</span>
          </Button>
        </div>
      </div>
      <!-- <Separator class="mb-3" /> -->
      <!-- Loop through each table group -->
      <div class="border-t pt-3 
         bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)]
         dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]
         bg-[size:16px_16px] h-[86vh] overflow-y-auto">
        <div v-for="(tableData, i) in tablesData" :key="i" class="mb-8 px-4">
          <h2 class="text-primary font-semibold mb-2">
            {{ tableData.area_name }}
          </h2>

          <!-- Responsive grid layout: 2 columns on very small screens, then increasing -->
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-12 gap-4">
            <!-- Loop through each table -->
            <div v-for="(table, j) in tableData.tables" :key="j">
              <div @click="tableClickHandler(tableData, j)"
                class="aspect-square rounded-md border-2 border-dashed cursor-pointer p-2 flex flex-col justify-center items-center transition-colors duration-300"
                :class="{
                  'bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-950 border-gray-400':
                    table.status === 0,
                  'bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-800 border-yellow-400':
                    table.status === 1,
                  'bg-red-200 hover:bg-red-300 dark:bg-red-700 dark:hover:bg-red-800 border-red-400':
                    table.status === 2,
                  'bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-900 border-green-400':
                    table.status !== 0 && table.status !== 1 && table.status !== 1,
                }">
                <div class="font-semibold">
                  {{ table.table_name }}
                </div>
                <div v-if="table.status !== 0 && table.status !== 2" class="mt-3">
                  {{ table.total_amt + ".00 ₹" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="is_authenticated && userType == 'kitchen'" class="p-4">TGTG</div>
    <div v-else class="p-4">
      <RouterLink to="/login">Login Page</RouterLink>
    </div>
  </section>
</template>
