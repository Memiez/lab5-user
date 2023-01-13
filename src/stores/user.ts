import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";

export const useUserStore = defineStore("user", () => {
  const lastID = 3;
  const users = ref<User[]>([
    { id: 1, login: "admin", name: "Administrator", password: "Pass@1234" },
    { id: 2, login: "user1", name: "user 1", password: "Pass@1234" },
  ]);
  return { users };
});
