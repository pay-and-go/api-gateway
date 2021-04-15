export const routesTypeDef = `
  type Route {
    idRoute: String
    startCity: String
    arrivalCity: String
    description: String
    latitudeStart: Float
    longitudeStart: Float
    latitudeEnd: Float
    longitudeEnd: Float
  }
  
  type NodeRouteId {
    idNodeRoute: Int
  }
  
  input RouteInput {
    idRoute: String!
    startCity: String
    arrivalCity: String
    description: String
    latitudeStart: Float
    longitudeStart: Float
    latitudeEnd: Float
    longitudeEnd: Float
  }
  
  input RouteIdInput {
    idRoute: String!
  }`;

export const routesQueries = `
      allRoutes: [Route]
      routeIdById(routeId: RouteIdInput!): NodeRouteId
      routeById(routeId: RouteIdInput!): Route    
  `;

export const routesMutations = `
    createRoute(route: RouteInput!): NodeRouteId
    modifyRoute(route: RouteInput!): String
    deleteRoute(routeId: RouteIdInput!): String 
`;
