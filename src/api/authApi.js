import axiosClient from "./axiosClients";

const url = "/auth";

export const authApi = {
  login(data) {
    return axiosClient.post(`${url}`, data);
  },

  signUp(data) {
    return axiosClient.post(`${url}`, data);
  },
};
