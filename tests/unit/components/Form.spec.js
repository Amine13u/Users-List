import { shallowMount, createLocalVue } from "@vue/test-utils";
import Form from "@/components/Form.vue";
// import Vue from "vue";
import Vuex from "vuex";
// import Vuetify from "vuetify";

const localVue = createLocalVue();
//localVue.use(Vuex);

// const store = new Vuex.Store({});

describe("Form", () => {
  test("snapshot", () => {
    let $store = {
      state: {
        search: "",
        dialog: false,
        editedUser: {},
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
    };

    const wrapper = shallowMount(Form, {
      mocks: { $store },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
