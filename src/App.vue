<template>
  <NavComp/>
  <router-view />
</template>

<script>
import NavComp from "@/components/NavComp.vue"
export default {
  name: "App",
  components:{
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
</style>
