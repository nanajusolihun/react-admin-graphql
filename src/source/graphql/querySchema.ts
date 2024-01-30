import { queriesPlanet, queriesStarship } from "./queries";

export const querySchema = (source: string) => {
  switch (source) {
    case "Planets":
      return queriesPlanet();
    case "Starship":
      return queriesStarship();
    default:
      return undefined;
  }
};
