<template>
  <div>
    <div class="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-4">
      <div v-for="(floorPlan, index) in floorPlan.floorPlanProp" :key="index" class="space-y-1 cursor-pointer"
        @click="toggleModal(floorPlan.url)">
        <div class="mb-4 rounded overflow-hidden shadow-md">
          <img :src="images[floorPlan.url]" class="w-full h-32 sm:h-48 object-cover" />
          <div class='m-4'>
            <p class="text-left font-semibold">{{ floorPlan.title }}</p>
            <p class="text-left text-sm">{{ floorPlan.lotNo }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        overscroll-y-contain
        overflow-auto
      ">
      <div ref="modalRef" class="relative w-auto my-auto mx-auto max-w-6xl">
        <!--content-->
        <div class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          ">
          <!--body-->
          <div class="relative p-6 flex-auto">
            <img :src="images[imageUrl]" alt="" class="mx-auto rounded" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { filename } from 'pathe/utils';

let modal = ref(false)
const modalRef = ref(null)
let imageUrl = ref(null)
const floorPlan = defineProps({ floorPlanProp: Array })

onClickOutside(
  modalRef,
  (event) => {
    console.log(event)
    modal.value = false
  },
)

function toggleModal(url) {
  imageUrl.value = url
  modal.value = true
}
// rename: `~/assets/img/floorlayout/*.jpg` to your intended folder. 
// example: you have a folder named shoplots in file assets>img change the above line to: `~/assets/img/shoplots/*.jpg`
// **if the file type is .png change *.jpg in `~/assets/img/shoplots/*.jpg`,  to *.png
// back to file pages>condo.vue continue to check the steps on line 24
const glob = import.meta.glob(`~/assets/img/farley/*.jpg`, { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>