

<template>
    <div>
      <div class="py-6 select-none bg-red-500">
        <h1 class="text-xl font-semibold text-center text-white sm:text-2xl">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          Kuching The Prince Commercial Centre
        </h1>
      </div>
      <div class="max-w-4xl px-2 mx-auto space-y-6 divide-y">
       <!-- Facilities  -->
       <!-- The white coloured text will be displayed on your page. Rename accordingly to your requirements-->
       <!-- Check file components>Design.vue file line 67 for next step-->
        <section  class="py-6 space-y-6">
            <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl"></h3>
            <section>
        <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              
            </h3>
            <!-- You can rename LayoutOneBedroom to your desired variable name
            example: rename "LayoutOneBedroom" on line 27 to "MallLGFloor". DON'T forget to rename LayoutOneBedroom on line 72 to MallLGFloor too
            Do the same to the rest if you are required to rename it. For example "LayoutTwoBedroom" on line 33 and line 79-->
            <Design2 :floor-plan-prop= "AtoC" />
          </div>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              
            </h3>
           <Design2 :floor-plan-prop= "CtoK" />
          </div>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
            
            </h3>
      
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
    data () {
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
        AtoC: [
          { title: 'Affin Bank' , floor: 'Two floors', lot: 'No.1319-1320', url: '1691589854748' },
          { title: 'Anoyze Enterprise' , floor: 'First floor', lot: 'No.1327', url: '1691589854666 Anoyze' },
          { title: 'Brooke Drive Electrical Trading', floor: 'Ground floor', lot: 'No.1330', url: '1691589854649 (1)' },
          { title: 'Eneos JF Motors Sdn.Bhd', floor: 'First two floors', lot: 'No.1331', url: '1691589854670' },
          { title: 'Fresh Wash Laundry', floor: 'Ground floor',lot: 'No.1327', url: '1691589854666' },
          { title: 'Ingenious Tuition Centre', floor: 'First floor',lot: 'No.1328-1330', url: '1691589854662' },
          { title: 'K.S Wong Agency', floor: 'First floor' , lot: 'No.1325', url: 'IMG_20230808_092554' },
          { title: 'Kedey Aya: Pembekal Bahan Bakeri', floor: 'Ground floor', lot: 'No.1334', url: '1691589854693' },
          { title: 'Las Artes Studio Bridal Photography', floor: 'Ground floor', lot: 'No.1329', url: '1691589854657' },
          { title: 'Mrussang Enterprise', floor: 'Two floors', lot: 'No.1335', url: '1691589854710' },
          { title: 'One United', floor: 'Second floor', lot: 'No.1327', url: '1691589854666 United' },
          { title: 'Persatuan Klan (Fan Yang) Lu Kuching Samarahan', floor: 'Second floor', lot: 'no.1321', url: '1691589854741' },
        ],
        CtoK: [ 
          { title: 'S-OIL Rider 7 JF Motors Sdn.Bhd', floor: 'Ground floor', lot: 'No.1332', url: '1691589854678' },
          { title: 'Sri Sarjana Academic Centre', floor: 'First floor', lot: 'No.1322-1323', url: '1691589854741 Sarjana' },
          { title: 'Teck Lee Huat Furniture Trading Sdn. Bhd', floor: 'Ground floor', lot: 'No.1324-1326', url: '1691589854730' },
  
        ],
        
      }
    },
  }
  </script>
  