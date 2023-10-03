
<template>
    <div>
      <nav class="bg-[#209b41] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 green:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-2xl font-bold text-white p-2">FARLEY, KOTA SAMARAHAN</div>
          <ul class="flex space-x-6 text-lg">
            <!-- Home link -->
            <li>
              <a
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="/supermarket/farley-samarahan"
              >
                Home
              </a>
            </li>
            <!-- Shop link -->
            <li>
              <a
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="/supermarket/farley-samarahan/shop"
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
                    Farley Branches
                </h3>
              <!--div class="grid lg:grid-cols-2 gap-10"-->
                <Design3 :floor-plan-prop="LayoutTwoBedroom" />
              <!--/div-->
            
            </div>
            <div class="space-y-4">
                <h3 class="text-xl font-semibold sm:text-2xl text-left">
                    Commercial Center
                </h3>
              <!--div class="grid lg:grid-cols-4 gap-10"-->
                <Design3 :floor-plan-prop="LayoutThreeBedroom" />
              <!--/div-->
            </div>
          </div>
            </div>
        </div>
        <div class="bg-[#209b41] py-1"> 
          <h2 class="text-15 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            @ 2023 Farley Samarahan
          </h2>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Address: LOT 9284, Bandar Riyal, Jln Muara Tuang Park, Kampung Muara Tuang, 94300 Kota Samarahan, Sarawak
          </footer>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Business Hours
            Mon-Sun:
            8:00 AM-9:30 PM
          </footer>
          <footer class="block text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Facebook: https://www.facebook.com/farleyks/
          </footer>
          <footer class="text-12 font-bold text-center text-white">
            <!--The white coloured text rename to desired Main title. will be displayed on the page-->
            Phone: 082-667 009
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
          { title: 'Farley Cafe', lotNo: '9239-9240', url: 'lot9239-9240' },
          { title: 'Farley Shoe Centre', lotNo: '9280-9281', url: 'lot9280-9281' },
          { title: 'Farley Bakery', lotNo: '9279', url: 'lot9279_2' },
          { title: 'Farley Garden', lotNo: '9289', url: 'lot9289' },
          ],
          LayoutThreeBedroom: [
          { title: '100% Trading', lotNo: '9248', url: 'lot9248' },
          { title: 'Amelia Trading', lotNo: '9268', url: 'lot9268' },
          { title: 'ATM', lotNo: '9282', url: 'lot9282' },
          { title: 'Big Diamond Trading', lotNo: '9252', url: 'lot9252' },
          { title: 'Bundle', lotNo: '9250', url: 'lot9250' },
          { title: 'Call Good Cafe', lotNo: '9244-9245', url: 'lot9244-9245' },
          { title: 'Chong Jan Voon Insurance and Road Tax Service', lotNo: '9273 (Level 1)', url: 'lot9273_1' },
          { title: 'EL Unisex Hair Saloon', lotNo: '9259 (Level 1)', url: 'lot9259' },
          { title: 'EMKL Tea', lotNo: '9249 (Front Side)', url: 'lot9249_1' },
          { title: 'Empty', lotNo: '9253', url: 'lot9253' },
          { title: 'Empty', lotNo: '9254-9255', url: 'lot9254-9255' },
          { title: 'Famous Barbershop', lotNo: '9266 (Ground Level)', url: 'lot9266_3' },
          { title: 'Focus Vision Tuition Centre', lotNo: '9267 (Level 1 & 2)', url: 'lot9267_1' },
          { title: 'Glory Touch Beauty Saloon', lotNo: '9246 (Level 1)', url: 'lot9246_1' },
          { title: 'Good Credit Sdn Bhd', lotNo: '9269 (Level 1)', url: 'lot9269_1' },
          { title: 'Good Shepherd Reformed Presbyterian Church', lotNo: '9266 (Level 1)', url: 'lot9266_1' },
          { title: 'Hair Story Salon and Laves', lotNo: '9267 (Ground Level)', url: 'lot9267' },
          { title: 'Hours 23 Speed Mart', lotNo: '9262', url: 'lot9262' },
          { title: 'Ice Cream Waffelicious', lotNo: '9266 (Ground Level)', url: 'lot9266_2' },
          { title: 'Joon Tung', lotNo: '9285', url: 'lot9285' },
          { title: 'Kinyan Gold Shop', lotNo: '9269 (Ground Level)', url: 'lot9269' },
          { title: 'Lek Motor', lotNo: '9251 (Ground Level)', url: 'lot9251' },
          { title: 'May Jia Trading', lotNo: '9243', url: 'lot9243' },
          { title: 'Music Outlet', lotNo: '9274 (Level 1)', url: 'lot9274_1' },
          { title: 'New Union', lotNo: '9241', url: 'lot9241' },
          { title: 'On My Wear Boutique', lotNo: '9276 (Ground Level)', url: 'lot9276_1' },
          { title: 'Precious Food Products Sdn Bhd', lotNo: '9273 (Ground Level)', url: 'lot9273' },
          { title: 'Riyal Farmers Care and Fertilizer Supply', lotNo: '9275', url: 'lot9275' },
          { title: 'Sado Gym Fitness', lotNo: '9273 (Level 2)', url: 'lot9273_2' },
          { title: 'Samarahan Food Centre', lotNo: '9267-9258', url: 'lot9257-9258' },
          { title: 'Samarahan Pet Shop', lotNo: '9260', url: 'lot9260' },
          { title: 'Samarindah Pharmacy', lotNo: '9274 (Ground Level)', url: 'lot9274' },
          { title: 'Satex', lotNo: '9283', url: 'lot9283' },
          { title: 'Share Tea', lotNo: '9261', url: 'lot9261' },
          { title: 'Siong How Electrical & Electronic Sdn Bhd', lotNo: '9259 (Ground Level)', url: 'lot9259_1' },
          { title: 'Smart Haircut Barbershop', lotNo: '9249 (Edge Side)', url: 'lot9249_2' },
          { title: 'Smart Pet Shop Sdn Bhd', lotNo: '9242', url: 'lot9242' },
          { title: 'Sun Optic', lotNo: '9276 (Level 1)', url: 'lot9276_2' },
          { title: 'Syn Foh Lee Enterprise', lotNo: '9246-9247', url: 'lot9246-9247' },
          { title: 'TAKA Cake House', lotNo: '9272 (Ground Level)', url: 'lot9272' },
          { title: 'TL Audio', lotNo: '9265 (Level 1)', url: 'lot9265_1' },
          { title: 'TL Electronic Enterprise', lotNo: '9265-9266', url: 'lot9265-9266' },
          { title: 'Vape Kingdom', lotNo: '9272 (Level 1)', url: 'lot9272_1' },
          { title: 'Water Supply Shop', lotNo: '9256', url: 'lot9256' },
          { title: 'Watsons', lotNo: '9270-9271', url: 'lot9270-9271' },
          { title: 'Yii Heng Departure', lotNo: '9251 (Level 1)', url: 'lot9251' },
          ],
  
        }
      },
    }
    </script>