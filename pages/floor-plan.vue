<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Floor Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            1 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="OneBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            2 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            3 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroom" />
        </div>
      </div>
    </section>
    <BookAppointment />
  </div>
</template>

<script>
export default {
  data() {
    return {
      OneBedroom: [
        { title: 'Type A', url: 'coming-soon.png' },
      ],
      TwoBedroom: [
        { title: 'Type B1', url: 'coming-soon' },
        { title: 'Type B2', url: 'coming-soon' },
        { title: 'Type B3', url: 'coming-soon' },
      ],
      ThreeBedroom: [
        { title: 'Type C1', url: 'coming-soon' },
        { title: 'Type C2', url: 'coming-soon' },
        { title: 'Type C3', url: 'coming-soon' },
      ],
        FourBedroom: [
        { title: 'Type D1', url: 'coming-soon' },
        { title: 'Type D2', url: 'coming-soon' },
        ],
    }
  },
}
</script>
