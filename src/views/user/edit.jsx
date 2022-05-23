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
  useRefresh,
  useRecordContext,
  Button,
  SimpleFormIterator,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { Box } from "@mui/material";

import CollapsibleCard from "../../components/collapsibleCard.jsx";
import UserDataProvider from "../../dataProvider/users";
import { useState } from "react";
import { Card, FormControl, Grid, InputLabel, Select } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
// import { TextField as MUITextField } from "";
import { TextField as MUITextField } from "@mui/material";

const Aside = (props) => {
  const record = useRecordContext();
  let [FormState, setFormState] = useState({
    project_id: "",
    employee_id: "",
    hours: "",
  });
  let refreshRecord = useRefresh();

  let AssignProject = async (params) => {
    let responce = await UserDataProvider.AssignProject(
      "users",
      {
        project_id: parseInt(FormState.project_id),
        employee_id: parseInt(FormState.employee_id),
        hours: parseInt(FormState.hours),
      },
      "http://127.0.0.1:8000"
    );
    refreshRecord();
  };
  return (
    <Box width={400} display={{ xs: "block", lg: "block" }}>
      {record && (
        <Card sx={{ marginLeft: "10px" }}>
          <CardContent>
            {/* <Typography variant="h6" gutterBottom>
              history
            </Typography> */}
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid item display="flex" sx={{ width: "90%" }}>
                <Box flexGrow={1}>
                  {/* <Typography variant="body2">Permossion</Typography> */}
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                  >
                    <p>Assign Peoject</p>
                    <MUITextField
                      label="projectID"
                      value={FormState.project_id}
                      onChange={(event) => {
                        setFormState({
                          ...FormState,
                          project_id: event.target.value,
                        });
                      }}
                    />
                    <MUITextField
                      label="departmentID"
                      value={FormState.employee_id}
                      onChange={(event) => {
                        setFormState({
                          ...FormState,
                          employee_id: event.target.value,
                        });
                      }}
                    />
                    <MUITextField
                      label="NumberOFHours"
                      value={FormState.hours}
                      onChange={(event) => {
                        setFormState({
                          ...FormState,
                          hours: event.target.value,
                        });
                      }}
                    />
                    <Button
                      sx={{ marginTop: "15px" }}
                      variant="contained"
                      // disabled={record.user_role === Role}
                      onClick={AssignProject}
                    >
                      Update
                    </Button>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

const UserEdit = (props) => {
  return (
    <>
      <Edit
        {...props}
        aside={<Aside />}
        title="Edit User"
        mutationMode="pessimistic"
      >
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
                    source="department.id"
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
            fullWidth
            style={{ width: "100%" }}
            render={(record) => (
              <>
                {record.projects.length ? (
                  <CollapsibleCard title="Projects">
                    <>
                      <ArrayInput source="projects">
                        <SimpleFormIterator
                          disableRemove
                          disableAdd
                          disableReordering
                        >
                          <TextInput
                            record={record}
                            source="location"
                            label="location"
                            fullWidth
                            disabled
                          />
                          <TextInput
                            source="name"
                            label="name"
                            fullWidth
                            disabled
                          />
                          <NumberInput
                            source="budget"
                            fullWidth
                            label="budget"
                            disabled
                          />
                          <TextInput
                            source="description"
                            label="description"
                            fullWidth
                            disabled
                          />
                        </SimpleFormIterator>
                      </ArrayInput>
                    </>
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
