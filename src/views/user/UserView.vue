<script setup lang="ts">
import UserDialog from "./UserDialog.vue";
import UserList from "./UserList.vue";
import UserCardList from "./UserCardList.vue";
import { useUserStore } from "@/stores/user";
import { mdiTable, mdiCardOutline } from "@mdi/js";

const userStore = useUserStore();
</script>

<template>
  <v-container>
    <v-row>
      <UserList v-if="userStore.isTable"></UserList>
      <UserCardList v-if="!userStore.isTable"></UserCardList>
      <UserDialog></UserDialog>
    </v-row>
    <v-row class="justify-center">
      <v-btn :icon="mdiTable" flat @click="userStore.isTable = true"></v-btn>
      <v-btn
        :icon="mdiCardOutline"
        flat
        @click="userStore.isTable = false"
      ></v-btn>
    </v-row>
  </v-container>
</template>

<style scoped></style>
