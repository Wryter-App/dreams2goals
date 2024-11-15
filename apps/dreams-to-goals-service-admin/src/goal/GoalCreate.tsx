import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DreamTitle } from "../dream/DreamTitle";
import { MilestoneTitle } from "../milestone/MilestoneTitle";

export const GoalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
