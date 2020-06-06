<template>
  <div>
    <v-btn outlined block depressed color="grey darken-3" class="btn-customized">
      <v-row>
        <v-col @click="minus" class="btn-customized--minus" cols="4">
          <v-icon color="success">mdi-minus</v-icon>
        </v-col>
        <v-col class="grey--text text--darken-3 col-text" cols="4">{{quantityMaskTop}} {{unityTop}}</v-col>
        <v-col @click="plus" class="btn-customized--plus" cols="4">
          <v-icon color="success">mdi-plus</v-icon>
        </v-col>
      </v-row>
    </v-btn>
    <v-btn
      @click="pieceType = !pieceType"
      text
      block
      color="success"
      small
    >{{quantityMaskBottom}} {{unityBottom}}</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    quantityMaskBottom: 0,
    unityBottom: "pza",
    quantityMaskTop: 0,
    unityTop: "g",     
    weightPiece: 1800,
    quantity: 1,
    limit: 5,
    pieceType: true,
    quantityPiece: 0,
    quantityGrams: 0
  }),
  methods: {
    plus() {
      if (this.quantity < this.limit) this.quantity++;
      this.quantityChange();
      this.maksTopChange();
    },
    minus() {
      if (this.quantity >= 1) this.quantity--;
      this.quantityChange();
      this.maksTopChange();
    },
    quantityChange() {
        this.quantityPiece = this.quantity;
        this.quantityGrams = this.quantity * this.weightPiece;
    },
    maksTopChange() {
        this.quantityMaskTop = this.pieceType ? this.quantityGrams : this.quantityPiece;
        this.quantityMaskBottom = this.pieceType ? this.quantityPiece : this.quantityGrams;
    },
    masked() {
        this.quantityPiece = this.quantity;
        this.quantityMaskTop = this.quantity * this.weightPiece;
        this.quantityMaskBottom = this.quantity;
        this.initializeQuantityGrams();
    },
    initializeQuantityGrams() {
      this.quantityGrams = this.weightPiece;
    }
  },
  watch: {
      pieceType: function () {
          this.quantityMaskTop = this.pieceType ? this.quantityGrams : this.quantityPiece;
          this.unityTop = this.pieceType ? 'g' : 'pza';
          this.quantityMaskBottom = this.pieceType ? this.quantityPiece : this.quantityGrams;
          this.unityBottom = this.pieceType ? 'pza' : 'g';
      }
  },
  created() {
        this.masked();
  }
};
</script>

<style lang="scss" scoped>
.btn-customized {
  cursor: default !important;
}

.btn-customized--minus,
.btn-customized--plus {
  cursor: pointer;
}

.col-text {
  padding-left: 0px;
  padding-right: 0px;
}
</style>