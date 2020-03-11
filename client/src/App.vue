<template>
  <div id="app">
    <Header />
    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>
