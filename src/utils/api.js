import axios from "axios";


//Mock Api
const BASE_URL = "https://64fd5140596493f7af7e2a1c.mockapi.io/api";

const headers = {};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
