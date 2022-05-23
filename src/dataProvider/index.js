/* eslint-disable import/no-anonymous-default-export */
import { fetchUtils } from "ra-core";
import employeesDataProvider from "./users";
import DepartmentDataProvider from "./department";
import projectsDataProvider from "./projects";
import dependantDataProvider from "./dependant";

let resourselist = {
  employees: employeesDataProvider,
  departments: DepartmentDataProvider,
  projects: projectsDataProvider,
  dependant: dependantDataProvider,
};

export default (
  apiUrl,
  httpClient = fetchUtils.fetchJson,
  countHeader = "Content-Range"
) => ({
  getList: (resource, params) =>
    resourselist[resource].getList(resource, params, apiUrl),

  getOne: (resource, params) =>
    resourselist[resource].getOne(resource, params, apiUrl),

  getMany: (resource, params) => {
    return resourselist[resource].getMany(resource, params, apiUrl);
  },

  getManyReference: (resource, params) => {
    return resourselist[resource].getManyReference(resource, params, apiUrl);
  },

  update: (resource, params) =>
    resourselist[resource].update(resource, params, apiUrl),

  create: (resource, params) =>
    resourselist[resource].create(resource, params, apiUrl),

  delete: (resource, params) =>
    resourselist[resource].delete(resource, params, apiUrl),

  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "text/plain",
          }),
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.id),
    })),
});
