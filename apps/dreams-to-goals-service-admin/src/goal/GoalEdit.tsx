import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DreamTitle } from "../dream/DreamTitle";
import { MilestoneTitle } from "../milestone/MilestoneTitle";

export const GoalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <ReferenceInput source="dream.id" reference="Dream" label="dream">
          <SelectInput optionText={DreamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="milestones" reference="Milestone">
          <SelectArrayInput
            optionText={MilestoneTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
