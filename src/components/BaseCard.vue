<template>
  <div
    class="card"
    :class="{ disabled: isDisabled, matched: isMatched, unmatched: isUnmatched }"
  >
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="ontoggleFlipCard"
    >
      <div class="card_face card__face--front">
        <div class="card__content"></div>
      </div>
      <div class="card_face card__face--back">
        <div
          class="card__content"
          :style="{ backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})` }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: [Object, Number],
      required: true,
    },
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
      isMatched: false,
      isUnmatched: false,
    };
  },
  methods: {
    ontoggleFlipCard() {
      if (this.isDisabled) return false;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("onFlipCard", this.card);
      }
    },
    ontoggleFlipCardBack() {
      this.isFlipped = false;
      this.isUnmatched = false;
    },
    onEnableCard() {
      this.isDisabled = true;
      this.isMatched = true;
    },
    onMarkUnmatched() {
      this.isUnmatched = true;
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;
  perspective: 1000px; /* Add perspective for 3D effect */
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}

.card_face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front .card__content {
  background: url(../assets/images/icon_back.png) no-repeat center center;
  background-size: 40px 40px;
  height: 100%;
  word-wrap: 100%;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
}

.card__face--back .card__content {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
}

/* Add animations for matched and unmatched cards */
.card.matched {
  animation: matchedAnimation 1s forwards, explosion 0.5s forwards;
}

.card.unmatched {
  animation: unmatchedAnimation 1s forwards;
}

@keyframes matchedAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes unmatchedAnimation {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0);
  }
}

/* Add explosion animation */
@keyframes explosion {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
