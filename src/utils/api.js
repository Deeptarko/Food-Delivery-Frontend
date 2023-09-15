import axios from "axios";

const BASE_URL = "https://64fd5140596493f7af7e2a1c.mockapi.io/api";

// const BASE_URL = "http://localhost:9002";

export const fetchDataFromApi = async (url, params, headers = {}) => {
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
