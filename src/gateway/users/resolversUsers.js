import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverUsers';

const URL = `http://${url}`;

const resolvers = {
    Query: {
        allUsers: (_) =>
			getRequest(URL, 'user'),
        allLogs: (_) =>
			getRequest(URL, 'log')
    },
    Mutation: {
        createUser: (_, { user }) =>
            generalRequest(`${URL}/user/`, 'POST', user),
        updateUser: (_, { id, user }) =>
            generalRequest(`${URL}/user/${id}`, 'PUT', user),
        deleteUser: (_, { id }) =>
            generalRequest(`${URL}/user/${id}`, 'DELETE'),
        createLog: (_, { log }) =>
            generalRequest(`${URL}/log/`, 'POST', log),
    }
};

export default resolvers;
