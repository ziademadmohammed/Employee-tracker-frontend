// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const UserList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="location" />
      <NumberField source="budget" />
    </Datagrid>
  </List>
);

export default UserList;
