import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios from "axios";
import { HttpError } from "react-admin";

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    // let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .get(`${apiUrl}/api/project`, {
        headers: {
          // "Content-Type": "application/json",
          // Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        // (ValidatedData);
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
  async getOne(resource, params, apiUrl) {
    return axios
      .get(`${apiUrl}/api/project/${params.id}`, {})
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
  async getMany(resource, params, apiUrl) {
    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios.get(`${apiUrl}/api/project/${id}`, {}).then((response) => {
          return response.data;
        });
      })
    );
    return { data: ResolvedRequests };
  },
  delete(resource, params, apiUrl) {
    return axios
      .delete(`${apiUrl}/api/project/${params.id}`, {})
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
      .post(`${apiUrl}/api/project`, params.data, {})
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
      .put(`${apiUrl}/api/project/${params.id}`, params.data, {})
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
