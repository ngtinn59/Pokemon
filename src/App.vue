<template>
  <main-screen />
  <interact-screen />
</template>

<script>
import MainScreen from './components/MainScreen.vue';
import InteractScreen from './components/InteractScreen.vue';
export default {
  name: 'App',
  data() {
    return {
      statusMatch: "default"
    }
  }
  components: {
    MainScreen,
    InteractScreen
  },
}
</script>