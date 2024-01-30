// PlanetList.tsx
import * as React from "react";
import { 
  List, 
  Datagrid, 
  FunctionField, 
  TextField, 
  SearchInput, 
  SelectInput, 
  ArrayField, 
  Pagination, 
  DateField
} from "react-admin";

interface Starships {
  id: string;
  name: string;
  filmConnection: {
    films: {
      id: string;
      title: string;
    }[];
  };
}

const starshipFilters = [
  <SearchInput source="q" alwaysOn resettable={false} />, 
  <TextField source="name" label="Name" sort={{ field: "name", order: "ASC" }} />, 
  <SelectInput source="name" />
];

const StarshipPagination = () => <Pagination rowsPerPageOptions={[5, 10, 15, 25]} />;

const StarshipsList: React.FC = (props) => (
  <List {...props} filters={starshipFilters} sort={{ field: "name", order: "ASC" }} pagination={<StarshipPagination />}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Starships Name" sortByOrder="DESC" />
      <TextField source="model" />
      <TextField source="manufacturers" />
      <TextField source="passengers" />
      <DateField source="edited" />
      <FunctionField
        label="Film Connection"
        render={(record: Starships) => (
          <ul>
            {record.filmConnection.films.map((film) => (
              <li key={film.id}>{film.title}</li>
            ))}
          </ul>
        )}
      />
      <ArrayField />
    </Datagrid>
  </List>
);

export default StarshipsList;
