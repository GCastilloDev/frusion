<template>
  <v-app-bar class="app-bar--personalizado" flat fixed extended color="primary">
    <v-img class="app-bar--logo" src="../assets/img/frusion-logo.svg" max-width="132"></v-img>
    <v-spacer></v-spacer>
    <v-btn text class="d-none d-sm-flex">
      <v-badge dot color="secondary">
        <v-icon class="app-bar--icon">mdi-account-outline</v-icon>Iniciar sesión
      </v-badge>
    </v-btn>
    <v-btn text class="d-flex d-sm-none">
      <v-badge dot color="secondary">
        <v-icon class="app-bar--icon">mdi-account-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-btn text>
      <v-badge color="secondary" content="10">
        <v-icon class="app-bar--icon">mdi-cart-outline</v-icon>$10,523.35
      </v-badge>
    </v-btn>

    <template v-slot:extension>
      <v-chip-group center-active>
        <v-chip v-for="(item, index) in menu" :key="index" class="chip-customize">
          <v-img class="chip-customize--img" :src="item.src"></v-img>
          <span class="chip-customize--text">{{item.etiqueta}}</span>
        </v-chip>
      </v-chip-group>
      <v-row></v-row>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        etiqueta: "Frutas",
        src: require("../assets/icon/frutas.svg")
      },
      {
        etiqueta: "Verduras",
        src: require("../assets/icon/verduras.svg")
      },
      {
        etiqueta: "Pollo",
        src: require("../assets/icon/pollo.svg")
      },
      {
        etiqueta: "Lácteos",
        src: require("../assets/icon/lacteos.svg")
      },
      {
        etiqueta: "Chiles",
        src: require("../assets/icon/chiles.svg")
      },
      {
        etiqueta: "Varios",
        src: require("../assets/icon/varios.svg")
      }
    ]
  })
};
</script>

<style lang="scss">
.app-bar--icon {
  padding-right: 3px;
}

.app-bar--logo {
  margin-left: 12px;
}

.chip-customize {
  margin: 0px !important;
  background: transparent !important;
  border-radius: 0 !important;
}

.chip-customize--img {
  max-width: 30px;
}

.chip-customize--text {
  font-size: 14px;
  font-weight: 700;
  padding-left: 3px;
  vertical-align: baseline !important;
}
</style>