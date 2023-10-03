<template>
    <div>
    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/3 p-2" v-for="(floorPlan, index) in floorPlan.floorPlanProp" :key="index">
        <div class="space-y-1 cursor-pointer" @click="toggleModal(floorPlan.url)">
          <img :src="images[floorPlan.url]" class="mx-auto rounded force-landscape" />
          <p class="text-center custom-font" :style="{ color: floorPlan.textColor }">
  <span class="rounded-lg shadow-xl p-4">{{ floorPlan.title }}</span>
</p>

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
  const glob = import.meta.glob(`~/assets/img/tunkuPutra/floorlayout/*.jpg`, { eager: true });
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  );
  </script>
  <style scoped>
.fixed-size {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
}
</style>
<style scoped>
.force-landscape {
  width: 300px;  /* Or whatever width you want */
  height: 200px;  /* Or whatever height you want */
  object-fit: cover;
  object-position: center;
}
.custom-font {
  font-family: 'Arial, sans-serif';
}

</style>
