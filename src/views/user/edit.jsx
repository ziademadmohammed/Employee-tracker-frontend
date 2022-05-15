// in src/users.js
import * as React from "react";

import {
  required,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
  ArrayInput,
  FunctionField,
} from "react-admin";
import { Box } from "@mui/material";

import CollapsibleCard from "../../components/collapsibleCard.jsx";

const UserEdit = (props) => {
  return (
    <>
      <Edit {...props} title="Edit User" mutationMode="pessimistic">
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
                  <TextInput
                    source="degree"
                    validate={[required()]}
                    fullWidth
                  />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <NumberInput
                    source="salary"
                    validate={[required()]}
                    fullWidth
                  />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <ReferenceInput
                    reference="departments"
                    source="department_id"
                  >
                    <SelectInput optionText="name" optionValue="id" fullWidth />
                  </ReferenceInput>
                </Box>
              </Box>

              <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                  <TextInput source="phone" validate={[required()]} fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="status"
                    validate={[required()]}
                    fullWidth
                  />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="gender"
                    validate={[required()]}
                    fullWidth
                  />
                </Box>
              </Box>

              <TextInput source="email" fullWidth />

              <TextInput source="address" fullWidth />
              <TextInput source="birthDate" fullWidth />
            </Box>
          </Box>
          <FunctionField
            render={(record) => (
              <>
                {record.projects.length ? (
                  <CollapsibleCard title="Projects">
                    <ArrayInput source="projects">
                      <Box display={{ xs: "block", sm: "flex" }}>
                        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                          <TextInput
                            source="location"
                            validate={[required()]}
                            fullWidth
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <TextInput
                            source="name"
                            validate={[required()]}
                            fullWidth
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <NumberInput source="budget" fullWidth />
                        </Box>
                      </Box>
                      <TextInput
                        source="description"
                        validate={[required()]}
                        fullWidth
                      />
                    </ArrayInput>
                  </CollapsibleCard>
                ) : null}
              </>
            )}
          />
        </SimpleForm>
      </Edit>
    </>
  );
};

export default UserEdit;
