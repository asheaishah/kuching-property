<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Aiman Mall
      </div>
    </div>
    <section  class="py-6 space-y-6">
          <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl">Facilities </h3>
          <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            LF (Level 10)
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLF10" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Level 1 to Level 9
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLF1to10" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Ground Floor
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesG" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            LG
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLG" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            B1 to B3
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesB1ToB3" />
        </div>
      </div>
    </section>
        </div>
      </section>
    <BookAppointment />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        FacilitiesLF10: [
          { title: 'Infinity Pool', url: 'Mobilephoneshop' },
          { title: 'Children Pool', url: 'Childrenpool' },
          { title: 'Sky Park', url: 'Skypark' },
          { title: 'Sky Gym', url: 'Skygym' },
          { title: 'Toilet & Shower Facilities', url: 'Toiletfacilities' },
        ],
        FacilitiesLF1to10: [
          { title: 'LD Legenda Service Apartment (Studio Unit from RM 900 to RM 1400 per month)', url: 'LDLegendaserviceapartment(studiounitfromrm900torm1400)' },
          { title: 'Refuse Room on each level at Lift Lobby', url: 'Refuseroomoneachlevelatliftlobby' },
        ],
        FacilitiesG: [
          { title: 'Regatta Suites Hotel (Hotel Lobby)', url: 'Regattasuiteshotel(hotellobby)' },
          { title: 'Restaurants', url: 'Restaurant' },
          { title: 'Lifestyle Retail Shop', url: 'Lifestyleretailshop' },
          { title: 'CIMB ATM', url: 'CIMBATM' },
          { title: 'Level G Shopping Mall Toilet', url: 'LevelG shoppingmalltoilet' },
          { title: 'Fun Factor (Indoor Playground)', url: 'Fun Factor (IndoorPlayground)' },
          { title: 'Shop', url: 'Jessy_sshop' },
        ],
        FacilitiesLG: [
          { title: '24 Hours Access Sheltered Walkway to SGH (2 mins walk) ', url: 'coming-soon' },
          { title: 'Foodcourt', url: 'Foodcourt' },
          { title: 'Security Counter', url: 'coming-soon' },
          { title: '24 Hours Coin Laundry', url: '24hourscoinlaundry' },
          { title: 'Convenience Shop', url: 'Convenienceshop' },
          { title: 'Level LG Shopping Mall Toilet', url: 'coming-soon' },
          { title: 'Mobile Phone Shop', url: 'coming-soon' },
          { title: 'Hair Salon', url: 'coming-soon' },
          { title: 'Autopay Machine ', url: 'coming-soon' },
          { title: 'LG Carpark', url: 'coming-soon' },
          { title: 'LD Legenda Management Office', url: 'coming-soon' },
          { title: 'Parcel Collection Rack', url: 'coming-soon' },
          { title: 'Letterbox For Retail Shops', url: 'coming-soon' },
          { title: 'Carpark Management Office', url: 'coming-soon' },
          { title: 'Pharmacy Drive-Thru', url: 'coming-soon' },
          { title: 'LG Carpark Entrance', url: 'coming-soon' },
          { title: 'Motorcycle Parking', url: 'coming-soon' },
          { title: 'Loading / Unloading Bay', url: 'coming-soon' },
          { title: 'Maintenance Office', url: 'coming-soon' },
          ],
          FacilitiesB1ToB3: [
          { title: 'Basement Carpark', url: 'coming-soon' },
          { title: 'Autopay Machine (B1 Next to Escalator)', url: 'coming-soon' },
          ],
      }
    },
  }
  </script>
