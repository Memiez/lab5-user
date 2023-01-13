<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { mdiPencil, mdiDelete, mdiPlus } from "@mdi/js";
const userStore = useUserStore();
</script>

<template>
  <v-container>
    <v-row>
      <v-row>
         </v-row>
    </v-row>
  </v-container>
  <v-btn color="deep-purple" :prepend-icon="mdiPlus">Add New</v-btn>
  <v-table>
    <thead>
      <tr>
        <th>ID</th>
        <th>login</th>
        <th>name</th>
        <th>password</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of userStore.users" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.login }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.password }}</td>
        <td>
          <v-btn :icon="mdiPencil" color="blue" class="ma-1"> </v-btn
          ><v-btn :icon="mdiDelete" color="pink" class="ma-1"> </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
