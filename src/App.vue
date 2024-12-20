<template>
  <main-screen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart($event)" />
  <interact-screen
    v-if="statusMatch === 'match'"
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResults"
  />
  <result-screen
    v-if="statusMatch === 'result'"
    :timer="timer"
    @restart="statusMatch = 'default'"
  />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import { shuffled } from "./utils/array";
export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      timer: 0,
      statusMatch: "default",
    };
  },
  methods: {
    onHandleBeforeStart(configs) {
      console.log("Configs:", configs);
      this.settings.totalOfBlocks = configs.size;
      console.log("Total of blocks:", this.settings.totalOfBlocks);
      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      console.log("First cards:", firstCards);

      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      console.log(cards);
      this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
    onGetResults() {
      this.timer = new Date().getTime() - this.settings.startedAt;
      this.statusMatch = "result";
    },
  },
};
</script>
