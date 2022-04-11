import { createStore } from "vuex";
import crypto from "./modules/crypto";
import search from "./modules/search";
import app from "./modules/app";

const store = createStore({
  modules: {
    crypto,
    search,
    app,
  },
});

export default store;
