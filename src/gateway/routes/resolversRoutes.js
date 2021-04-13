import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/api/noderoute/`;

const resolvers = {
    Query: {
        allRoutes: (_) =>
            generalRequest(`${URL}`+ 'getRoutes', 'GET'),
        routeById: (_, { routeId }) =>
            generalRequest(`${URL}`+ 'getRouteById', 'POST', routeId),
        routeIdById: (_, { routeId }) =>
            generalRequest(`${URL}`+ 'getRouteIdById', 'POST', routeId),
    },
    Mutation: {
        createRoute: (_, { route }) =>
            generalRequest(`${URL}`+ 'createRoute', 'POST', route),
        modifyRoute: (_, { route }) =>
            generalRequest(`${URL}`+ 'modifyRoute', 'PUT', route),
        deleteRoute: (_, { routeId }) =>
            generalRequest(`${URL}`+ 'deleteRoute', 'DELETE', routeId),
        
    }
};

export default resolvers;
