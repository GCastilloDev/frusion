<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="500px">
      <v-card>
        <v-card-title primary-title class="grey--text text--darken-4">Bienvenido!</v-card-title>
        <v-card-text class="grey--text text--darken-4">
          <v-container>
            <v-row>
              <v-col cols="12">
                En
                <strong class="secondary--text">frusion</strong> estamos muy contentos por tu visita, favor de seleccionar de que ciudad nos visitas para ver los productos de tu ciudad.
              </v-col>
              <v-col cols="12">
                <v-select
                outlined
                label="Ciudad"
                placeholder="Seleccione una ciudad"
                item-color="success"
                color="success"
                v-model="city"
                :items="cities"
                ></v-select>
              </v-col>
              <v-col cols="12" class="d-flex justify-end">
                <span>¿Tienes cuenta? <span>Inicia sesión</span></span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container>
              <v-btn
              color="success"
              depressed
              block
              @click="next">Continuar</v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    show: true,
    city: null,
    cities: ["San Cristóbal de las Casas", "Tuxtla Gutiérrez"]
  }),
  methods: {
    ...mapActions('app',['selectedCity']),
    next() {
      this.selectedCity(this.city);
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.columns-reset {
  padding: 6px;
}
</style>