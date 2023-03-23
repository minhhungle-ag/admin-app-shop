import axiosClient from "./axiosClients";

const url = "/products";

export const productApi = {
  getAll(params) {
    return axiosClient.get(`${url}`, { params });
  },

  get(id) {
    return axiosClient.get(`${url}/${id}`);
  },

  add(data) {
    return axiosClient.post(`${url}`, data);
  },

  edit(id, data) {
    return axiosClient.put(`${url}/${id}`, data);
  },

  remove(id) {
    return axiosClient.remove(`${url}/${id}`);
  },
};
