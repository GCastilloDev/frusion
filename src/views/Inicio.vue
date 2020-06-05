<template>
  <div class="home">
    <v-img
    class="banner"
    src="../assets/img/banner.png">
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  components: {

  },
  created() {
    console.log(window.screen.width);
  }
};
</script>

<style lang="scss">
.banner {
  margin-top: -7px;
}
</style>
