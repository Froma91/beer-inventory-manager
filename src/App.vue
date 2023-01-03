<template>
  <NavComp />
  <router-view />
  <hr class="featurette-divider" />
  <!-- FOOTER -->
  <footer class="container" color="#74D0F1">
  <p class="float-end"><a href="#">Back to top</a></p>
  <p>
    &copy; 2017–2021 Company, Inc. &middot;
    <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
  </p>
  </footer>
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
.material-icons-sharp {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 480;
}
</style>
