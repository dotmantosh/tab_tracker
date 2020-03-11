<template>
  <v-toolbar fixed dense color="orange darken-2">
    <v-toolbar-title class="home" @click="navigateTo('/')">
      <span>Title</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text>BROWSE</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Login'})" text>Login</v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'Register'})"
        text
      >Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: lightblue;
}
</style>