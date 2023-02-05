import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    api_key: "8508a0bd1efc493c4bfa095b6a37f250",
  },
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (err) {
    try {
      if (err.code === "ERR_NETWORK") {
        err.response = {
          data: {
            status_message: "Cannot connect to internet. Check your connection",
          },
        };
      } else if (!err.response) {
        err.response = {
          data: {
            status_message: "Something went wrong. Try again later",
          },
        };
      } else if (!err.response.data?.status_message) {
        err.response.data = {
          ...err.response.data,
          status_message: "Something went wrong. Try again later",
        };
      }
      return Promise.reject(err);
    } catch (error) {
      return Promise.reject(err);
    }
  }
);

export const addBearerToken = (token: string) => {
  api.defaults.headers.common = {
    Authorization: token,
  };
};
export const removeBearerToken = () => {
  delete api.defaults.headers.Authorization;
};

export default api;
