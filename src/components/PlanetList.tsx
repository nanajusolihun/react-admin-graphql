// PlanetList.tsx
import * as React from "react";
import { 
  List, 
  Datagrid, 
  FunctionField, 
  TextField, 
  SearchInput, 
  SelectInput, 
  DateField, 
  NumberField,
  Pagination,
} from "react-admin";

interface Planet {
  id: string;
  name: string;
  created: number;
  filmConnection: {
    films: {
      id: string;
      title: string;
    }[];
  };
}

const planetFilters = [
  <SearchInput source="q" alwaysOn resettable={false} />, 
  <TextField source="name" label="Name" sort={{ field: "name", order: "ASC" }} />, 
  <SelectInput source="name" />
];

const PlanetPagination = () => <Pagination rowsPerPageOptions={[5, 10, 15, 25]} />;

const PlanetList: React.FC = (props) => (
  <List {...props} filters={planetFilters} sort={{ field: "name", order: "ASC" }} pagination={<PlanetPagination />}>
    <Datagrid rowClick="edit">
      <TextField source="name" name="Planets" />
      <DateField source="created" name="Planets" />
      <TextField source="climates" />
      <NumberField source="population" />
      <TextField source="terrains" />
      <FunctionField
        label="Nama Planet"
        render={(record: Planet) => (
          <ul>
            {record.filmConnection.films.map((film) => (
              <li key={film.id}>{film.title}</li>
            ))}
          </ul>
        )}
      />
    </Datagrid>
  </List>
);

export default PlanetList;
