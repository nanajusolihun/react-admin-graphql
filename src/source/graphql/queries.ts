import gql from "graphql-tag";
import { GetListResult } from "react-admin";
export const queriesPlanet = () => {
  return {
    query: gql`
      query Planets($allPlanetsAfter2: String, $allPlanetsBefore2: String, $allPlanetsFirst2: Int, $allPlanetsLast2: Int) {
        allPlanets(after: $allPlanetsAfter2, before: $allPlanetsBefore2, first: $allPlanetsFirst2, last: $allPlanetsLast2) {
          totalCount
          planets {
            id
            name
            created
            population
            filmConnection {
              totalCount
              pageInfo {
                startCursor
                hasPreviousPage
                hasNextPage
                endCursor
              }
              films {
                id
                title
              }
            }
            climates
            terrains
          }
          pageInfo {
            startCursor
            hasPreviousPage
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
            }
            cursor
          }
        }
      }
    `,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseResponse: async (response: Record<string, any>) => {
      const datas = await response.data.allPlanets;
      console.log("dataaa", datas);
      const result: GetListResult = {
        data: datas.planets,
        pageInfo: datas.pageInfo,
        total: datas.totalCount,
        edges: datas.edges,
      };

      return result;
    },
  };
};

// Corrected StarshipQueries
export const queriesStarship = () => {
  return {
    query: gql`
      query Starship($after: String, $before: String, $first: Int, $last: Int) {
        allStarships(after: $after, before: $before, first: $first, last: $last) {
          edges {
            cursor
            node {
              id
              name
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          starships {
            id
            name
            model
            manufacturers
            passengers
            edited
            filmConnection {
              films {
                id
                title
              }
            }
          }
          totalCount
        }
      }
    `,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseResponse: async (response: Record<string, any>) => {
      console.log("parserespon starshp", response.data);
      const datas = await response.data.allStarships;
      const result: GetListResult = {
        data: datas.starships,
        pageInfo: datas.pageInfo,
        total: datas.totalCount,
        edges: datas.edges,
      };
      return result;
    },
  };
};
