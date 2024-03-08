import { combineReducers } from "redux";
import { productReducer } from "./productReducers.js";

const reducer = combineReducers({
  allProducts: productReducer,
});

export default reducer;