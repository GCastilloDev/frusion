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
    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <v-btn block depressed color="success">
            <v-icon left>mdi-cart-plus</v-icon>Agregar
          </v-btn>
        </v-col>
        <v-col cols="12">
          <BtnCustomized />
        </v-col>
      </v-row>
    </v-card-actions>      
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valor: 1,
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
.btn-minus {
  padding-right: 3rem;
}

.btn-plus {
  padding-left: 3rem;
}
</style>