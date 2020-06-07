<template>
  <div>
    <NavBarDesktop :menu="menu" class="menu d-none d-sm-flex" />
    <NavBarMobile :menu="menu" class="menu d-sm-none"/>
  </div>
</template>

<script>
export default {
  components: {
    NavBarDesktop: () => import("./navbar/NabVarDesktop"),
    NavBarMobile: () => import("./navbar/NavBarMobile")
  },
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

.card-actions--customized {
  padding: 0;
}

.container--customized {
  padding: 0;
}

.button-customized--top {
  letter-spacing: normal;
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.menu {
  position: fixed;
  z-index: 999;
  width: 100%;
}
</style>