import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}/relationcardate/`;
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const resolvers = {
    Query: {
        relationByDate: (_, { licensedate }) =>
            generalRequest(`${URL}`+ 'getRelationByDate', 'POST', licensedate),
        idRelationCarDate: (_, { datecar }) =>
            generalRequest(`${URL}`+ 'getIdRelationCarDate', 'POST', datecar),
        idDatebyIdRelation: (_, { id }) =>
            generalRequest(`${URL}`+ `getRouteIdById/${id}`, 'GET'),
        getDatesByLicense: (_, { license }) =>
            generalRequest(`${URL}`+ 'getDatesByLicense', 'POST', license),
    },
    Mutation: {
        createRelationCarDay: (_, { datecar }) =>
            generalRequest(`${URL}`+ 'createRelationCarDay', 'POST', datecar),
        deleteRelationCarDay: (_, { datecar }) =>
            generalRequest(`${URL}`+ 'deleteRelationCarDay', 'DELETE', datecar),
        
    }
};

export default resolvers;
