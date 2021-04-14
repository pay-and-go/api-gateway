import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverUsers';

const URL = `http://${url}:${port}`;

const resolvers = {
    Query: {
        allUsers: (_) =>
			getRequest(URL, 'user'),
        /*vehicleById: (_, { id }) =>
            generalRequest(`${URL}`, 'GET',{"id": id}),*/
    },
    Mutation: {
        createUser: (_, { user }) =>
            generalRequest(`${URL}`, 'POST', user),
        updateUser: (_, { id, user }) =>
            generalRequest(`${URL}/${id}`, 'PUT', user),
        deleteUser: (_, { id }) =>
            generalRequest(`${URL}`, 'DELETE', {"id": id})
    }
};

export default resolvers;
