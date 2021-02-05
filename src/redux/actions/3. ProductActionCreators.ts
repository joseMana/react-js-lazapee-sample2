import { CustomAction } from "./2. ProductCustomAction";
import * as service from "../../services/lazapeeService";
import * as types from "./1. ProductActionTypes";
import { Product } from "../../models/Product";
import { Dispatch } from "react";
import { PRODUCT_LOAD_SUCCESS, PRODUCT_DECREMENT_SUCCESS, PRODUCT_UPDATE_SUCCESS } from "./1. ProductActionTypes";
import { useSelector } from "react-redux";
import { StoreState } from "../StoreState";

var firstLoad: boolean = true;


export function LoadProducts(dispatch: Dispatch<any>) {
  service
    .getAllProducts()
    .then((products) => {
        dispatch(LoadProductsSuccess(products));
      }
    );

}

export const LoadProductsSuccess = (products: Product[]): CustomAction => ({
  type: PRODUCT_LOAD_SUCCESS,
  payload: {
    productList: products,
  }
});
export const ProductDecrementAction = (_id: string, products: Product[]): CustomAction => ({
  type: PRODUCT_DECREMENT_SUCCESS,
  payload: {
    productList: products
  }
});
export const UpdateProductAction = (value: Product[]): CustomAction => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: {
    productList: value
  }
});
