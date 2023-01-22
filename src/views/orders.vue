<template>
  <div>
    <div class="drop">
      <div class="right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44">
        <router-link
          to="/admin/withdraw"
          class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
        >
          withdraw
        </router-link>
        <router-link
          to="/admin/deposit"
          class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
        >
          deposit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightWithButton",
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
