export const routesTypeDef = `
  type Route {
    idRoute: String!
    startCity: String!
    arrivalCity: String!
    description: String!
    latitudeStart: Float!
    longitudeStart: Float!
    latitudeEnd: Float!
    longitudeEnd: Float!
  }
  
  type NodeRouteId {
    idNodeRoute: Int
  }
  
  input RouteInput {
    idRoute: String!
    startCity: String!
    arrivalCity: String!
    description: String!
    latitudeStart: Float!
    longitudeStart: Float!
    latitudeEnd: Float!
    longitudeEnd: Float!
  }
  
  input RouteIdInput {
    idroute: String!
  }`;

export const routesQueries = `
      allRoutes: [Route]
      routeById(routeid: RouteIdInput!): Route
      routeIdById(routeid: RouteIdInput!): NodeRouteId
      
  `;

export const routesMutations = `
    createRoute(route: RouteInput!): NodeRouteId
    modifyRoute(route: RouteInput!): String
    deleteRoute(routeid: RouteIdInput!): String
`;
