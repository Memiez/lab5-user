<script setup lang="ts">
import { ref } from "vue";
const loginName = ref("");
const password = ref("");
</script>

<template>
  <v-app>
    <v-main class="pa-15 bg-pink-lighten-4">
      <v-card width="400px" class="mx-auto">
        <v-card-title primary-title class="text-center"> Login </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Login Name" v-model="loginName"></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
          <pre>
            {{ loginName }}
            {{ password }}
          </pre>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="success">Login</v-btn>
          <v-btn color="error">Clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>
