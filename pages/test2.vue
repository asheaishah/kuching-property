<template>
    <div>
      <div class="space-y-12">
        <MainBanner />
        <section>
          <div class="px-4 mb-6 text-center">
            <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
              LD Legenda @ Kozi Square 
            </h3>
          <!--  <p>
              Latest Unit Sold: TBA |
              <NuxtLink to="/balance-units-chart" class="font-medium hover:underline text-theme-600">See the Balance Units
                Chart</NuxtLink>
            </p> -->
          </div>
          <div class="py-6 bg-theme-50">
            <div class="text-center">
              <h4 class="text-xl font-medium">Latest Updates</h4>
              <b>
                <p class="text-gray-600">Last updated: {{ currentDate() }} </p>
              </b>
            </div>
            <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
              <div class="max-w-2xl px-4 mx-auto">
                <ul>
                  <li>
                    <strong>20-07-2023:</strong>
                    <NuxtLink to="/book-an-appointment" class="!text-theme-600">Book an Appointment</NuxtLink>
                    to view LD Legenda @ Kozi Square  and get Direct VVIP Preview
                    Price + Discounts.
                  </li>
                  <li>
                    <strong>20-07-2023:</strong> Check our latest
                    <NuxtLink to="/balance-units-chart" class="!text-theme-600">
                      LD Legenda @ Kozi Square 
                    </NuxtLink>
                    here
                  </li>
                  <li>
                    <strong>20-07-2023:</strong> Check our latest
                    <NuxtLink to="/pricing" class="!text-theme-600">
                      LD Legenda @ Kozi Square 
                    </NuxtLink>
                    here
                  </li>
                  <li>
                    <strong>20-07-2023:</strong>The latest
                    <NuxtLink to="/floor-plan" class="!text-theme-600">LD Legenda @ Kozi Square Floor Plan</NuxtLink> is now
                    available.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="max-w-6xl px-4 mx-auto">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/singhaiyi-logo.jpg" alt="LD Legenda @ Kozi Square" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square </p>
                <div class="space-y-4">
                  <p>
                    LD Legenda is a RM300 million mixed commercial and SOHO development completed in 2018 by Lien Dak Group of Companies in Kuching, Sarawak, Malaysia. 
                  </p>
                </div>
              </div>
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/map-location-thedunman.png" alt="LD Legenda @ Kozi Square" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square Location</p>
                <div class="space-y-4">
                  <p>
                    LD Legenda is located along Jalan Tun Abang Haji Openg, next to Sarawak General Hospital (SGH) or Hospital Umum Sarawak (HUS) in Malay, the largest general hospital in the state of Sarawak. 
                  </p>
                </div>
              </div>
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/direct.png" alt="The Grand Dunman Showflat" class="mx-auto rounded" />
                <p class="text-lg font-semibold">Unique Selling Proposition</p>
                <div class="space-y-4">
                  <p>
                    A fully sheltered covered walkway accessible 24 hours daily connects LD Legenda to SGH within a 3 minutes walk via the foodcourt at level LG. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-6xl px-4 mx-auto">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/singhaiyi-logo.jpg" alt="LD Legenda @ Kozi Square" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square Building </p>
                <div class="space-y-4">
                  <p>
                    The single 10-storey high building consist 9 levels of service apartment and SOHO Hotel units, 1.5 levels of retail space, 3.5 levels of basement carpark, 1 level for gym, toilet & shower facilities, and a rooftop level for swimming pool, occupying a 2 acre site. 
                  </p>
                </div>
              </div>
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/map-location-thedunman.png" alt="LD Legenda @ Kozi Square" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square Facilities</p>
                <div class="space-y-4">
                  <p>
                    The Skyview Gym is located at the top floor on level LR facing SGH (north), the Skyline Infinity Swimming Pool and Sky Park at the roof top are accessible by stairs via level LR, offering an unblocked 360 degrees panoramic city view of Kuching City and it's surrounding areas.
                  </p>
                </div>
              </div>
              <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/direct.png" alt="The Grand Dunman Showflat" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square Feature</p>
                <div class="space-y-4">
                  <p>
                    The green building incorporates a rainwater harvesting system, on-site water retention pond system to prevent flash floods, a nine-storey high green wall, and a common area with its lighting powered by solar energy.  
                  </p>
                </div>
              </div>
            </div>
            <div class="
                  max-w-sm
                  p-6
                  mx-auto
                  space-y-2
                  text-center
                  bg-white
                  rounded-md
                  shadow-md
                ">
                <img src="~/assets/img/home/direct.png" alt="The Grand Dunman Showflat" class="mx-auto rounded" />
                <p class="text-lg font-semibold">LD Legenda @ Kozi Square Community</p>
                <div class="space-y-4">
                  <p>
                    The 1,300 studio units LD Legenda residents profile comprise a large community of health and medical professionals working at Sarawak General Hospital (SGH) due to location proximity, accessibility and convenience. Other residents include those working nearby at Wisma Saberkas, Wisma Satok, UTC Kuching, students from Swinburne, short term accommodation and hotel stays for medical tourism at SGH from other cities within Sarawak and West Kalimantan, Indonesia.  
                  </p>
                </div>
              </div>
          </div>
        </section>
        <section>
          <div class="py-12 bg-brown-700">
            <div class="max-w-6xl px-4 mx-auto">
              <div class="
                  flex flex-wrap
                  items-center
                  justify-between
                  p-6
                  border
                  rounded-md
                  sm:col-span-2
                  border-brown-400
                ">
                <h1 class="text-3xl font-bold text-white">
                  Book An Appointment To Get Direct VVIP Preview
                </h1>
                <NuxtLink to="/book-an-appointment" class="
                    inline-block
                    font-medium
                    text-white
                    transition
                    rounded
                    bg-brown-900
                    hover:bg-yellow-900
                    px-6
                    py-3
                  ">Book an Appointment</NuxtLink>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="max-w-6xl px-4 mx-auto prose text-justify">
            <div>
              <h3 class="text-xl font-semibold sm:text-2xl text-center">
                The Grand Dunman
              </h3>
              <p>
                <NuxtLink to="/" aria-current="page" class="transition text-theme-600 hover:text-theme-700">Grand Dunman
                </NuxtLink> brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which
                to unwind in rich splendour.
                The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on
                the Circle Line is less than 100m away. This brand-new,
                affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent
                amenities, design-forward buildings, heart-stopping views,
                and first-rate care facilities.
              </p>
              <p>
                Future residents will have immediate access to the Geylang Park Connector, which runs along the Geylang
                River and connects easily to the Marina Reservoir and
                Gardens by the Bay. We discover self-renewal, the simple pleasures of spending time with family and friends,
                and the appreciation of a setting that enables us
                to be who we truly are. Enjoy a fresh way of life.
              </p>
              <p>
                Home is where your story begins. Where you choose to live is equally as crucial as your lifestyle when you
                live there. Architecture in creating a home that stands the test of time
                and draws inspiration from the gardens outside to create a life that’s well-lived inside.
                A home is more than just a roof over your head, and it holds a lifetime of memories. Growth and wellness are
                integrated to create an energized, holistic environment for you and your loved ones.
                There is no better investment than in your family or yourself and no better place to put down your roots.
              </p>
              <p>
                Aspiring homeowners may now view and download <NuxtLink to="/floor-plan"
                  class="transition text-theme-600 hover:text-theme-700">The Grand Dunman Floor Plan</NuxtLink>.
              </p>
  
            </div>
            <!-- <div class="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4">
              <img
                src="~assets/img/home/home-artist-impression-thumb-1.jpg"
                alt=""
                class="object-cover w-full h-auto rounded"
              />
              <img
                src="~assets/img/home/home-artist-impression-thumb-2.jpg"
                alt=""
                class="object-cover w-full h-auto rounded"
              />
              <img
                src="~assets/img/home/home-artist-impression-thumb-3.jpg"
                alt=""
                class="object-cover w-full h-auto rounded"
              />
              <img
                src="~assets/img/home/home-artist-impression-thumb-4.jpg"
                alt=""
                class="object-cover w-full h-auto rounded"
              />
            </div> -->
          </div>
        </section>
        <BookAppointment />
      </div>
    </div>
  </template>
  
  <!-- <script>
  export default {
    head: {
      title:this.$config.title,
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Grand Dunman brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.'
          },
        {
          hid: 'keywords', 
          name: 'keywords', 
          content: 'Grand Dunman, dunman, residences,dunman new launch, launch, new, latest Grand Dunman'
          }
      ],
    },
    methods: {
      currentDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const current = new Date();
    const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
    return date;
  }
  
    },
  };
  
  </script> -->
  
  <script setup>
  // const config = useRuntimeConfig()
  // console.log('Runtime config:', config.public.apiBase)
  // if (process.server) {
  //   console.log('API secret:', config.apiSecret)
  // }
  // const description = ref(config.title)
  
  // useHead({
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: 'Grand Dunman brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.'
  //     },
  //     {
  //       hid: 'keywords',
  //       name: 'keywords',
  //       content: 'Grand Dunman, dunman, residences,dunman new launch, launch, new, latest Grand Dunman'
  //     }
  //   ],
    
  // })
  
  function currentDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const current = new Date();
    const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
    return date;
  }
  </script>
  