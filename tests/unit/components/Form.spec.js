import { mount, createLocalVue } from "@vue/test-utils";
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
      state: {},
    };

    const wrapper = mount(Form, {
      mocks: { $store },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
