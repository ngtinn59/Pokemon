<template>
  <div class="screen">
    <h1>Interact Component here</h1>
    <base-card
      v-for="(card, index) in cardsContext"
      :key="index"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index, value: card }"
      :ref="`card-${index}`"
      @onFlipCard="checkRule($event)"
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
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      console.log("Card:", card);
      this.rules.push(card);
      if (this.rules.length === 2) {
        if (this.rules[0].value === this.rules[1].value) {
          console.log("Matched");
          this.$refs[`card-${this.rules[0].index}`][0].onEnableCard();
          this.$refs[`card-${this.rules[1].index}`][0].onEnableCard();
          this.rules = [];
          const disableElements = document.querySelectorAll(".screen .card.disabled");
          if (
            disableElements &&
            disableElements.length === this.cardsContext.length - 2
          ) {
            setTimeout(() => {
              this.$emit("onFinish", {});
            }, 500);
          }
        } else {
          console.log("Not matched");
          setTimeout(() => {
            this.$refs[`card-${this.rules[0].index}`][0].ontoggleFlipCardBack();
            this.$refs[`card-${this.rules[1].index}`][0].ontoggleFlipCardBack();
            this.rules = [];
          }, 500);
        }
      }
    },
  },
};
</script>
