<template>
  <div class="screen">
    <h1>Interact Component here</h1>
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 + 16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <base-card
        v-for="(card, index) in cardsContext"
        :key="index"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        :cardsContext="cardsContext"
        :ref="`card-${index}`"
        @onFlipCard="checkRule($event)"
      ></base-card>
    </div>
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

<style scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--light);
  color: var(--light);
  animation: fadeIn 1s ease-in-out;
}

.base-card {
  animation: bounceIn 1s ease-in-out;
}

.screen__inner {
  width: calc(424px);
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
