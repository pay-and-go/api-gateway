export const paymentTypeDef = `
  type Payment {
      idPago: Int!
      fechaPago: String!
      horaPago: String!
      placa: String!
      peaje: Int!
      valor: Float!
      created_at: String!
      updated_at: String!
  }
  input PaymentInput {
    fechaPago: String!
    horaPago: String!
    placa: String!
    peaje: Int!
    valor: Float!
    created_at: String!
    updated_at: String!
  }`;

export const paymentQueries = `
      allPayments: [Payment]!
      paymentById(idPago: Int!): Payment
  `;

export const paymentMutations = `
    createPayment(payment: PaymentInput!): Payment
    updatePayment(idPago: Int!, payment: PaymentInput!): Payment
`;
