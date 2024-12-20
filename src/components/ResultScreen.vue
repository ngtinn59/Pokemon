<template>
  <div class="result-screen">
    <h1>Game Over</h1>
    <p>Your Timer {{ Math.round(timer / 1000) }}</p>
    <button @click="restartGame">Play Again</button>
  </div>
</template>

<script>
export default {
  name: "ResultScreen",
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    restartGame() {
      this.$emit("restart");
    },
  },
};
</script>

<style scoped>
.result-screen {
  text-align: center;
  margin-top: 50px;
}

.result-screen h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.result-screen p {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.result-screen button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>
