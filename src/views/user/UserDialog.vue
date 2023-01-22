<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import type { VForm } from "vuetify/components";
const userStore = useUserStore();
const form = ref<VForm | null>(null);
const save = async () => {
  const { valid } = await form.value!.validate();
  if (valid) {
    userStore.saveUser();
  }
};
const clear = () => {
  userStore.dialog = false;
  userStore.clear();
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="userStore.dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Login*"
                    v-model="userStore.editedUser.login"
                    :rules="[
                      (v) => !!v || 'เติมก๊อน',
                      (v) => v.length >= 5 || 'Login ต้องไม่ต่ำกว่า 5 ตัวอักศร',
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    v-model="userStore.editedUser.name"
                    :rules="[
                      (v) => !!v || 'เติมก๊อน',
                      (v) =>
                        v.length >= 5 || 'Login Name ต้องไม่ต่ำกว่า 5 ตัวอักศร',
                    ]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    v-model="userStore.editedUser.password"
                    type="password"
                    :rules="[
                      (v) => !!v || 'เติมก๊อน',
                      (v) =>
                        v.length >= 8 || 'Password ต้องไม่ต่ำกว่า 8 ตัวอักศร',
                      (v) =>
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
                          v
                        ) ||
                        'ต้องเป็นตัวพิมพ์เล็กแต่ตัวพิมพ์ใหญ่ ประกอบด้วยอักขระพิเศษ',
                    ]"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="clear">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped></style>
