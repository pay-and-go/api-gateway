import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverPayments';

const URL = `http://${url}:${port}/ms_pago/`;

const resolvers = {
	Query: {
		allPayments: (_) =>
            generalRequest(`${URL}getPayments`, 'GET'),
        paymentById: (_, { paymentId }) =>
			generalRequest(`${URL}paymentById/${paymentId}`, 'GET'),
	},
	Mutation: {
		createPayment: (_, { payment }) =>
			generalRequest(`${URL}createPayment`, 'POST', payment),
		updateToll: (_, { paymentId, payment }) =>
			generalRequest(`${URL}updatePayment/${paymentId}`, 'PUT', payment),
	}
};

export default resolvers;
