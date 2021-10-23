<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="mt-3"
          @click="toggleDialog(true)"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="first name*"
                  required
                  v-model="form.firstName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="last name*"
                  required
                  v-model="form.lastName"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model="form.email"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="toggleDialog(false)">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitForm()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    form: { firstName: "", lastName: "", email: "" },
  }),
  methods: {
    submitForm() {
      if (Object.values(this.form).includes(""))
        return alert("One field is missing");

      this.$store.commit(this.form.id ? "updateUser" : "addUser", this.form);
      this.form = { firstName: "", lastName: "", email: "" };
      this.toggleDialog(false);
    },
    toggleDialog(status) {
      this.$store.commit("toggleDialog", { status });
    },
  },
  watch: {
    editForm(next) {
      // if next value is truthy
      // we will initialize the form with the user data
      if (next) {
        this.form = { ...next };
      }
    },
  },
  computed: mapState({
    dialog: (state) => state.dialog,
    editForm: (state) => state.editedUser,
  }),
};
</script>
