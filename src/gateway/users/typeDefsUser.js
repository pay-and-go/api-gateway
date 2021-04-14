export const userTypeDef = `
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    cedula: Int!
    tipo: Int!
    mail: String!
    password: String!
  }
      
  input UserInput {
    first_name: String!
    last_name: String!
    cedula: Int!
    tipo: Int!
    mail: String!
    password: String!
  }`;

export const userQueries = `
      allUsers: [User]!
  `;

export const userMutations = `
    createUser(user: UserInput!): String
    updateUser(id: Int!, user: UserInput!): String
    deleteUser(id: Int!): String
`;
