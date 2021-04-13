export const navigationTypeDef = `
  type TollPosition {
      coor_lat: Float!
      coor_lng: Float!
      name: String!
      tollId: Int!
      distance: Float!
  }`;

export const navigationMutations = `
    findToll(coor_lat: Float!, coor_lng: Float!): TollPosition
`;
