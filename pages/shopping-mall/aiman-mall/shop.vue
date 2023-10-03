
<template>
  <nav
    class="relative flex w-full flex-nowrap items-center justify-between bg-[#0c1648] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="text-xl font-bold text-white sm:text-2xl"> AIMAN MALL</div>
      <div class=" mt-2 items-center lg:mt-0 lg:!flex lg:basis-auto">
        <!-- Left links -->
        <ul class="mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row">
          <!-- Home link -->
          <li>
            <a class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall">Home</a>
          </li>
          <!-- Link -->

          <li>
            <a class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall/shop">Shop</a>
          </li>
          <li>
              <a
                class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/shopping-mall/aiman-mall/direction"
                >Getting to</a
              >
            </li>
          <li>
            <a class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/shopping-mall/aiman-mall/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <div class="max-w-4xl px-2 mx-auto space-y-6 divide-y">
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
          <h3 class="text-xl font-bold sm:text-2xl text-left">
            Shop
          </h3>
          <div class="grid lg:grid-cols-1 gap-10">
            <Design :shoplotsProp="layout" />

          </div>
          {{ totalLots }} listings
          <div>
            <label for="type-filter">Filter by Type:</label>
            <select id="type-filter" v-model="selectedType">
              <option :value="''">All</option>
              <option v-for="type in filteredTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <input type="text" v-model="searchTerm" placeholder="Search..." />

            <Design :shoplotsProp="filteredLayouts" class="grid lg:grid-cols-4 gap-10"/>
        </div>
      </div>
    </div>
    <div class="bg-[#0c1648] py-1">
      <h2 class="text-15 font-bold text-center text-white">
        <!--The white coloured text rename to desired Main title. will be displayed on the page-->
        @ 2023 Aiman Mall
      </h2>
      <footer class="block text-12 font-bold text-center text-white">
        <!--The white coloured text rename to desired Main title. will be displayed on the page-->
        Whatsapp:http://wa.me/60165401319
      </footer>
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
      layout: [
        { lot: '', title: "Mall's Layout", url: 'Insideofthe mall' },
      ],
      shoplots: [
        { lot: 'Lot G1, G2, G3', title: 'After 4 Kopitiam', url: 'G1 - G3', type: ['Food', 'Beverage'] },
        { lot: 'Lot G21', title: 'Aiso Korean Food', url: 'G21', type: ['Food', 'Beverage'] },
        { lot: 'Lot G36', title: 'Azri', url: 'G36', type: ['Retail'] },
        { lot: 'Lot K9', title: 'Bintang Eramas', url: 'K9', type: ['Retail'] },
        { lot: 'Lot G30, G31, G61, G62', title: 'Burger King', url: 'G30 - G31,G61 - G62' },
        { lot: 'Lot G20', title: 'Candy Garden', url: 'G20' },
        { lot: 'Lot K1, K2, K3, K4', title: 'Celcom', url: 'K1-K4' },
        { lot: 'Lot K10', title: 'Chan Yan Boon N Pina', url: 'K10' },
        { lot: 'Lot K7', title: 'Chic Mi Special For You', url: 'K7' },
        { lot: 'Lot G10', title: 'Constance', url: 'G10' },
        { lot: 'Lot G18', title: 'Cony & Brown', url: 'G18' },
        { lot: 'Lot G39, G54', title: 'Cony & Brown', url: 'G39,G54' },
        { lot: 'Lot G13', title: 'Cubic Boxes Consignment Lattice Store', url: 'G13' },
        { lot: 'Lot K6', title: 'Diamond Beauty', url: 'K6' },
        { lot: 'Lot K17, K20', title: 'Digi Store Express', url: 'K17-K20' },
        { lot: 'Lot Court', title: 'Erke', url: 'court' },
        { lot: 'Lot G32, G33, G59, G60', title: 'Eco-Shop', url: 'G32 - G33,G59 - G60' },
        { lot: 'Lot G38, G55', title: 'Glory PhotoShop', url: 'G38,G55' },
        { lot: 'Lot G5', title: 'GSM', url: 'G5' },
        { lot: 'Lot K11', title: 'H Fashion', url: 'K11' },
        { lot: 'Lot K12', title: 'Hi Hsien Ik Elegance', url: 'K12' },
        { lot: 'Lot G22', title: 'H! Caa', url: 'G22' },
        { lot: 'Lot G29', title: 'H&L Supercenter', url: 'G29' },
        { lot: 'Lot G28', title: 'Hello!', url: 'G28' },
        { lot: 'Lot G14', title: 'Khai Xiang Trading', url: 'G14' },
        { lot: 'Lot G19', title: 'L2', url: 'G19' },
        { lot: 'Lot K13, K15', title: 'L.E Market', url: 'K13-K15' },
        { lot: 'Lot G46, G47', title: 'Magic Bites', url: 'G46 - G47' },
        { lot: 'Lot G26', title: 'Magic Queen Jewellery', url: 'G26' },
        { lot: 'Lot G34, G58', title: 'Maxis', url: 'G34-G58' },
        { lot: 'Lot G12', title: 'MELIPONI SkinCare Beauty and Health', url: 'G12' },
        { lot: 'Lot G4', title: 'Mr.DIY', url: 'G4' },
        { lot: 'Lot G6', title: 'MyCup', url: 'G6' },
        { lot: 'Lot G8, G9', title: 'My Box Mobile Accessories Specialist', url: 'G8 - G9' },
        { lot: 'Lot G7', title: 'Paksu & Maksu Fashionable Boutique', url: 'G7' },
        { lot: 'Lot G37, G56', title: 'Potato Story', url: 'G37,G56' },
        { lot: 'Lot K5', title: 'Pink Atelier', url: 'K5' },
        { lot: 'Lot G41, G42, G51, G52', title: 'Ronnie Optics', url: 'G41 - G42,G51 - G52' },
        { lot: 'Lot K14', title: 'Smiling Bakery', url: 'K14' },
        { lot: 'Lot G23, G24', title: 'SCR, Yummy Xpress and Chica.go 7', url: 'G23 - G24' },
        { lot: 'Lot G11', title: 'Tahniah Fashionable Boutique', url: 'G11' },
        { lot: 'Lot G27', title: 'Toy Catcher', url: 'G27' },
        { lot: 'Lot G45, G48', title: 'UR by Switch', url: 'G45,G48' },
        { lot: 'Lot K16', title: 'Vivo', url: 'K16' },
        { lot: 'Lot G40, G53', title: 'VINTECH Mobile', url: 'G40,G53' },
        { lot: 'Lot G43, G44, G49, G50', title: 'Watson', url: 'G43 - G44,G49 - G50' },
        { lot: 'Lot G16, G17', title: 'Wija Pharmacy', url: 'G16 - G17' },
        { lot: 'Lot G15', title: 'Yunis Collection', url: 'G15' },
        { lot: 'Lot G63, G64, G65, G66, G67', title: "Rumah Mee Ainul, Ayam Bakar Tunok & Geprek, The Western's, Bumbu Aiman Mall, D'Sha D'Penyet", url: 'G63 - G67' },
        { lot: 'Lot G68, G69, G70, G71, G72, G73', title: 'Nasi Arab Ckigu Zhara, Nasi Padang Sup Tulang, Cashier, Beverage', url: 'G68 - G73' },
        { lot: 'Lot G74, G75, G76, G77. G78, G79, G80', title: 'Ika Kitchen, Dapur Ani, Dapo Ngah Sauyah, Mee Sapi Mangkuk Hijau, Aiman Hainanese Chicken Rice, Nasi Tomato Rojak Ayam & Wantan', url: 'G74 - G80' },
      ],
      searchTerm: '',
      selectedType: '',
    };
  },
  computed: {
    filteredTypes() {
      const types = new Set();
      this.shoplots.forEach((layout) => {
        if (Array.isArray(layout.type)) {
          layout.type.forEach((type) => {
            if (type && type.trim() !== '') {
              types.add(type.trim());
            }
          });
        } else {
          if (layout.type && layout.type.trim() !== '') {
            types.add(layout.type.trim());
          }
        }
      });
      return Array.from(types);
    },
    filteredLayouts() {
      const searchTerm = this.searchTerm.toLowerCase();
      const selectedType = this.selectedType.toLowerCase();
      return this.shoplots.filter((layout) => {
        return (
          (layout.lot.toLowerCase().includes(searchTerm) ||
            layout.title.toLowerCase().includes(searchTerm) ||
            layout.url.toLowerCase().includes(searchTerm)) &&
          (selectedType === '' || (layout.type && layout.type.map((t) => t.toLowerCase()).includes(selectedType)))
        );
      });
    },
    totalLots() {
      return this.shoplots.length;
    },
    uniqueTypes() {
      const types = new Set();
      this.shoplots.forEach((layout) => {
        types.add(layout.type);
      });
      return Array.from(types);
    },
  },
};
</script>