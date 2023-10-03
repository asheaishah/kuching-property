<template>
  <!-- Main navigation container -->
  <nav
    class="relative flex w-full flex-nowrap items-center justify-between bg-[#0c1648] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="text-xl font-bold text-white sm:text-2xl"> AIMAN MALL</div>
      <div
        class=" mt-2 items-center lg:mt-0 lg:!flex lg:basis-auto">
        <!-- Left links -->
        <ul
          class="mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
          >
          <!-- Home link -->
          <li
            >
            <a
              class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall"
              >Home</a
            >
          </li>
          <!-- Link -->

          <li>
            <a
              class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall/shop"
              >Shop</a
            >
          </li>
          <li>
              <a
                class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/shopping-mall/aiman-mall/direction"
                >Getting to</a
              >
            </li>
          <li
            >
            <a
              class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall/contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <div class="max-w-4xl px-2 mx-auto space-y-6 divide-y">
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
          <div class="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 class="text-xl font-bold sm:text-2xl text-center">
              Aiman Mall 
              </h3>
              <Design :shoplotsProp="Aiman" />
            </div>
            <div>
              <h3 class="text-xl font-bold sm:text-2xl text-center">
              Map of Aiman Mall 
              </h3>
              <div class="mb-4 rounded overflow-hidden shadow-md">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59542.26351640711!2d110.40166983454624!3d1.4792415337844373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba2369828777d%3A0x420a9aeea0b9edcf!2sAiman%20Mall!5e0!3m2!1sen!2smy!4v1693021404353!5m2!1sen!2smy" class="w-full h-32 sm:h-48 object-cover" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class='m-4'>
                  <p class="text-left font-semibold">Google Map</p>
                  <p class="text-left text-sm">Location of Aiman Mall</p>
                </div>
              </div>  
            </div>
          </div>
      </div>
    </div>
    <div class="bg-[#0c1648] py-1"> 
        <h2 class="text-15 font-bold text-center text-white">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          @ 2023 Aiman Mall
        </h2>
        <a href="http://wa.me/60165401319" class="block text-12 font-bold text-center text-white hover:text-gray-300">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          Whatsapp:http://wa.me/60165401319
        </a>
        <footer class="text-12 font-bold text-center text-white">
          <!--The white coloured text rename to desired Main title. will be displayed on the page-->
          Phone: 016 540 1319
        </footer>
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
        Aiman: [
          { lot: "Kota Samarahan (Link), 94300 Kota Samarahan, Sarawak", title: "Aiman Mall", url: 'Aiman' },

        ],
      }
      },
    }
    </script>
