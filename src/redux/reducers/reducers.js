import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers.js";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
});

export default reducer;