<!-- 
Componente Section
Este componente es una seccion que almacena Cards
Ejemplo de secciones: Promociones, Productos mas vendidos, etc.
Props: Nombre de la seccion, componente al que se rediriguira
en caso de que tenga mas elementos que mostrar, y un objeto con
los elementos para poder pintar las cards.
 -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Promociones de la semana</h2>
      </v-col>
      <v-col
       v-for="n in 4"
       :key="n"
       cols="6"
       md="3">        
          <Card />
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn class="ma-2" depressed color="success">
          Ver más
          <v-icon right>mdi-menu-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Card: () => import('./Card')
  }
};
</script>

<style lang="scss">
</style>