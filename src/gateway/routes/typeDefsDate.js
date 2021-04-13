export const dateTypeDef = `
  type NodeDateId {
    idNodeDate: Int!
  }
  
  input DateInput {
    dayTravel: Int!
    monthTravel: Int!
    yearTravel: Int!
  }
  `;

export const dateMutations = `
    createDay(date: DateInput!): NodeDateId
`;