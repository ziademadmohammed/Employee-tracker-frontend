import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios from "axios";
import { HttpError } from "react-admin";

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    return axios
      .get(`${apiUrl}/api/employee/`, {})
      .then((response) => {
        console.log(response.data);
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
    return axios
      .get(`${apiUrl}/api/employee/${params.id}`, {})
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
    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/employee`, {
            params: {
              user_id: id,
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
    return axios
      .delete(`${apiUrl}/api/employee/${params.id}`, {})
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
    return axios
      .post(`${apiUrl}/api/employee`, params.data, {
        params: {
          user_id: params.id,
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
    return axios
      .put(`${apiUrl}/api/employee/${params.id}`, params.data, {
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
  updateUserRole(resource, params, apiUrl) {
    return axios
      .put(
        `${apiUrl}/api/employee/role/${params.id}?updated_user_role=${params.role}`,
        {}
      )
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
  async getManyReference(resource, params, apiUrl) {},
};

export default dataProviderFunctions;
