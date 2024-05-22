import axios from "axios";

import { getusers } from "../reducers/UserReducer";

export const asyncgetusers = () => async (dispatch, getstate) => {
  //   console.log(getstate());
  try {
    const response = await axios.get("https://fakestoreapi.com/users");

    dispatch(getusers(response.data));
  } catch (error) {
    console.log(error);
  }
};
