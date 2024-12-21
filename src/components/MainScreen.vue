<template>
  <div class="screen">
    <h1>Pokemon - GO</h1>
    <h3>Select mode to start game</h3>
    <div class="modes">
      <button @click="onStart(16)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(36)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(64)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(100)">
        <span>10x10</span>
        <span>Supper Hard</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onStart(size) {
      this.$emit("onStart", { size });
    },
  },
};
</script>
<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  animation: fadeIn 1s ease-in-out;
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
  animation: slideInFromTop 1s ease-in-out;
}

.screen h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  animation: slideInFromTop 1s ease-in-out;
}

.modes {
  display: flex;
  margin-top: 2rem;
  animation: fadeIn 1.5s ease-in-out;
}

.modes button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: bounceIn 1s ease-in-out;
}

.modes button:hover {
  background-color: var(--light);
  color: var(--dark);
  transform: scale(1.1);
}

.modes button span:first-child {
  font-size: 2rem;
}

.modes button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}

/* Keyframes for animations */
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
