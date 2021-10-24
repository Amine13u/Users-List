import { shallowMount } from "@vue/test-utils";
import Form from "@/components/Form.vue";

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

describe("Form unit test : ", () => {
  test("snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
