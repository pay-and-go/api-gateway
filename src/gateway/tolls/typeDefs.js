export const tollTypeDef = `
  type Toll {
      administrator: String
      coor_lat: Float!
      coor_lng: Float!
      crane_phone_number: String
      name: String!
      price: Int!
      sector: String
      territory: String
      tollId: Int!
      toll_phone_number: String
  }
  type CreateResponse {
      InsertedID: String
  }
  type UpdateResponse {
      MatchedCount: Int
      ModifiedCount: Int
      UpsertedCount: Int
      UpsertedID: String
  }
  type DeleteResponse {
      DeletedCount: Int
  }
  type GetATollResponse {
      message: String
  }
    
  input TollInput {
      administrator: String
      coor_lat: Float!
      coor_lng: Float!
      crane_phone_number: String
      name: String!
      price: Int!
      sector: String
      territory: String
      tollId: Int!
      toll_phone_number: String
  }`;

export const tollQueries = `
      allTolls: [Toll]!
      tollById(tollId: Int!): Toll
  `;

export const tollMutations = `
    createToll(toll: TollInput!): CreateResponse
    updateToll(tollId: Int!, toll: TollInput!): UpdateResponse
    deleteToll(tollId: Int!): DeleteResponse
`;
