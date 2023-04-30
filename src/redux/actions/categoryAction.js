import { POST_CATEGORY,GET_CATEGORY,POST_SERVICE } from "../constants/constants";
import * as api from "../../api/api";

export const postCategory = (categoryData) => async (dispatch) => {
  try {
    const { data } = await api.postCategory(categoryData);
    dispatch({ type: POST_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getCategory();
    dispatch({ type: GET_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};



