import React from 'react';
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  NumberField,
  SimpleForm,
  DisabledInput,
  NumberInput,
  LongTextInput,
  EditButton,
  DeleteButton,
} from 'admin-on-rest';

export const QuoteList = (props) => (
  <List {...props} sort={{ field: "ordinal", order: "asc" }}>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="ordinal" />
      <TextField source="body" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const QuoteEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <NumberInput source="ordinal" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
)

export const QuoteCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="ordinal" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
)
