// in src/users.js
import * as React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import { ReferenceInput } from "react-admin";
import { SelectInput } from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="location" />
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="budget" />
      <ReferenceInput reference="departments" source="department_id">
        <SelectInput optionText="name" optionValue="id" fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default UserList;
