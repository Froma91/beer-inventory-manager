<template>
  <NavComp />
  <router-view />
</template>

<script>
import NavComp from "@/components/NavComp.vue";
export default {
  name: "App",
  components: {
    NavComp,
  },
};
</script>
<style>
th,
td {
  text-align: center;
  vertical-align: middle;
}
,
.material-icons-sharp {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 480;
}
</style>
