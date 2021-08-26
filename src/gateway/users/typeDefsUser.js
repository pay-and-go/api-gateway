export const userTypeDef = `
  type User {
    id: Int
    first_name: String!
    last_name: String!
    cedula: Int!
    tipo: Int!
    mail: String!
    password: String!
  }
  
  type Token {
    token: String!
  }
  
  type Response {
    success: String!
  }
  
  type UserCreatedOk {
    response: String!
    email: String!
    username: String!
    token: String!
  }

  type UserGet {
    id: Int!
    first_name: String!
    last_name: String!
    cedula: Int!
    tipo: Int!
    mail: String!
  }
      
  input UserInput {
    first_name: String!
    last_name: String!
    username: String!
    cedula: Int!
    mail: String!
    password: String!
    password2: String!
  }
  
  input UserInputUpdate {
    first_name: String!
    last_name: String!
    username: String!
    cedula: Int!
    mail: String!
  }
  `;

export const userQueries = `
    getUser(username: String!, token: String!): UserGet
`;

export const userMutations = `

    createUser(user: UserInput!): UserCreatedOk
    login(username: String!, password: String!): Token
    
    updateUser(username: String!, user: UserInputUpdate!, token: String!): Response
    deleteUser(username: String!, token: String!): Response
`;

export const logTypeDef = `
  type Log {
    id_user: Int!
    timestamp: String!
    operation: String!
  }
      
  input LogInput {
    id_user: Int!
    operation: String!
  }`;

export const logQueries = `
      allLogs: [Log]!
  `;

export const logMutations = `
    createLog(log: LogInput!): Log
`;