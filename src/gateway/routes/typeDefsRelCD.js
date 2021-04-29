export const relCDTypeDef = `
  type RelationCDId {
    idRelationCarDate: Int!
  }
  
  type NodeDateIdRel {
    idNodeDate: Int!
  }

  type DayTravel {
    dayTravel: Int!
    monthTravel: Int!
    yearTravel: Int!
  }

  type RoutesLicense {
    date: DayTravel
    route: RouteTravel
  }

  type RouteTravel {
    idRoute: String
    startCity: String
    arrivalCity: String
    description: String
    latitudeStart: Float
    longitudeStart: Float
    latitudeEnd: Float
    longitudeEnd: Float
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

  input License {
    licenseCar: String!
  }
  `;

export const relCDQueries = `
    relationByDate(licensedate: DateCar!): RelationCDId
    idRelationCarDate(datecar: CarDay!): RelationCDId
    idDatebyIdRelation(id: Int!): NodeDateIdRel
    getDatesByLicense(license: License!): [RoutesLicense]
  `;

export const relCDMutations = `
    createRelationCarDay(datecar: CarDay!): RelationCDId
    deleteRelationCarDay(datecar: CarDay!): String
`;
