export const paymentTypeDef = `
  type Payment {
      idPago: Int!
      fechaPago: Date!
      horaPago: Time!
      placa: String!
      peaje: Int!
      valor: Double!
      created_at: String!
      updated_at: String!
  }
  input PaymentInput {
    fechaPago: Date!
    horaPago: Time!
    placa: String!
    peaje: Int!
    valor: Double!
    created_at: String!
    updated_at: String!
  }`;

export const paymentQueries = `
      allPayments: [Payment]!
      paymentById(idPago: Int!): Payment
  `;

export const paymentMutations = `
    createPayment(payment: paymentInput!): String
    updateVehicle(idPago: Int!, payment: paymentInput!): Payment
`;
