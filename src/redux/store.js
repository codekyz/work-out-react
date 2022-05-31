import { createStoreHook } from "react-redux";

const reducer = (state = {}) => {
  return state;
};

const store = createStoreHook(reducer);

export default store;
