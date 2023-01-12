<script setup lang="ts">
import MainView from "./views/MainView.vue";
import LoginView from "./views/LoginView.vue";
import { ref, computed } from "vue";
const loginName = ref("");
const isLogin = computed(() => {
  return loginName.value !== "";
});
const login = (userName: string): void => {
  loginName.value = userName;
  localStorage.setItem("loginName", userName);
};
const logout = () => {
  loginName.value = "";
  localStorage.removeItem("loginName");
};
</script>

<template>
  <LoginView v-if="!isLogin" @login="login" />
  <MainView v-if="isLogin" @logout="logout" />
</template>

<style scoped></style>
