import { CustomAction } from "../actions/2. ProductCustomAction";
import { StoreState, initialState } from "./../StoreState";
import { Reducer } from "redux";
import * as types from "../actions/1. ProductActionTypes";

const productReducer: Reducer<StoreState, CustomAction> = (
  state: StoreState = initialState,
  action: CustomAction
) => {

  if (action.type === types.PRODUCT_LOAD_SUCCESS || action.type === types.PRODUCT_UPDATE_SUCCESS) {
    console.log(action.type);
    return {
      ...state,
      productList: action.payload.productList
    };
  }
  else{
    console.log("else ran");
    return state;
  }
};

export default productReducer;
