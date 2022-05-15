// in src/users.js
import * as React from "react";
import { SimpleForm, Edit, TextInput, NumberInput } from "react-admin";
import { required } from "react-admin";
import { Box } from "@mui/material";

const UserEdit = (props) => {
  return (
    <Edit {...props} mutationMode="optimistic">
      <SimpleForm>
        <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
          <Box flex={2} mr={{ md: 0, lg: "1em" }}>
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput
                  source="location"
                  validate={[required()]}
                  fullWidth
                />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="name" fullWidth />
              </Box>
            </Box>
            {/* <RichTextInput source="short_description" fullWidth /> */}
            <NumberInput multiline source="number_employee" fullWidth />
          </Box>
        </Box>
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
