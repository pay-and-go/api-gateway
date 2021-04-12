export const carTypeDef = `
  type Car {
    idOwner: String!
    nameOwner: String!
    licenseCar: String!
  }
  
  type NodeCarId {
    idNodeCar: Int!
  }
  
  input CarInput {
    idOwner: String!
    nameOwner: String!
    licenseCar: String!
  }
  
  input LicensecarInput {
    licenseCar: String!
  }
  `;

export const carQueries = `
    getCars: [Car]
    idCarbyLicense(licensecar: LicensecarInput!): NodeCarId
    carbyLicense(licensecar: LicensecarInput!): Car
  `;

export const carMutations = `
    createCar(car: CarInput!): NodeCarId
    modifyCar(car: CarInput!): String
    deleteCar(licensecar: LicensecarInput!): String
`;
