import buildGraphQLProvider, { BuildQueryFactory } from "ra-data-graphql";
import { useEffect, useState } from "react";
import { DataProvider, Admin, Resource } from "react-admin";
import buildQuery from "./source/graphql/buildQuery";
import { __schema as schema } from "./source/graphql/shema.json";
import StarshipsList from "./components/StarshipList";
import PlanetList from "./components/PlanetList";

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider>();
  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: {
        uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
      // @ts-expect-error schema
      introspection: { schema },
      buildQuery: buildQuery as BuildQueryFactory,
    })
      .then((dataProvider) => {
        setDataProvider(dataProvider);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin dataProvider={dataProvider} title="Star Wars Dashboard">
      <Resource name="Planets" list={PlanetList} />
      <Resource name="Starship" list={StarshipsList} />
    </Admin>
  );
};

export default App;
