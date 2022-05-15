// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const UserList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      {/* <TitleWithThumbnail size="75" /> */}
      <TextField source="location" />
      <TextField source="name" />
      <NumberField source="number_employee" />
    </Datagrid>
  </List>
);

export default UserList;
