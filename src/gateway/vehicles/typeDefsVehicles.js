export const vehicleTypeDef = `
  type Vehicle {
    id: Int!
    iduser: Int!
    placa: String!
    marca: String!
    tipo: Int!
    color: String!
    createdAt: String!
    updatedAt: String!
  }
      
  input VehicleInput {
    iduser: Int!
    placa: String!
    marca: String!
    tipo: Int!
    color: String!
  }`;

export const vehicleQueries = `
      vehicleById(id: Int!): [Vehicle]
      vehicleByIdUser(iduser: Int!): [Vehicle]
      vehicleByLicense(placa: String!): [Vehicle]
  `;

export const vehicleMutations = `
    createVehicle(vehicle: VehicleInput!): String
    updateVehicle(id: Int!, vehicle: VehicleInput!): String
    deleteVehicle(id: Int!): String
`;
