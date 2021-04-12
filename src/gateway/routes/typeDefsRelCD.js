export const relCDTypeDef = `
  type RelationCDId {
    idRelationCarDate: Int!
  }
  
  type NodeDateIdRel {
    idNodeDate: Int!
  }

  input CarDay {
    idCar: Int!
    idDay: Int!
  }
  
  input DateCar {
    licenseCar: String!
    dayTravel: Int!
    monthTravel: Int!
    yearTravel: Int!
  }
  `;

export const relCDQueries = `
    relationByDate(licensedate: DateCar!): RelationCDId
    idRelationCarDate(datecar: CarDay!): RelationCDId
    idDatebyIdRelation(id: Int!): NodeDateIdRel
  `;

export const relCDMutations = `
    createRelationCarDay(datecar: CarDay!): RelationCDId
    deleteRelationCarDay(datecar: CarDay!): String
`;
