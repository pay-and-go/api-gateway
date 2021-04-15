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
    mail: String!
    password: String!
  }`;

export const userQueries = `
      allUsers: [User]!
  `;

export const userMutations = `
    createUser(user: UserInput!): User
    updateUser(id: Int!, user: UserInput!): User
    deleteUser(id: Int!): String
`;
