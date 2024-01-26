// PlanetList.tsx
import * as React from "react";
import { List, Datagrid, FunctionField, TextField, SearchInput, SelectInput } from "react-admin";

interface Planet {
  id: string;
  name: string;
  filmConnection: {
    films: {
      id: string;
      title: string;
    }[];
  };
}

const postFilters = [<SearchInput source="q" alwaysOn resettable={false} />, <SelectInput source="name" />];

const PlanetList: React.FC = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="name" name="Planets" />
      <FunctionField
        label="Nama Planet"
        render={(record: Planet) => (
          <>
            <h1>{record.filmConnection.films[0].title}</h1>
          </>
        )}
      />
    </Datagrid>
  </List>
);

export default PlanetList;
