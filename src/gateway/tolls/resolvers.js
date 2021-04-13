import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/`;

const resolvers = {
	Query: {
		allTolls: (_) =>
			getRequest(URL, 'getAllTolls'),
		tollById: (_, { tollId }) =>
			generalRequest(`${URL}getToll/${tollId}`, 'GET'),

		allTollsInRoute: (_) =>
			getRequest(URL, 'getAllTollsInRoute'),
		tollsInARouteById: (_, { route }) =>
			generalRequest(`${URL}getTollInARoute/${route}`, 'GET'),
	},
	Mutation: {
		createToll: (_, { toll }) =>
			generalRequest(`${URL}addToll`, 'POST', toll),
		updateToll: (_, { tollId, toll }) =>
			generalRequest(`${URL}updateToll/${tollId}`, 'PUT', toll),
		deleteToll: (_, { tollId }) =>
			generalRequest(`${URL}deleteToll/${tollId}`, 'DELETE'),

		createTollsInARoute: (_, { tollsInRoute }) =>
			generalRequest(`${URL}addTollsInRoute`, 'POST', tollsInRoute),
		updateTollsInARoute: (_, { route, tollsInRoute }) =>
			generalRequest(`${URL}updateTollsInRoute/${route}`, 'PUT', tollsInRoute),
		deleteTollsInARoute: (_, { route }) =>
			generalRequest(`${URL}deleteTollsInRoute/${route}`, 'DELETE')
	}
};

export default resolvers;
