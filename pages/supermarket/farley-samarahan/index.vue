
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
        <div class="grid grid-cols-2 gap-16">
          <div class="mb-4 rounded overflow-hidden pl-28">
            <p class ="text-xl font-semibold sm:text-2xl text-left"> Farley Samarahan </p>
            <img src = "~/assets/img/farley/farley.jpg " alt="Farley" class="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-4">
          </div>
                <div>
                  <h3 class="text-xl font-semibold sm:text-2xl text-left">
                    Map of Farley Samarahan
                  </h3>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d127632.77959486553!2d110.3657879262747!3d1.4592607414996484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x31fba1998b27fb43%3A0xfc6dcd8a477d6ab4!2sFARLEY%20SUPERMARKET%20(KOTA%20SAMARAHAN)%E8%8F%AF%E5%88%A9%E7%99%BE%E8%B2%A8%2C%20LOT%209284%2C%20Bandar%20Riyal%2C%20Jln%20Muara%20Tuang%20Park%2C%20Kampung%20Muara%20Tuang%2C%2094300%20Kota%20Samarahan%2C%20Sarawak!3m2!1d1.4538514!2d110.4081453!4m5!1s0x31fba2838c24114b%3A0x99de79376c4e5d59!2sKota%20Samarahan%2C%20Sarawak!3m2!1d1.459921!2d110.488266!5e0!3m2!1sen!2smy!4v1694701194507!5m2!1sen!2smy" stye="grid gap-2" width="600" height="330" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          { title: 'Business Hours Mon-Sun:	8:00 AM – 9:30 PM', url: 'farley' },
          ],
  
        }
      },
    }
    </script>
  