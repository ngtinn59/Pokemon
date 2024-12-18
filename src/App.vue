<template>
  <main-screen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart($event)" />
  <interact-screen v-if="statusMatch === 'match'" />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
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
      console.log("Configs:", configs); // Kiểm tra giá trị của configs
      this.settings.totalOfBlocks = configs.size; // Đảm bảo rằng bạn dùng 'size' thay vì 'totalOfBlocks'
      console.log("Total of blocks:", this.settings.totalOfBlocks); // Kiểm tra giá trị của totalOfBlocks
      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      console.log("First cards:", firstCards); // Kiểm tra mảng firstCards
      this.statusMatch = "match";
    },
  },
};
</script>
