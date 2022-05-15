import * as React from "react";
import {  } from "react-final-form";

import {
  required,
  SimpleForm,
  TextInput,
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Box } from "@material-ui/core";

const UserList = (props) => (
  <Create {...props} mutationMode="optimistic">
    <SimpleForm>
      <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
        <Box flex={2} mr={{ md: 0, lg: "1em" }}>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="fname" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="mname" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="lname" validate={[required()]} fullWidth />
            </Box>
          </Box>

          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="degree" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <NumberInput source="salary" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput reference="departments" source="department_id">
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Box>
          </Box>

          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="phone" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="status" validate={[required()]} fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="gender" validate={[required()]} fullWidth />
            </Box>
          </Box>

          <TextInput source="email" fullWidth />

          {/* <NumberInput source="department_id" fullWidth /> */}
          <TextInput source="address" fullWidth />
          <TextInput source="birthDate" fullWidth />
          <TextInput source="password" fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  </Create>
);

export default UserList;
