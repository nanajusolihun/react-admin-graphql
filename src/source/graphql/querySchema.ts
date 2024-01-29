// import { queriesPlanet, queriesStarship } from "./queries";
import { queries, StarshipQueries } from "./querydata";

export const querySchema = (source: string) => {
  switch (source) {
    case "Planets":
      return queries();
    case "Starship":
      return StarshipQueries();
    default:
      return undefined;
  }
};
