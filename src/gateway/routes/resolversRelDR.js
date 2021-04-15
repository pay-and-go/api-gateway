import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/api/relationdateroute/`;

const resolvers = {
    Query: {
        searchRelationDayRoute: (_, { dateroute }) =>
            generalRequest(`${URL}`+ 'getRelationByDate', 'POST', dateroute),
    },
    Mutation: {
        createRelationDayRoute: (_, { dateroute }) =>
            generalRequest(`${URL}`+ 'createRelationCarDay', 'POST', dateroute),
        deleteRelationDayRoute: (_, { dateroute }) =>
            generalRequest(`${URL}`+ 'deleteRelationCarDay', 'DELETE', dateroute),
        
    }
};

export default resolvers;
