// in src/users.js
import * as React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="location" />
      <TextInput source="name" />
      <NumberInput source="number_employee" />
    </SimpleForm>
  </Create>
);

export default UserList;
