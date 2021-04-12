import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/api/relationcardate/`;

const resolvers = {
    Query: {
        relationByDate: (_, {licensedate}) =>
            generalRequest(`${URL}`+ 'getRelationByDate', 'POST', licensedate),
        routeById: (_, {routeId}) =>
            generalRequest(`${URL}`+ 'getIdRelationCarDate', 'POST', routeId),
        routeIdById: (_, {id}) =>
            generalRequest(`${URL}`+ `getRouteIdById/${id}`, 'GET'),
    },
    Mutation: {
        createRelationCarDay: (_, { datecar }) =>
            generalRequest(`${URL}`+ 'createRelationCarDay', 'POST', datecar),
        deleteRelationCarDay: (_, { datecar }) =>
            generalRequest(`${URL}`+ 'deleteRelationCarDay', 'DELETE', datecar),
        
    }
};

export default resolvers;
