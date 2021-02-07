import { CustomAction } from "../actions/2. ProductCustomAction";
import { StoreState, initialState } from "./../StoreState";
import { Reducer } from "redux";
import * as types from "../actions/1. ProductActionTypes";
import { Product } from "../../models/Product";

const productReducer: Reducer<StoreState, CustomAction> = (
  state: StoreState = initialState,
  action: CustomAction
) => {
  switch (action.type) {
    case types.PRODUCT_LOAD_SUCCESS:
    case types.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        productList: action.payload.productList
      };
    case types.PRODUCT_DECREMENT_SUCCESS:
      for (var i = 0; i < state.productList.length; i++)
        if (state.productList[i]._id === action.id)
          state.productList[i].stockCount = state.productList[i].stockCount - 1;

      return {
        ...state,
        productList: state.productList.map(p => p)
      }
    default:
      return state;
  }

};

export default productReducer;
