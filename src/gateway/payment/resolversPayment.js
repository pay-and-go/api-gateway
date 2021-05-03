import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverPayments';

const URL = `http://${url}:${port}/ms_pago/`;

const resolvers = {
	Query: {
	allPayments: (_) =>
            generalRequest(`${URL}getPayments`, 'GET'),
        paymentById: (_, { idPago }) =>
		generalRequest(`${URL}paymentById/${idPago}`, 'GET'),
	paymentsByPlaca: (_, { placa }) =>
		generalRequest(`${URL}paymentsByPlaca/${placa}`, 'GET'),
	},
	Mutation: {
		createPayment: (_, { payment }) =>
			generalRequest(`${URL}createPayment`, 'POST', payment),
		updatePayment: (_, { idPago, payment }) =>
			generalRequest(`${URL}updatePayment/${idPago}`, 'PUT', payment),
	}
};

export default resolvers;
