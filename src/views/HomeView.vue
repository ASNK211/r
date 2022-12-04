<template>
  <div class="bg-gray-100">
    <div
      style="
        background-color: #fff;
        display: flex;
        justify-content: center;
        height: 180px;
      "
    >
      <img
        style=""
        src="@/components/img/821d6de38bc34d92813deae658be4912(1).png"
        alt="zoolgame"
      />
    </div>
    <!-- Remove py-8 -->
    <LoadingScreen v-if="isLoading"></LoadingScreen>
    <div class="mx-auto container py-8">
      <div
        class="flex flex-wrap items-center lg:justify-between justify-center"
      >
        <div
          v-for="product in products"
          :key="product._id"
          class="mx-2 w-72 lg:mb-0 mb-8"
          style="border: 1px solid #e2ebf2"
        >
          <div>
            <img :src="`${urlimage}${product.image}`" class="w-full h-44" />
          </div>
          <div class="bg-white p-2">
            <h2 class="text-lg font-semibold">
              {{ product.name }}
            </h2>
            <div>
              <p class="text-xs text-gray-600 mt-2">
                <router-link
                  :to="`/${product.productname}`"
                  class="btn btn-primary"
                  >اطلب الان</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingScreen from "../components/lodingPage.vue";
import AuthenticationServices from "@/services/AuthenticationServices";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      products: [],
      isLoading: true,
      urlimage: "",
    };
  },
  components: {
    LoadingScreen,
  },
  async created() {
    this.urlimage = process.env.VUE_APP_IMMAGE_CLIENT;
    const respons = await AuthenticationServices.getintproduct();
    this.products = respons.data;
    if (this.products) {
      this.isLoading = false;
    }
    //     const isaAdmin = localStorage.getItem("isAdmin");
    // console.log(Boolean(isaAdmin === "true"))
    const response = await axios.get(`${process.env.VUE_APP_SUCCESS}`, {
      withCredentials: true,
    });
    // console.log(response.data);
    localStorage.setItem("isAdmin", response.data.sendUser.isAdmin);
    localStorage.setItem("email", response.data.sendUser.email);
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("userId", JSON.stringify(response.data.sendUser._id));
    this.$store.dispatch("setToken", response.data.accessToken);
    this.$store.dispatch("setUser", response.data.sendUser);
    this.$store.dispatch("setAdmin", response.data.sendUser.isAdmin);
    if (response.data.sendUser._id) {
      window.location.reload();
    }
    // const dddd = response.data;
  },
  methods: {
    // lodin(){
    //   if(this.products) {
    //     this.isLoading = false;
    //   }
    // }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 9500);
  // }
  mounted() {
    document.title = "Home";
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
div {
  font-family: "Noto Sans Arabic", sans-serif;
}
/* .container {
  padding-bottom: 8%;
}
.product-list {
  background-color: rgb(190, 190, 190);
  padding: 3em;
}
.product-list .card {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.card .title {
  font-size: 18px;
  font-weight: bold;
}
.card img {
  max-width: 80%;
  border-radius: 10px;
}
.card .text {
  text-align: left;
  margin-left: 2em;
  margin-bottom: 0.5em;
  font-size: 12px;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
@media (max-width: 760px) {
  .product-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }
}
.zoolimge {
  border-radius: 30%;
  width: 10%;
  height: 10%;
  padding-bottom: 2%;
}
h4 {
  color: red;
  font: 600;
} */
</style>
