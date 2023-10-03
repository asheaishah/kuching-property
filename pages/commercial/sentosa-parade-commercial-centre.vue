

<template>
  <div>
    <div class="py-6 select-none bg-red-500">
      <h1 class="text-xl font-semibold text-center text-white sm:text-2xl">
        <!--The white coloured text rename to desired Main title. will be displayed on the page-->
        Kuching Sentosa Parade Commercial Centre
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
         <Design2 :floor-plan-prop= "MtoR" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
          
          </h3>
         <Design2 :floor-plan-prop= "StoU" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
    
          </h3>
         <Design2 :floor-plan-prop= "UtoZ" />
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
        { title: '24 Hours' , floor: 'Ground floor', lot: 'No.1702', url: 'IMG_20230808_092027' },
        { title: '777 Cafe' , floor: 'Ground floor', lot: 'No.1695-1696', url: '1691922993123' },
        { title: 'Ah Wu Enterprise Sdn. Bhd', floor: 'Ground floor', lot: 'No.1689', url: '1691922993163' },
        { title: 'Aspec Car Accessories', floor: 'First two floor', lot: 'No.1612', url: 'IMG_20230808_093219' },
        { title: 'Atomy: Kuching Sentosa Prosper Centre', floor: 'First floor',lot: 'No.1621', url: 'IMG_20230808_092959 Atomy' },
        { title: 'Auto Gard Enterprise', floor: 'Ground floor',lot: 'No.1618', url: 'IMG_20230808_093023 Auto' },
        { title: 'Bank Rakyat', floor: 'Two floors' , lot: 'No.1654', url: 'IMG_20230808_092554' },
        { title: 'Batu 8 Mart', floor: 'Ground floor', lot: 'No.1688', url: '1691589854752 Mart' },
        { title: 'BEM (SIB) Olive Garden Church', floor: 'Two floors', lot: 'No.1678-1682', url: '1691917910729' },
        { title: 'Borneo Kedai Serbaneka', floor: 'Ground floor', lot: 'No.1700-1701', url: '1691922993097' },
        { title: 'Charm. S Hair Salon', floor: 'First floor', lot: 'No.1619', url: 'IMG_20230808_093023 Charm' },
        { title: 'CN Beauty Hair Saloon', floor: 'First floor', lot: 'no.1677', url: '1691917910693' },
      ],
      CtoK: [ 
        { title: 'CS Mini Market', floor: 'Ground floor', lot: 'No.1668-1673', url: 'IMG_20230808_092325' },
        { title: 'D Valley Supermarket', floor: 'Ground floor', lot: 'No.1626-1634', url: '1691589854912' },
        { title: 'Dar Zen Food Centre', floor: 'Ground floor', lot: 'No.1635-1637', url: 'IMG_20230808_092758 Zen' },
        { title: 'Dima Certification Sdn Bhd', floor: 'First floor', lot: 'No.1639', url: 'IMG_20230808_092734 Dima' },
        { title: 'Ding Tea Cafe', floor: 'Ground floor', lot: 'No.1656', url: '1691589854903' },
        { title: 'Gold Mak Hydraulic Seal Kit Centre', floor: 'First floor', lot: 'No.1618', url: 'IMG_20230808_093023 Gold' },
        { title: 'Golden Dragon City Supermarket', floor: 'Ground floor', lot: 'No.1690-1694', url: '1691922993154' },
        { title: 'Guardian', floor: 'Ground floor', lot: 'No.1659', url: '1691589854858' },
        { title: 'Hey Hey Cafe', floor: 'Ground floor', lot: 'No.1687', url: '1691589854752' },
        { title: 'Ho Bi So Food Corner', floor: 'Ground floor', lot: 'No.1675-1677', url: '1691917910693 Ho' },
        { title: 'Klinik Pergigian Eternity Smile', floor: 'First floor', lot: 'No.1658', url: '1691589854846' },
        { title: 'KS Ingredients Sdn.Bhd', floor:'Ground floor', lot: 'No.1619', url: 'IMG_20230808_093023' },

      ],
      MtoR: [
        { title: 'Master Money Lender Sdn.Bhd', floor: 'First floor', lot: 'No.1623', url: 'IMG_20230808_092944 Master' },
        { title: 'Moms Laksa Cafe', floor: 'Ground floor', lot: 'No.1625', url: 'IMG_20230808_092920' },
        { title: 'Mr D.I.Y: Always Low Prices', floor: 'First two floor', lot: 'No.1661', url: '1691910061702' },
        { title: 'Nena Laundry: Clean & Fresh', floor: 'Ground floor', lot: 'No.1638', url: 'IMG_20230808_092758' },
        { title: 'New Atmosferah Restaurant 4', floor: 'Ground floor', lot: 'No.1685-1686', url: '1691589854758' },
        { title: 'NK Vape', floor: 'Ground floor', lot: 'No.1617', url: 'IMG_20230808_093039' },
        { title: 'Pasti Jaya Money Lender', floor: 'First floor', lot: 'No.1616', url: 'IMG_20230808_093056' },
        { title: 'Perusahaan Temiang Mutiara Sdn.Bhd', floor: 'First floor', lot: 'No.1638', url: 'IMG_20230808_092758 Perusahaan' },
        { title: 'PES Eco Engineering Sdn.Bhd', floor: 'First floor', lot: 'No.1624', url: 'IMG_20230808_092932 PES' },
        { title: 'Razor Barn Barbershop (For Rent)', floor: 'First floor', lot: 'No.1687', url: '1691589854752 Razorbarn' },
        { title: 'Refresh 88 (For Rent:01135338818)', floor:'Ground floor', lot: 'No.1697', url: '1691922993115' },
      ],
      StoU: [
        { title: 'Sam Fah', floor: 'Ground floor', lot: 'No.1642-1643', url: '1691910061689' },
        { title: 'Share Tea Cafe', floor: 'Ground floor', lot: 'No.1658', url: '1691910061586' },
        { title: 'Shellemas', floor: 'Ground floor', lot: 'No.1613', url: 'IMG_20230808_093202' },
        { title: 'Silantek Coal Sdn. Bhd', floor: 'First floor', lot: 'No.1637', url: 'IMG_20230808_092758 Silantek' },
        { title: 'Speed Wash 24-Hours Coin Laundry', floor: 'Ground floor', lot: 'No.1623', url: 'IMG_20230808_092944' },
        { title: 'Talent Autoparts Enterprise', floor: 'Three floors', lot: 'No.1622', url: 'IMG_20230808_092959' },
        { title: 'TCC Plastic and Household Sdn. Bhd', floor: 'First two floors', lot: 'No.1641', url: 'IMG_20230808_092734' },
        { title: 'Tealife Cafe', floor: 'Ground floor', lot: 'No.1624', url: 'IMG_20230808_092932' },
        { title: 'The Smart Credit Sdn.Bhd', floor: 'First floor', lot: 'No.1625', url: 'IMG_20230808_092920 Smart' },
        { title: 'Tian Xiang Cafe', floor: 'Ground floor', lot: 'No.1698-1699', url: '1691922993105' },
        { title: 'Tung Yang', floor: 'Ground floor', lot: 'No.1678-1682', url: '1691917910729' },
      ],
       UtoZ: [
        { title: 'V Home:Furniture Concept', floor: 'Ground floor', lot: 'No.1609-1610', url: 'IMG_20230808_093244' },
        { title: 'Wash And Dry', floor: 'Ground floor', lot: 'No.1684', url: '1691917910760' },
        { title: 'Zainab Family Food Court', floor: 'Ground floor', lot: 'No.1703', url: '1691910061600'},
      ],
      
    }
  },
}
</script>
