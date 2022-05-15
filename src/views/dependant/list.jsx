// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="gender" />
      <TextField source="relation" />
      <TextField source="employee.email" />

    </Datagrid>
  </List>
);

export default UserList;
