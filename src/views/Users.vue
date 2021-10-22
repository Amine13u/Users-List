<template>
  <div class="about d-flex flex-row align-center  justify-center flex-wrap">
    <v-card
      class="mx-auto  ma-6"
      width="256"
      tile
      v-for="user in filterdUsers"
      :key="user.id"
    >
      <v-navigation-drawer permanent>
        <v-system-bar></v-system-bar>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon size="45">mdi-account-box</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.firstName + " " + user.lastName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-btn width="50%" @click="toggleDialog(true, user)"
          ><v-icon>mdi-update</v-icon>Update</v-btn
        >
        <v-btn @click="deleteUser(user.id)" width="50%"
          ><v-icon>mdi-delete</v-icon>Delete</v-btn
        >
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Home",

  data: () => ({
    users: [],
    dialog: false,
    search: "",
  }),
  mounted() {
    this.users = this.$store.getters.getUsers;
    this.search = this.$store.getters.getSearch;
  },
  methods: {
    deleteUser(id) {
      this.$store.commit("deleteUser", id);
      this.users = this.$store.getters.getUsers;
    },
    toggleDialog(status, user) {
      this.$store.commit("toggleDialog", { status, user });
    },
  },
  computed: {
    filterdUsers() {
      return this.users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(this.search.toLowerCase()) ||
          user.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
