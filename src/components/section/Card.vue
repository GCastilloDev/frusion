<template>
  <v-card elevation="3">
    <v-img src="../../assets/img/producto.png"></v-img>
    <v-divider></v-divider>
    <v-card-title class="d-flex justify-center">
      <h4>Papaya maradol</h4>
    </v-card-title>
    <v-card-text class="d-flex justify-center">
      <strong>$29.90/kg</strong>
    </v-card-text>
    <v-card-actions class="card-actions-size">
      <v-row>
        <v-col v-if="!showBtnCustomized" @click="showBtnCustomized = true" cols="12">
          <v-btn block depressed color="success">
            <v-icon left>mdi-cart-plus</v-icon>Agregar
          </v-btn>
        </v-col>
        <v-col v-if="showBtnCustomized" cols="12">
          <BtnCustomized />
        </v-col>
      </v-row>
    </v-card-actions>      
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showBtnCustomized: false
  }),
  components: {
    BtnCustomized: () => import("./BtnCustomized")
  },
  methods: {
    minus() {
      this.valor--;
    },
    plus() {
      this.valor++;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-actions-size {
  height: 88px;
}
</style>