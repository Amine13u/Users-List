<template>
  <div class="about d-flex flex-row align-center  justify-center flex-wrap">
    <v-card
      class="mx-auto  ma-6"
      width="256"
      tile
      v-for="user in users"
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
        <v-btn width="50%"><v-icon>mdi-update</v-icon>Update</v-btn>
        <v-btn @click="deleteUser(user.id)" width="50%"
          ><v-icon>mdi-delete</v-icon>Delete</v-btn
        >
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    users: [
      {
        id: 1,
        firstName: "Amine",
        lastName: "Mannai",
        email: "amine@gmail.com",
      },
      {
        id: 2,
        firstName: "Karim",
        lastName: "Gharbi",
        email: "karim@gmail.com",
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
      },
    ],
  }),
  methods: {
    addUser() {
      let newUser = {
        id: Date.now(),
        firstName: this.newUserHolder.firstName,
        lastName: this.newUserHolder.lastName,
        email: this.newUserHolder.email,
      };
      this.users.push(newUser);
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
};
</script>
