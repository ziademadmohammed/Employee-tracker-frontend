// in src/users.js
import * as React from "react";

import {
  SimpleForm,
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const UserEdit = (props) => (
  <Edit {...props} mutationMode="undoable">
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="gender" fullWidth />
      <TextInput source="relation" fullWidth />
      <ReferenceInput reference="employees" source="employee_ssn">
        <SelectInput optionText="email" optionValue="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
