<script setup lang="ts">
import { useBaseStore } from "@/stores/useBaseStore";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const baseStore = useBaseStore();

// List of dynamic payment methods
const paymentMethods = [
  { id: "cash", label: "Cash" },
  { id: "card", label: "Card" },
  { id: "upi", label: "UPI" },
];

// Handle input blur (when the user finishes editing the qty)
const handleInputBlur = (id: number) => {
  if (baseStore.selectedFoodArray[id].qty <= 0) {
    baseStore.removeFoodItem(id);
  } else {
    baseStore.updateTotalAmt(); // Ensure totalAmt is updated
  }
};

// Handle input change (allow only numbers)
const handleInputChange = (id: number, event: Event) => {
  const input = event.target as HTMLInputElement;
  // Replace any non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, "");
  baseStore.selectedFoodArray[id].qty = Number(input.value); // Update qty with the numeric value
  baseStore.updateTotalAmt(); // Ensure totalAmt is updated
};
</script>

<template>
  <div>
    <div class="flex-col">
      <div class="relative overflow-x-auto h-[72vh] responsive-h-scroll-div">
        <div v-if="baseStore.selectedFoodArray.length > 0">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-white uppercase bg-gray-800 dark:bg-[#4f4f53] dark:text-gray-200 sticky top-0 z-10"
            >
              <tr>
                <th scope="col" class="pl-2 lg:pl-4 py-3"></th>
                <th scope="col" class="pr-2 lg:pr-6 py-3">FOOD ITEM NAME</th>
                <th scope="col" class="pl-2 lg:px-6 py-3">QTY.</th>
                <th scope="col" class="pl-2 lg:px-6 py-3">PRICE (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in baseStore.selectedFoodArray"
                :key="i"
                class="bg-gray-50 dark:bg-[#18181B] border-b dark:border-gray-700"
              >
                <td class="pl-2 lg:pl-4 py-4">
                  <img
                    @click="baseStore.removeFoodItem(i)"
                    src="@/assets/icons/base/cross.svg"
                    alt="cross-icon"
                    class="cursor-pointer"
                  />
                </td>
                <td
                  scope="row"
                  class="pl-2 lg:pl-0 pr-2 lg:pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ item.value }}
                </td>
                <td class="px-2 lg:px-6 py-4">
                  <div
                    class="qty-input-group relative flex items-center justify-between gap-2 max-w-[10rem]"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      @click="baseStore.handleIncrementDecrement('dec', i)"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </Button>
                    <Input
                      @blur="handleInputBlur(i)"
                      @input="handleInputChange(i, $event)"
                      type="text"
                      v-model.number="item.qty"
                      maxlength="4"
                      class="h-8 px-1 lg:px-3 text-center block w-full focus:!ring-0 focus-visible:!ring-offset-0 focus:border-red-500 focus:border-2 text-black dark:text-white"
                      required
                    />

                    <Button
                      variant="outline"
                      size="sm"
                      @click="baseStore.handleIncrementDecrement('inc', i)"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </Button>
                  </div>
                </td>
                <td class="px-2 lg:px-6 py-4 font-semibold text-base">
                  {{ item.price }}.00
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex lg:hidden items-center justify-center h-full">
            <div class="flex flex-col items-center justify-center">
              <Button
                class="my-3 block lg:hidden"
                @click="baseStore.handleIsFoodItemsSectionOpen()"
                >Add More Items</Button
              >
            </div>
          </div>
        </div>
        <div v-else class="flex items-center justify-center h-full">
          <div class="flex flex-col items-center justify-center">
            <div>Please select at least one item to make a bill....</div>
            <Button
              class="mt-3 block lg:hidden"
              @click="baseStore.handleIsFoodItemsSectionOpen()"
              >Add Items</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="border-t">
      <div
        class="block lg:flex flex-row-reverse items-center justify-between p-2"
      >
        <div
          class="w-full lg:w-1/4 flex items-baseline justify-end lg:justify-start gap-3 pb-2 lg:pb-0"
        >
          <Label>Total:</Label>
          <div class="text-yellow-500 font-bold text-3xl">
            {{ baseStore.totalAmt }}
          </div>
        </div>
        <div
          class="w-full lg:w-3/4 flex items-center justify-start gap-3 pt-2 lg:pt-0"
        >
          <Label>Payment Type:</Label>
          <!-- Dynamically render radio buttons for each payment method -->
          <RadioGroup
            v-model="baseStore.paymentType"
            default-value="cash"
            class="flex items-center justify-start gap-4"
          >
            <div
              v-for="method in paymentMethods"
              :key="method.id"
              class="flex items-center space-x-2"
            >
              <RadioGroupItem :id="method.id" :value="method.id" />
              <Label :for="method.id" class="cursor-pointer">{{
                method.label
              }}</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div class="flex items-center justify-between gap-3 p-2">
        <Button
          variant="secondary"
          class="w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-900"
          @click="baseStore.resetData()"
          >KOT</Button
        >
        <Button class="w-full" @click="baseStore.resetData()">Save</Button>
        <Button
          class="w-full bg-green-700 hover:bg-green-800"
          @click="baseStore.resetData()"
          >Save & eBill</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.qty-input-group .\[\&_svg\]\:size-4 svg {
  width: 0.6rem;
  height: 0.6rem;
}

@media screen and (max-width: 767px) and (min-height: 600px) and (max-height: 801px) {
  .responsive-h-scroll-div {
    height: 66vh;
  }
}

@media screen and (max-width: 767px) and (min-height: 802px) and (max-height: 911px) {
  .responsive-h-scroll-div {
    height: 70vh;
  }
}

@media screen and (max-width: 767px) and (min-height: 912px) and (max-height: 934px) {
  .responsive-h-scroll-div {
    height: 72vh;
  }
}

@media screen and (max-width: 820px) and (min-height: 935px) and (max-height: 1024px) {
  .responsive-h-scroll-div {
    height: 73vh;
  }
}

@media screen and (max-width: 820px) and (min-height: 1025px) and (max-height: 1180px) {
  .responsive-h-scroll-div {
    height: 75vh;
  }
}
</style>
