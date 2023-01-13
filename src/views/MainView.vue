<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiAccountMultiple,
  mdiStar,
  mdiAccount,
} from "@mdi/js";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore();

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
const logout = () => {
  loginStore.logout();
};
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="theme === 'light' ? mdiWeatherSunny : mdiWeatherNight"
        @click="onClick"
        >Toggle Theme</v-btn
      >
      <v-btn @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>
        <v-list-item
          prepend-avatar="https://i.pinimg.com/originals/35/ce/9f/35ce9f85da291b4c1c504d8cbd37e8ee.gif"
          :title="loginStore.loginName"
          subtitle="sandra_a88@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="mdiAccount"
          title="Users"
          value="users"
          to="/user"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiAccountMultiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiStar"
          title="Starred"
          value="starred"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
