import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios from "axios";
import { HttpError } from "react-admin";

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .get(`${apiUrl}/api/employee/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: response.data.map((employee) => ({
            ...employee,
            id: employee.ssn,
          })),
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .get(`${apiUrl}/api/employee/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...response.data, id: response.data.ssn },
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
    let userData = JSON.parse(localStorage.getItem("auth"));
    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/employee`, {
            params: {
              user_id: id,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token_type} ${userData.access_token}`,
            },
          })
          .then((response) => {
            return { ...response.data, id: response.data.ssn };
          });
      })
    );
    return { data: ResolvedRequests };
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .delete(`${apiUrl}/api/employee/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...response.data, id: response.data.ssn },
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
      .post(`${apiUrl}/api/employee`, params.data, {
        params: {
          user_id: params.id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
        data: params.data,
      })
      .then((response) => {
        return {
          data: { ...response.data, id: response.data.ssn },
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
      .put(`${apiUrl}/api/employee/${params.id}`, params.data, {
        data: params.data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...response.data, id: response.data.ssn },
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

  async getManyReference(resource, params, apiUrl) {},
  AssignProject(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    console.log(params);

    return axios
      .post(`${apiUrl}/api/employee/assign`, params, {
        params: {
          user_id: params.id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
        data: params,
      })
      .then((response) => {
        return {
          data: { ...response.data, id: response.data.ssn },
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
};

export default dataProviderFunctions;
