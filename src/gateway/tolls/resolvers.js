import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/`;

const resolvers = {
	Query: {
		allTolls: (_) =>
			getRequest(URL, 'getAllTolls'),
		tollById: (_, { tollId }) =>
			generalRequest(`${URL}getToll/${tollId}`, 'GET'),
	},
	Mutation: {
		createToll: (_, { toll }) =>
			generalRequest(`${URL}addToll`, 'POST', toll),
		updateToll: (_, { tollId, toll }) =>
			generalRequest(`${URL}updateToll/${tollId}`, 'PUT', toll),
		deleteToll: (_, { tollId }) =>
			generalRequest(`${URL}deleteToll/${tollId}`, 'DELETE')
	}
};

export default resolvers;
