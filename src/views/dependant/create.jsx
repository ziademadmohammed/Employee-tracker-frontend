// in src/users.js
import * as React from "react";
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="gender" fullWidth />
      <TextInput source="relation" fullWidth />
      <ReferenceInput
        reference="employees"
        source="employee_ssn"
      >
        <SelectInput optionText='email' optionValue='id' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default UserList;
