import axios from "axios";
import { HttpError } from "react-admin";

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .get(`${apiUrl}/api/department`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .get(`${apiUrl}/api/department/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    return Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/department/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token_type} ${userData.access_token}`,
            },
          })
          .then((response) => {
            return response.data;
          });
      })
    ).then((res) => ({
      data: res,
    }));
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .delete(`${apiUrl}/api/department/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .post(`${apiUrl}/api/department`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .put(`${apiUrl}/api/department/${params.id}`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
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
