import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MilestoneTitle } from "../milestone/MilestoneTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <ReferenceInput
          source="milestone.id"
          reference="Milestone"
          label="milestone"
        >
          <SelectInput optionText={MilestoneTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
