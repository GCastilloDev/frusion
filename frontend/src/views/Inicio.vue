<!-- 
Vista de la página de inicio con sus componentes.
-->
<template>
  <div class="home">
    <!-- Banner de la página principal -->
    <v-img
    class="banner"
    src="../assets/img/banner.png">
    </v-img>
    <!-- Componente de secciones -->
    <Section />
    <Section />
    <Section />
    <!-- Modal para seleccionar ciudades -->
    <SelectCity />
  </div>
</template>

<script>
export default {
  name: "Inicio",
  components: {
    Section: () => import ('../components/section/Section'),
    SelectCity: () => import('../components/modales/SelectCity')
  }
};
</script>

<style lang="scss">
.banner {
  margin-top: 126px;
}

@media (max-width: 600px) {
  .banner {
    margin-top: 150px;
  }
}
</style>
