
<template>
  <div>
    <div class="py-6 select-none bg-red-500">
      <h1 class="text-xl font-semibold text-center text-white sm:text-2xl">
        <!--The white coloured text rename to desired Main title. will be displayed on the page-->
        Kuching 7th Mile Directory
      </h1>
    </div>
    <div class="max-w-4xl px-2 mx-auto space-y-6 divide-y">
     <!-- Facilities  -->
     <!-- The white coloured text will be displayed on your page. Rename accordingly to your requirements-->
     <!-- Check file components>Design.vue file line 67 for next step-->
      <section  class="py-6 space-y-6">
          <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl">Places </h3>
          <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Eatery Places
          </h3>
          <!-- You can rename LayoutOneBedroom to your desired variable name
          example: rename "LayoutOneBedroom" on line 27 to "MallLGFloor". DON'T forget to rename LayoutOneBedroom on line 72 to MallLGFloor too
          Do the same to the rest if you are required to rename it. For example "LayoutTwoBedroom" on line 33 and line 79-->
          <Design2 :floor-plan-prop="EateryPlaces" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Shopping Places
          </h3>
          <Design2 :floor-plan-prop="ShoppingPlaces" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Vehicles & Motors
          </h3>
          <Design2 :floor-plan-prop="VehiclesandMotors" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Wet Markets
          </h3>
          <Design2 :floor-plan-prop="WetMarkets" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Electronics
          </h3>
          <Design2 :floor-plan-prop="Electronics" />
        </div>
      </div>
    </section>
        </div>
      </section> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Please rename the title (orange coloured text) and url (orange coloured text) below to the intended title and images
      //the title will be displayed on the page and
      //url needs to use the same name with the name of the pictures you put in the assets>img>create your-own-folder (to hold the pictures)
      //example; for this template, we have a folder named floorlayout. 
      //floorlayout folder have a picture named: Layout1.jpg so the url part below will be url: 'Layout1'
      //so if you create your-own-folder named: shoplots, and import all the pictures into the folder the steps will be the same
      //example: assets>img>shoplots>watson.jpg, the title will be, title: 'Watson' and url will be, url: 'watson' 

      //You can add and remove the number of layout below according to your requirements. 
      //delete the whole line if not needed, and add the whole line if needed. example on LayoutFourBedroom and LayoutFiveBedroom
      EateryPlaces: [
        { title: 'Zainab Family Food Court', url: '1691589854852-min' },
        { title: 'Hi Bread Kopitiam', url: '1691589855006-min' },
        { title: 'Tai Hua Tea House', url: '1691589855023-min' },
        { title: '7 Food Station', url: '1691905049908-min' },
        { title: 'Sugarbun', url: '1691905050675-min' },
      ],
      ShoppingPlaces: [
        { title: 'D Valley Supermarket', url: '1691589854912-min' },
        { title: 'H & L Supermarket', url: '1691905049483-min' },
        { title: 'CS Mini Market', url: 'IMG_20230808_092325-min' },
        { title: 'Golden Dragon City Supermarket', url: '1691922993154-min' },
        { title: 'Mr. DIY: Always Low Prices', url: '1691589854923-min' },
      ],
      VehiclesandMotors: [
        { title: 'Tay Motors: Maxxis Daytona Sport Motorcycle Service', url: '1691589855001-min' },
        { title: 'Tay Motors: KTM', url: '1691905050639-min' },
        { title: 'Reva Tyre & Wheel Trading Co.', url: '1691905050346-min' },
        { title: 'Tay Motors: Tim Sun', url: '1691905050110-min' },
        { title: 'C.N.T: Automotive Car Accessories', url: '1691905050093-min' },
      ],
      WetMarkets: [
        { title: 'Pasar Kota Sentosa Wet Market', url: '1691589854788-min' },
        { title: 'Ayam Mahkota Wet Market', url: '1691905049736-min' },
        { title: 'KCV Wet Market', url: '1691905049787-min' },
        { title: 'Ayam Champion', url: '1691905049680-min' },
      ],
      Electronics: [
        { title: 'Vivo Telecommunication Store', url: '1691589854923-min' },
        { title: 'Siong How Electronic Store', url: '1691905050494-min' },
        { title: 'Hotlink Telecommunication Store', url: '1691905049857-min' },
      ],

    }
  },
}
</script>
