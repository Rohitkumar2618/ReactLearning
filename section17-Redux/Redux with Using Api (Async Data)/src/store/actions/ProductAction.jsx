import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getstate) => {
  //   console.log(getstate());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch(getproducts(response.data));
  } catch (error) {
    console.log(error);
  }
};

