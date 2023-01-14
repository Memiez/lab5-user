import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";

export const useUserStore = defineStore("user", () => {
  const lastID = 4;
  const users = ref<User[]>([
    { id: 1, login: "admin", name: "Administrator", password: "Pass@1234" },
    { id: 2, login: "user1", name: "user 1", password: "Pass@1234" },
    { id: 3, login: "user2", name: "user 2", password: "Pass@1234" },
  ]);

  const deleteUser = (id: number): void => {
    const index = users.value.findIndex((item) => item.id === id);
    users.value.splice(index, 1);
  };
  return { users, deleteUser };
});
