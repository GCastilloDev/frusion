<template>
  <div class="primary">
    <v-container class="container--customized">
      <v-row style="margin: 0;">
        <v-col cols="3">
          <v-img class="app-bar--logo" src="../../assets/img/frusion-logo.svg" max-width="100"></v-img>
        </v-col>
        <v-col cols="9" class="d-flex justify-end" style="padding-right: 12px">
          <v-btn text class="button-customized--top">
            <v-badge dot color="secondary">
              <v-icon class="app-bar--icon">mdi-account-arrow-right-outline</v-icon>Beatriz del Carmen
            </v-badge>
          </v-btn>
          <v-btn text class="button-customized--top">
            <v-icon class="app-bar--icon">mdi-map-marker-outline</v-icon>San Cristobal
          </v-btn>
          <v-btn text class="button-customized--top">
            <v-badge color="secondary" content="10">
              <v-icon class="app-bar--icon">mdi-cart-outline</v-icon>$10,523.35
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin: 0;">
        <v-col class>
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
export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
};
</script>