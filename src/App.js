// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";

import Dataprovider from "./dataProvider";
import AuthProvider from "./authProvider";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

import UserList from "./views/user/list";
import UserEdit from "./views/user/edit";
import UserCreate from "./views/user/create";

import DepartmentList from "./views/department/list";
import DepartmentEdit from "./views/department/edit";
import DepartmentCreate from "./views/department/create";

import projectList from "./views/projects/list";
import projectEdit from "./views/projects/edit";
import projectCreate from "./views/projects/create";

import dependantViews from "./views/dependant";

import { FaPlaceOfWorship } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import decodeJwt from "jwt-decode";

const dataProviderInstance = Dataprovider("http://localhost:8000");
const baseTheme = createTheme();

const App = () => {
  let checkForAuthExpiration = () => {
    let accessToken = JSON.parse(localStorage.getItem("auth"))?.access_token;
    if (!accessToken) {
      localStorage.removeItem("auth");
      return;
    }
    let decodedToken = decodeJwt(accessToken);
    if (Date.now() / 1000 > decodedToken.exp) {
      localStorage.removeItem("auth");
    }
    // (decodedToken);
  };
  checkForAuthExpiration();
  return (
    <ThemeProvider theme={baseTheme}>
      <Admin
        dataProvider={dataProviderInstance}
        authProvider={AuthProvider}
        disableTelemetry
      >
        <Resource
          name="employees"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          icon={FaUsers}
        />
        <Resource
          name="departments"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
        />
        <Resource
          name="projects"
          list={projectList}
          edit={projectEdit}
          create={projectCreate}
          icon={FaPlaceOfWorship}
        />

        <Resource name="dependant" {...dependantViews} />
      </Admin>
    </ThemeProvider>
  );
};

export default App;
