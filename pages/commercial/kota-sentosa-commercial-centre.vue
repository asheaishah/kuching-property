

<template>
    <div>
      <div class="py-6 select-none bg-red-500">
        <h1 class="text-xl font-semibold text-center text-white sm:text-2xl">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          Kuching Kota Sentosa Commercial Centre
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
            <Design2 :floor-plan-prop= "DtoE" />
          </div>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
            
            </h3>
           <Design2 :floor-plan-prop= "FtoG" />
          </div>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
      
            </h3>
           <Design2 :floor-plan-prop= "HtoI" />
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
          { title: '77 Mart' , floor: 'Ground Floor', lot: 'No.626', url: '1691905049553' },
          { title: '7th Mile Penrissen Road Community Association Kuching' , floor: 'Ground floor', lot: 'No.374', url: '1691905049404' },
          { title: 'Asia Tailor', floor: 'Ground floor', lot: 'No.382', url: '1691905049507' },
          { title: 'Ayam Champion', floor: 'Ground floor', lot: 'No.611', url: '1691905049680' },
          { title: 'Ayam Mahkota', floor: 'Ground floor',lot: 'No.377-378', url: '1691905049736' },
          { title: 'Communication Equipment Store', floor: 'Ground floor',lot: 'No.377', url: '1691905049857' },
          { title: 'Demo Car Accessories', floor: 'Ground floor',lot: 'No.375', url: '1691905049810' },
        ],
        DtoE: [
          { title: 'Fresh Food Court Corner' , floor: 'Ground floor', lot: 'No.379', url: '1691905049893' },
          { title: 'Fresh Three Layer Food Court' , floor: 'Ground floor', lot: 'No.386', url: '1691905049440' },
          { title: 'Great Central Tailor', floor: 'Ground floors', lot: 'No.385', url: '1691905049489' },
          { title: 'H & L Hypermarket', floor: 'Ground floor', lot: 'No.386', url: '1691905049483' },
          { title: 'Hao Jing Cafe', floor: 'Ground floor',lot: 'No.625', url: '1691905049560' },
          { title: 'Hee Chuan Seng Cafe', floor: 'Ground floor',lot: 'No.618', url: '1691905049606' },
          { title: 'Hong Leong Bank', floor: 'Ground floor' , lot: 'No.623-624', url: '1691905049567' },
        ],
        FtoG: [
          { title: 'Hover Enterprise' , floor: 'Ground floor', lot: 'No.629', url: '1691905049532' },
          { title: 'Jew Fatt Promaxx Enterprise' , floor: 'Ground floor', lot: 'No.628', url: '1691905049539' },
          { title: 'Jin Jin Beauty Hair Saloon', floor: 'Ground floor', lot: 'No.614', url: '1691905049640' },
          { title: 'Jumbo Grocer', floor: 'Ground floor', lot: 'No.619', url: '1691905049594' },
          { title: 'KCV Wet Market', floor: 'Ground floor',lot: 'No.375', url: '1691905049787' },
          { title: 'Kiong Ann Tong Drug Store Enterprise', floor: 'Ground floor',lot: 'No.622', url: '1691905049573' },
          { title: 'Kota Sentosa Basketball Club', floor: 'Ground floor' , lot: 'No.371-373', url: '1691905049397' },
        ],
        HtoI: [
          { title: 'Kota Sentosa Street Market' , floor: 'Ground floor', lot: 'No.1106-1107', url: '1691905049693' },
          { title: 'Leong Cheong Huat Sdn.Bhd.' , floor: 'Ground floor', lot: 'No.621', url: '1691905049578' },
          { title: 'Mini shop', floor: 'Ground floor', lot: 'No.378', url: '1691905049874' },
          { title: 'Nippon Paint', floor: 'Ground floor', lot: 'No.615-616', url: '1691905049619' },
          { title: 'Nutribest Fresh Mart Sdn. Bhd.', floor: 'Ground floor',lot: 'No.612', url: '1691905049667' },
          { title: 'Ong Smartphone Enterprise', floor: 'Ground floor',lot: 'No.386', url: '1691905049467' },
          { title: 'Optik Sentosa', floor: 'Ground floor' , lot: 'No.381', url: '1691905049511' },
          { title: 'Pasar Kota Sentosa', floor: 'Two floors', lot: 'No.416,668,669,686', url: '1691589854822' },
          { title: 'Perpustakaan Awam Kota Sentosa', floor: 'Ground floor', lot: 'No.369', url: '1691589854975' },
          { title: 'Poh Lok Kopitiam', floor: 'Ground floor', lot: 'No.617', url: '1691905049612' },
          { title: 'Red One: Communication Equipment Store', floor: 'Ground floor', lot: 'No.620', url: '1691905049589' },
          { title: 'Suhardi Cafe' , floor: 'Ground floor', lot: 'No.383', url: '1691905049501' },
          { title: 'Taska Dewan Perniagaan Batu 7' , floor: 'Two floors', lot: 'No.368', url: '1691905049432' },
          { title: 'Tech Electronic and Electrical Centre', floor: 'Ground floor', lot: 'No.627', url: '1691905049545' },
          { title: 'Vivo Telecommunication Store', floor: 'Ground floor', lot: 'No.384', url: '1691905049495' },
          { title: 'Wangsa Mart ', floor: 'Ground floor',lot: 'No.376', url: '1691905049837' },
          { title: 'Yet Loong Cafe', floor: 'Ground floor',lot: 'No.613', url: '1691905049652' },
          { title: 'Zaaba Royati Catering', floor: 'Ground floor' , lot: 'No.380', url: '1691905049517' },
        ],
      }
    },
  }
  </script>
  