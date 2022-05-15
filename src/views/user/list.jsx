// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
} from "react-admin";

import { useMediaQuery } from "@material-ui/core";

const UserList = (props) => {
  return (
    <List {...props} perPage={25}>
      <Datagrid optimized rowClick="edit">
        <TextField source="fname" />
        <EmailField source="email" />
        <NumberField source="salary" />
        <TextField source="status" />
        <TextField source="department.name" />
      </Datagrid>
    </List>
  );
};

export default UserList;
