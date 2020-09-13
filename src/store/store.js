import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Deneme 1",
        text: "Deneme 1",
        todoState: "Pending"
      },
      {
        id: 2,
        title: "Deneme 2",
        text: "Deneme 2",
        todoState: "Pending"
      },
      {
        id: 3,
        title: "Deneme 3",
        text: "Deneme 3",
        todoState: "Pending"
      },
      {
        id: 4,
        title: "Deneme 4",
        text: "Deneme 4",
        todoState: "Pending"
      }
    ]
  },
  getters,
  mutations,
  actions
});
