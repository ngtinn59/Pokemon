<template>
  <div class="screen">
    <h1>Interact Component here</h1>
    <base-card
      v-for="(card, index) in cardsContext"
      :key="index"
      :imgBackFaceUrl="`images/${card}.png`"
    ></base-card>
  </div>
</template>

<script>
import BaseCard from "./BaseCard";

export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    BaseCard,
  },
};
</script>
