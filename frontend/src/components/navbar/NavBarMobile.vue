<template>
  <div class="primary">
    <v-container class="container--customized">
      <v-row style="margin: 0;">
        <v-col cols="6" class="colum--customized" style="padding-left: 1.3rem !important">
          <v-img class="app-bar--logo" src="../../assets/img/frusion-logo.svg" max-width="100px"></v-img>
        </v-col>
        <v-col cols="6" class="d-flex justify-end colum--customized" >
          <v-btn text class="button-customized--top">
            <v-icon class="app-bar--icon">mdi-map-marker-outline</v-icon>{{city}}
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin: 0;">
        <v-col cols="6" class="d-flex justify-start colum--customized">
          <v-btn text class="button-customized--top">
            <v-badge dot color="secondary">
              <v-icon class="app-bar--icon">mdi-account-arrow-right-outline</v-icon>Beatriz del Carmen
            </v-badge>
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-end colum--customized">
          <v-btn text class="button-customized--top" style="padding-right: 1.6rem !important">
            <v-badge color="secondary" content="10">
              <v-icon class="app-bar--icon">mdi-cart-outline</v-icon>$10,523.35
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin: 0;">
        <v-col cols="12" class="colum--customized">
          <v-chip-group>
            <v-chip v-for="(item, index) in menu" :key="index" class="chip-customize">
              <v-img class="chip-customize--img" :src="item.src"></v-img>
              <span class="chip-customize--text">{{item.etiqueta}}</span>
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState('app',['city'])
  }
};
</script>

<style lang="scss" scoped>

.colum--customized {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>