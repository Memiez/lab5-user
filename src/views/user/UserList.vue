<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { mdiPencil, mdiDelete, mdiPlus } from "@mdi/js";
const userStore = useUserStore();

const deleteUser = (index: number): void => {
  userStore.deleteUser(index);
};
const addNewUser = () => {
  userStore.dialog = true;
};
const editUser = () => {
  userStore.dialog = true;
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3" offset="9">
        <v-btn color="pink" :prepend-icon="mdiPlus" @click="addNewUser"
          >Add New</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
                <v-btn
                  :icon="mdiPencil"
                  color="blue"
                  class="ma-1"
                  @click="editUser"
                >
                </v-btn
                ><v-btn
                  :icon="mdiDelete"
                  color="red"
                  class="ma-1"
                  @click="deleteUser(item.id)"
                >
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
