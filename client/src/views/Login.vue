<template>
  <v-layout row wrap class="mt-2">
    <v-flex xs6 offset-xs3>
      <v-card id="no-br pb-2">
        <v-toolbar class="toolbar-blue" text dense dark>
          <v-card dark color="purple">
            <v-toolbar-title text class="toolbar-blue no-br no-box-shadow">Login</v-toolbar-title>
          </v-card>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <!-- <input v-model="email" type="email" name="email" id="email" placeholder="email" /> -->
          <v-text-field v-model="email" label="Email" class="pl-2 pr-2" required></v-text-field>
          <br />
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            class="pl-2 pr-2"
            required
          ></v-text-field>
          <br />
          <div class="error">{{ error }}</div>
          <br />
          <v-btn class="margin-auto mb-2" @click="login">Login</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template> 

<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
.toolbar-blue {
  background: skyblue !important;
  color: black;
}
.margin-auto {
  margin: 0 auto !important;
  display: block;
}
.no-br {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.no-box-shadow {
  box-shadow: none !important;
}

.mt-2 {
  margin-top: 20px;
}
.pb-2 {
  padding-bottom: 20px !important;
}
.float-left {
  float: left;
}

.pl-2 {
  padding-left: 20px;
}
.pr-2 {
  padding-right: 20px;
}
</style>