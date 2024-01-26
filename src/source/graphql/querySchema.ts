// import { queriesPlanet, queriesStarship } from "./queries";
import { queries, StarshipQueries } from "./querydata";

export const querySchema = (source: string) => {
  switch (source) {
    case "Planet":
      return queries();
    case "Starship":
      return StarshipQueries();
    default:
      return undefined;
  }
};
