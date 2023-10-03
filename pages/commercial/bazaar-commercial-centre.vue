

<template>
    <div>
      <div class="py-6 select-none bg-red-500">
        <h1 class="text-xl font-semibold text-center text-white sm:text-2xl">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          Kuching Bazaar Commercial Centre
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
          { title: '24 Hours Store' , floor: 'Ground Floor', lot: 'No.1415', url: '1691905050198 24' },
          { title: '7 Food Station' , floor: 'Ground floor', lot: 'No.1565-1574', url: '1691905049908' },
          { title: '7 Mile Cafe', floor: 'Ground floor', lot: 'No.1544', url: '1691905051163' },
          { title: '7 Ten Cafe', floor: 'Ground floor', lot: 'No.1413-1425', url: '1691905050181' },
          { title: '89 Mini Mart', floor: 'Ground floor',lot: 'No.1555', url: '1691905050037' },
          { title: 'Amaron S.C.S Battery Company', floor: 'Ground floor',lot: 'No.1553', url: '1691905050078 Amaron' },
          { title: 'Au Soil Borneo Sdn.Bhd.', floor: 'Ground floor',lot: 'No.1516', url: '1691905050576' },
          { title: 'Authentic Chicken Rice', floor: 'Ground floor' , lot: 'No.1418-1419', url: '1691905050242' },
          { title: 'B and B Artisan Crafts Sdn.Bhd.', floor: 'Ground floor', lot: 'No.1538', url: '1691905050733' },
          { title: 'B.B Beauty', floor: 'First floor', lot: 'No.1417', url: '1691905050217 Beauty' },
          { title: 'Borneo Birding Tours Sdn.Bhd.', floor: 'First floor', lot: 'No.1405', url: '1691589855012' },
          { title: 'C.A.R Tyre and Enterprise', floor: 'Ground floor', lot: 'No.1556', url: '1691905050021' },
          { title: 'C.N.T Automative Car Accesories', floor: 'Ground floor', lot: 'No.1552', url: '1691905050093' },
          { title: 'Che Siang Auto Accessories' , floor: 'Ground floor', lot: 'No.1411', url: '1691905050144' },
          { title: 'Color Hair Saloon' , floor: 'First floor', lot: 'No.1464', url: '1691905050409' },
          { title: 'Communication Equipment Store', floor: 'Ground floor', lot: 'No.1553', url: '1691905050078 Communication' },
          { title: 'Control Solutions Engineering Sdn.Bhd.', floor: 'Second floor', lot: 'No.1540', url: '1691905050754 Control' },
          { title: 'Dobi Guru', floor: 'Ground floor',lot: 'No.1512', url: '1691905050610' },
          { title: 'Double Happiness Gold Smith', floor: 'Ground floor',lot: 'No.1409', url: '1691905050125 Happiness' },
          { title: 'E-Con Mart', floor: 'Ground floor' , lot: 'No.1468-1469', url: '1691905050292' },
          { title: 'Emas Sentosa Therapy', floor: 'First two floors', lot: 'No.1511', url: '1691905050610 Reflexology' },
          { title: 'Fantasy Snooker Recreation Club', floor: 'First floor', lot: 'No.1530', url: '1691905050842 Fantasy' },
          { title: 'Flash Express', floor: 'Ground floor', lot: 'No.1548', url: '1691905051043' },
          { title: 'Fu Ron Feng Spare Parts Sdn. Bhd.', floor: 'Ground floor', lot: 'No.1406', url: '1691905050125 Fu' },
          { title: 'Fujifilm Photo Studio', floor: 'Ground floor', lot: 'No.1563', url: '1691905049927' },
        ],
        DtoE: [
          { title: 'Gospel Harvest Church' , floor: 'First floor', lot: 'No.1556', url: '1691905050021 Gospel' },
          { title: 'Green Solution Company' , floor: 'Ground floor', lot: 'No.1522', url: '1691905050996' },
          { title: 'H.S Thian Chinese Physician', floor: 'Two floors', lot: 'No.1407', url: '1691905050125' },
          { title: 'Hair Saloon', floor: 'First floor', lot: 'No.1417', url: '1691905050125' },
          { title: 'Heng Seng Agro Hardware Sdn.Bhd.', floor: 'Ground floor',lot: 'No.1558', url: '1691905049991' },
          { title: 'Hi Bread Kopitiam', floor: 'Ground floor',lot: 'No.1405', url: '1691589855006' },
          { title: 'Hock Shin Autoparts Sdn. Bhd.', floor: 'Two floors' , lot: 'No.1554', url: '1691905050059 Hock' },
          { title: 'Hotlink', floor: 'First floor', lot: 'No.1553', url: '1691905050078 Hotlink' },
          { title: 'Hugo Construction Sdn.Bhd', floor: 'First floor', lot: 'No.1414', url: '1691905050198 Hugo' },
          { title: 'Iceney Florist and Handicraft', floor: 'First floor', lot: 'No.1563', url: '1691905049927 Moment' },
          { title: 'Infollective Solution Company', floor: 'Second floor', lot: 'No.1525', url: '1691905050930' },
          { title: 'J.K Music', floor: 'First two floors', lot: 'No.1321', url: '1691905049951' },
          { title: 'J.S Salon' , floor: 'First floor', lot: 'No.1551', url: '1691905050110 Salon' },
          { title: 'JEM Happy Cafe' , floor: 'Ground floor', lot: 'No.1559', url: '1691905049977' },
          { title: 'Johan Seals Enterprise', floor: 'Ground floor', lot: 'No.1541', url: '1691905050774' },
          { title: 'K.S Cafe', floor: 'Ground floor', lot: 'No.1564', url: '1691905049927 Cafe' },
          { title: 'Kedai Ubat Thong Kong', floor: 'Ground floor',lot: 'No.1408', url: '1691905050125 Thong' },
          { title: 'Klinik Alamedik Sdn. Bhd.', floor: 'Two floors',lot: 'No.1542', url: '1691905050790' },
          { title: 'Koperasi Tentera', floor: 'Ground floor' , lot: 'No.1459-1460', url: '1691905050478' },
          { title: 'L.L.W Construction Company', floor: 'First floor', lot: 'No.1416', url: '1691905050217 LLW' },
          { title: 'Love Car Wash', floor: 'Ground floor', lot: 'No.1528', url: '1691905050877' },
          { title: 'LTC Machinery Sdn.Bhd', floor: 'Ground floor', lot: 'No.1518', url: '1691905050531' },
          { title: 'Mahat Yoga', floor: 'First floor', lot: 'No.1516', url: '1691905050576 Mahat' },
          { title: 'Methodist Dorcan Care Centre', floor: 'Ground floor', lot: 'No.1539', url: '1691905050733 Dorcas' },
        ],
        FtoG: [
          { title: 'Mita Cake House' , floor: 'Ground floor', lot: 'No.1422', url: '1691589855017 Mita' },
          { title: 'MJ Power Trading' , floor: 'Ground floor', lot: 'No.1462', url: '1691905050443' },
          { title: 'Mummy Nyonya Kuih', floor: 'Ground floor', lot: 'No.1421', url: '1691905050261 Mummy' },
          { title: 'My Dobi Coin Laundry', floor: 'Ground floor', lot: 'No.1542', url: '1691905051120' },
          { title: 'Fresh Wash Laundry', floor: 'Ground floor',lot: 'No.1327', url: '1691589854666' },
          { title: 'Nam Fung Auto Parts Sdn.Bhd.', floor: 'First two floors',lot: 'No.1562', url: '1691905049927 Nam Fung' },
          { title: 'Nuba Kitai: Karaoke Pub and Lounge', floor: 'Ground floor' , lot: 'No.1546', url: '1691905051071' },
          { title: 'OYO: 7 Homestay', floor: 'Two floors', lot: 'No.1461', url: '1691589854693' },
          { title: 'Parti Pesaka Bumiputera Bersatu Sarawak', floor: 'First floor', lot: 'No.1411', url: '1691905050144 Parti Pesaka' },
          { title: 'Pusat Khidmat N12 Kota Sentosa', floor: 'First floor', lot: 'No.1412', url: '1691905050163' },
          { title: 'Pusat Tuisyen Warna', floor: 'First floor', lot: 'No.1542-1543', url: '1691905051120 Pusat Tuisyenjpg' },
          { title: 'Q-dees Scholar', floor: 'First floor', lot: 'No.1543', url: '1691905050805 Qdees' },
          { title: 'R.A Mart' , floor: 'Ground floor', lot: 'No.1465', url: '1691905050386' },
          { title: 'Reva Resources Sdn. Bhd.' , floor: 'First two floors', lot: 'No.1467', url: '1691905050328' },
          { title: 'Reva Tyre and Wheel Trading Co.', floor: 'First two floors', lot: 'No.1466', url: '1691905050346' },
          { title: 'S.Y Auto Air-Con Services', floor: 'Ground floor', lot: 'No.1416', url: '1691905050217 S.Y' },
          { title: 'Sentosa Inn', floor: 'Three floors',lot: 'No.1535-1536', url: '1691905050706' },
          { title: 'Sentosa Methodist Church', floor: 'Three floors',lot: 'No.1537', url: '1691905050733 Methodist' },
          { title: 'Sentosa Reflexology Sdn.Bhd.', floor: 'First floor' , lot: 'No.1420', url: '1691905050261 Reflexology' },
          { title: 'Seven M Enterprise', floor: 'First floor', lot: 'No.1557', url: '1691905050006' },
          { title: 'Sin Nam Mui Tackle Trading', floor: 'Ground floor', lot: 'No.1410', url: '1691905050144 Sin' },
          { title: 'SLS (East Malaysia) Sdn.Bhd', floor: 'Two floors', lot: 'No.1513', url: '1691905050596 SLS' },
          { title: 'Smart Little Beans', floor: 'First floor', lot: 'No.1555', url: '1691905050037 Smart' },
          { title: 'Sugarbun', floor: 'Ground floor', lot: 'No.1532-1533', url: '1691905050675' },
        ],
        HtoI: [
          { title: 'Supplink Trading' , floor: 'Ground floor', lot: 'No.1540', url: '1691905050754' },
          { title: 'Syarikat V.Terasi' , floor: 'First floor', lot: 'No.1418', url: '1691905050242 Terasi' },
          { title: 'T.N.A Trading', floor: 'Ground floor', lot: 'No.1550', url: '1691905051010' },
          { title: 'T.S Speedmart', floor: 'Ground floor', lot: 'No.1531', url: '1691905050656' },
          { title: 'Tai Hua Tea House', floor: 'Ground floor',lot: 'No.1471-1472', url: '1691589855023' },
          { title: 'Talent Mental Maths', floor: 'Second floor',lot: 'No.1552', url: '1691905050093 Talent' },
          { title: 'Tay Motors: Maxxis', floor: 'Ground floor' , lot: 'No.1473-1475', url: '1691589855001' },
          { title: 'Tay Motors', floor: 'Two floors', lot: 'No.1508-1510', url: '1691905050639' },
          { title: 'Three Two Cafe', floor: 'Ground floor', lot: 'No.1530', url: '1691905050842' },
          { title: 'Timsun Tay Motors', floor: 'Ground floor', lot: 'No.1551', url: '1691905050110' },
          { title: 'Triple 8', floor: 'Ground floor', lot: 'No.1557', url: '1691905050006 Triple 8' },
          { title: 'UNI Dance Studio', floor: 'First floor', lot: 'No.1519', url: '1691905050531 Dance' },
          { title: 'Victor Sports Company' , floor: 'Ground floor', lot: 'No.1543', url: '1691905050805' },
          { title: 'WES Electrical Trading Company' , floor: 'Ground floor', lot: 'No.1543', url: '1691905051144' },
          { title: 'Wonderland Car Accessories', floor: 'Ground floor', lot: 'No.1470', url: '1691905050277' },
          { title: 'Xceed Security Sdn. Bhd.', floor: 'First floor', lot: 'No.1552', url: '1691905050093 Branch' },
          { title: 'Xin Fu Zhou Cafe', floor: 'Ground floor',lot: 'No.1526-1527', url: '1691905050895' },
          { title: 'Yanfio Hair Studio', floor: 'First floor',lot: 'No.1563', url: '1691905050426' },
          { title: 'Yin Li Hair and Beauty Salon', floor: 'First floor' , lot: 'No.1410', url: '1691905050144 Yin' },
          { title: 'YL Auto Car Accesorries', floor: 'Ground floor', lot: 'No.1517', url: '1691905050550' },
  
        ],
      }
    },
  }
  </script>
  