import { POST_SERVICE } from "../constants/constants";
import * as api from "../../api/api";

export const postService = (serviceData) => async (dispatch) => {
  try {
    console.log("service");
    const { data } = await api.postService(serviceData);
    console.log("af service");
    dispatch({ type: POST_SERVICE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
