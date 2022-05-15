import axios from "axios";
import { HttpError } from "react-admin";

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    return axios
      .get(`${apiUrl}/api/department`, {})
      .then((response) => {
        return {
          data: response.data,
          total: response.data.length,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  getOne(resource, params, apiUrl) {
    return axios
      .get(`${apiUrl}/api/department/${params.id}`, {})
      .then((response) => {
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  getMany(resource, params, apiUrl) {
    return Promise.all(
      params.ids.map((id) => {
        console.log(id);
        return axios.get(`${apiUrl}/api/department/${id}`).then((response) => {
          return response.data;
        });
      })
    ).then((res) => ({
      data: res,
    }));
  },
  delete(resource, params, apiUrl) {
    return axios
      .delete(`${apiUrl}/api/department/${params.id}`, {})
      .then((response) => {
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  create(resource, params, apiUrl) {
    return axios
      .post(`${apiUrl}/api/department`, params.data, {})
      .then((response) => {
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  update(resource, params, apiUrl) {
    return axios
      .put(`${apiUrl}/api/department/${params.id}`, params.data, {})
      .then((response) => {
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  getManyReference(resource, params, apiUrl) {},
};

export default dataProviderFunctions;
