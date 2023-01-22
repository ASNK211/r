<template>
  <div>
    <div class="font-bold tracking-wide text-gray-800">
      <div>balance: {{ balance }}</div>
    </div>
    <div class="font-bold tracking-wide text-gray-800">
      <div>profit: {{ profit }}</div>
    </div>
    <div
      class="overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x"
    >
      <div class="inline-block p-8 text-center">
        <div class="font-bold tracking-wide text-gray-800">
          <div class="font-bold tracking-wide text-gray-800">
            <div>%{{ prcnt.balance }}</div>
          </div>
          <div class="relative">
            <input
              v-model="crdet"
              id="number"
              class="text-gray-600 dark:text-gray-800 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-5 text-sm border-gray-300 rounded border shadow"
              placeholder="userId"
            />
          </div>
        </div>
        <button
          @click="addoner"
          type="button"
          class="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          add now
        </button>
      </div>
    </div>
    <div>
      <div
        class="overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x"
      >
        <div class="inline-block p-8 text-center">
          <div class="font-bold tracking-wide text-gray-800">
            <div class="relative">
              <input
                v-model="search"
                name="search users"
                type="text"
                placeholder="search"
              />
            </div>
          </div>
        </div>
      </div>
      <tr v-for="product in filteredProducts" :key="product.userId">
        <!-- <td>{{ product._id }}</td> -->
        <td>{{ product.userId }}</td>
      </tr>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">userId</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in displayorders" :key="user._id">
            <td>{{ user.userId }}</td>
            <td>
              <router-link
                :to="`Dashboardusers/${user._id}`"
                class="btn btn-primary"
                >view</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <paginate
          v-model="page"
          :page-count="pages.length"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </nav>
    </div>
    <h1 style="font-weight: 800">admins</h1>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">userId</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in displayordersd" :key="user._id">
            <td>{{ user.userId }}</td>
            <td>
              <router-link
                :to="`Dashboardusers/${user._id}`"
                class="btn btn-primary"
                >view</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <paginate
          v-model="page"
          :page-count="pages.length"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </nav>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";

export default {
  name: "LightWithButton",
  data() {
    return {
      show: false,
      balance: "",
      profit: "",
      users: [],
      debt: "",
      crdet: "",
      page: 1,
      perPage: 10,
      pages: [],
      admins: [],
      adminsz: [],
      search: "",
      prcnt: "",
    };
  },

  async created() {
    const response = await AuthenticationServices.getUsersbalance();
    this.balance = response.data.sum;
    this.profit = response.data.sun;
    this.users = response.data.orders;
    this.adminsz = response.data.orders;
    this.prcnt = response.data.pdertt;
    const respons = await AuthenticationServices.getadmin();
    this.admins = respons.data;
  },
  methods: {
    async addoner() {
      await AuthenticationServices.pderttidtt({ balance: this.crdet });
      window.location.reload();
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
    setusers() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginated(admins) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return admins.slice(from, to);
    },
    setuadmins() {
      let numberOfPages = Math.ceil(this.admins.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displayorders() {
      this.paginate(this.users);
      return this.adminsz.filter((p) => {
        return p.userId.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
    displayordersd() {
      return this.paginate(this.admins);
    },
  },
  watch: {
    users() {
      this.setusers();
    },
    usersd() {
      this.setuadmins();
    },
  },
};
</script>

<style scoped lang="scss">
.drop {
  position: relative;
  left: 43%;
  top: 46px;
}
// .noder {
//   border: 1px black solid;
// width: 159px;
// position: relative;
// left: 35%;
// border-radius: 10px;
// height: 48px;
// font-weight: 1000;
// font-size: xx-large;
// }
// span {
//   color:red;
//   width: 60px
// }
</style>
