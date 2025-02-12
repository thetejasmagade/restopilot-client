<script setup lang="ts">
import { format } from 'date-fns';
import { useRouter } from "vue-router";
import { useBaseStore } from "@/stores/useBaseStore";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/DatePicker.vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const baseStore = useBaseStore();
const router = useRouter();

const handleSaveAndEbill = async () => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}users/save-ebill`;
  const tableData = {
    mobile: Number(localStorage.getItem("mobile_no")),
    table_data_id: baseStore.selectedTableData?.id,
    table_id: baseStore.selectedTableData?.table.id,
    table_name: baseStore.selectedTableData?.table.table_name,
    status: 3,
    total_amt: baseStore.totalAmt,
    order_type: baseStore.selectedTableData?.table.order_type,
    items: baseStore.selectedFoodArray,
    payment_type: baseStore.paymentType,
    customer_info: {
      name: baseStore.customerInfo.name,
      mobile_no: baseStore.customerInfo.mobile_no,
      dob: baseStore.customerInfo.dob ? format(new Date(baseStore.customerInfo.dob), 'yyyy-MM-dd') : '',
    },
  };
  let response = await fetch(url, {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Specify that we're sending JSON data
    },
    body: JSON.stringify(tableData), // Convert the data to a JSON string
  });
  if (response.status != 200) {
    alert("Issue in updating data");
  } else {
    baseStore.resetData();
    router.push("/");
  }
};

const clearCustomerInfo = () => {
  baseStore.customerInfo = {
    name: "",
    mobile_no: "",
    dob: "",
  };
};

const handleApply = (val: any) => {
  console.log(val);
};
</script>

<template>
  <Dialog @update:open="clearCustomerInfo">
    <DialogTrigger as-child>
      <Button
        :disabled="baseStore.selectedFoodArray.length == 0"
        class="w-full bg-green-700 hover:bg-green-800"
        >Save & eBill</Button
      >
    </DialogTrigger>
    <DialogContent class="max-w-[90vw] md:max-w-[425px] font-inter rounded-lg">
      <DialogHeader>
        <DialogTitle>Save & eBill</DialogTitle>
        <DialogDescription> Does your Payment Received? </DialogDescription>
      </DialogHeader>
      <div class="font-inter grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-left">Name.</Label>
          <Input
            v-model="baseStore.customerInfo.name"
            id="name"
            placeholder="John Doe"
            class="col-span-3 focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 bg-gray-100 dark:bg-[#18181B]"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="mobile" class="text-left">Mobile No.</Label>
          <Input
            v-model="baseStore.customerInfo.mobile_no"
            id="mobile"
            type="number"
            placeholder="9874563210"
            class="col-span-3 focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 bg-gray-100 dark:bg-[#18181B]"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="dob" class="text-left">DOB.</Label>
          <DatePicker v-model="baseStore.customerInfo.dob" />
        </div>
      </div>

      <DialogFooter>
        <Button type="submit" @click="handleSaveAndEbill">
          Save this Bill
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
