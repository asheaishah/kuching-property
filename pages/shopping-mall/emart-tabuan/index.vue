
<template>
    <div>
      <nav class="bg-[#209b41] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 green:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-2xl font-bold text-white p-2">EMART TABUAN</div>
          <ul class="flex space-x-6 text-lg">
            <!-- Home link -->
            <li>
              <a
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="/shopping-mall/emart-tabuan"
              >
                Home
              </a>
            </li>
            <!-- Shop link -->
            <li>
              <a
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="/shopping-mall/emart-tabuan"
              >
               Shop
              </a>
            </li>
          </ul>
        </div>
      </nav>
        <div class="max-w-4xl px-2 mx-auto space-y-6 divide-y">
          <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
            <div class="space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <h3 class="text-xl font-semibold sm:text-2xl text-left">
                    EMART TABUAN
                </h3>
              <!--div class="grid lg:grid-cols-2 gap-10"-->
                <Design4 :floor-plan-prop="LayoutTwoBedroom" />
              <!--/div-->
            
            </div>
            
          </div>
            </div>
        </div>
        <div class="bg-[#209b41] py-1"> 
          <h2 class="text-15 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            @ 2023 EMART TABUAN
          </h2>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Address: Commercial Centre, No 1, Tabuan Tranquility, Jalan Canna, 93350 Kuching, Sarawak
          </footer>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Business Hours
            Mon-Sun:
            10:00 AM-10:00 PM
          </footer>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Facebook: https://www.facebook.com/emarttabuanjaya/?locale=ms_MY
          </footer>
          <footer class="text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Phone: 082-530 188
          </footer>
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
          //LayoutOneBedroom: [
            //{ title: 'Shop Layout', url: 'shoplotsmap' },
          //],
          LayoutTwoBedroom: [
    { title: 'Empty Lot', lotNo: 'G01A', url: 'nuxt1' },
    { title: 'Style Girl Accessories', lotNo: 'G01B', url: 'nuxt2' },
    { title: 'Restoran Chica.go 7', lotNo: 'G02-G04', url: 'nuxt3' },
    { title: 'IT SAME', lotNo: 'G05', url: 'nuxt4' },
    { title: 'Empty Lot', lotNo: 'G06-G07', url: 'nuxt5' },
    { title: 'Collin Studio Accessories', lotNo: 'G08A', url: 'nuxt6' },
    { title: 'SMJ', lotNo: 'G08B', url: 'nuxt7' },
    { title: 'Shihlin Taiwan Street Snacks', lotNo: 'G09', url: 'nuxt8' },
    { title: 'SCR XPRESS', lotNo: 'G10-G11', url: 'nuxt9' },
    { title: 'TMC', lotNo: 'G12', url: 'nuxt10' },
    { title: 'Watsons', lotNo: 'G13', url: 'nuxt11' },
    { title: 'Sugarbun & Pezzo', lotNo: 'G14', url: 'nuxt12' },
    { title: 'Vivo', lotNo: 'G16', url: 'nuxt13' },
    { title: 'Guardian', lotNo: 'G17', url: 'nuxt14' },
    { title: 'Eyesight Optic', lotNo: 'G18-G19', url: 'nuxt15' },
    { title: 'Dream Bar', lotNo: 'G20', url: 'nuxt16' },
    { title: 'IG Ais Krim', lotNo: 'G21', url: 'nuxt17' },
    { title: 'Empty Lot', lotNo: 'G22', url: 'nuxt18' },
    { title: 'Caring Pharmacy', lotNo: 'G23-G24', url: 'nuxt19' },
    { title: 'Seentiments', lotNo: 'G25', url: 'nuxt20' },
    { title: 'Empty Lot', lotNo: 'G26', url: 'nuxt21' },
    { title: 'QQ Silver', lotNo: 'G27', url: 'nuxt22' },
    { title: 'Ronnie Optics', lotNo: 'G28-G29', url: 'nuxt23' },
    { title: 'Empty Lot', lotNo: 'G30', url: 'nuxt24' },
    { title: 'Oppo', lotNo: 'G31', url: 'nuxt25' },
    { title: 'H!CAA', lotNo: 'G33', url: 'nuxt26' },
    { title: 'DA-DI-DU Barber', lotNo: 'G34', url: 'nuxt27' },
    { title: 'E.C.Y Optics', lotNo: 'G35', url: 'nuxt28' },
    { title: 'Libra Mobile', lotNo: 'G36', url: 'nuxt29' },
    { title: 'Potato Story', lotNo: 'G37', url: 'nuxt30' },
    { title: 'Bubble1', lotNo: 'G42', url: 'nuxt31' },
    { title: 'This Fashion', lotNo: 'G43', url: 'nuxt32' },
    { title: 'J.S.S.T Collection', lotNo: 'G44A', url: 'nuxt33' },
    { title: 'De Mays Hair Studio', lotNo: 'G44B', url: 'nuxt34' },
    { title: 'Bakers Talk', lotNo: 'G45', url: 'nuxt35' },
  ],
          
        
  
        }
      },
    }
    </script>