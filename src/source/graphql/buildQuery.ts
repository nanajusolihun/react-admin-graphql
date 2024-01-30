/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntrospectionResult } from "ra-data-graphql";
import { querySchema } from "./querySchema";

interface GetListParams {
    pagination: { page: number, perPage: number };
    sort: { field: string, order: 'ASC' | 'DESC' };
    filter: any;
    meta?: any;
}

const buildQuery = (introspectionResults: IntrospectionResult, params: GetListParams) => {
  console.log("introspectionResults", introspectionResults);

  return (type: string, resource: string, params: GetListParams) : any => {
    console.log("RETURN", { params, resource, type });
    
    switch (type) {
      case "GET_LIST":
        return querySchema(resource);       
      default:
        return undefined;
      }
    }
  };

export default buildQuery;
