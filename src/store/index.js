import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    dialog: false,
    editedUser: null,
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
  },
  mutations: {
    updateUser(state, payload) {
      console.log(payload);
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );
      state.editedUser = null;
    },
    addUser(state, payload) {
      console.log(payload);
      let newUser = {
        id: Date.now(),
        ...payload,
      };
      state.users.push(newUser);
    },
    deleteUser(state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
    toggleDialog(state, { status, user }) {
      state.editedUser = user;
      state.dialog = status;
    },
    searchUser(state, text) {
      state.search = text;
    },
  },
  getters: {
    getUsers: (state) => state.users,
    getDialog: (state) => state.dialog,
    getEditedUser: (state) => state.editedUser,
    getSearch: (state) => state.search,
  },
});
