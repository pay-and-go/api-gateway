export const relDRTypeDef = `
  type RelationDRId {
    idRelationDateRoute: Int!
  }
    
  input DayRoute {
    idRoute: Int!
    idDay: Int!
  }
  `;

export const relDRQueries = `
    searchRelationDayRoute(dateroute: DayRoute!): RelationDRId
  `;

export const relDRMutations = `
    createRelationDayRoute(dateroute: DayRoute!): RelationDRId
    deleteRelationDayRoute(dateroute: DayRoute!): String
  `;
