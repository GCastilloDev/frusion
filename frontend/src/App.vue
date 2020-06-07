<template>
  <v-app>
    <v-content>
      <!-- Barra de navegacion -->
      <NavBar />
      <router-view class="contenido"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import("./components/NavBar")
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.contenido {
  margin-top: 0px;
  min-height: 120vh;
}
</style>