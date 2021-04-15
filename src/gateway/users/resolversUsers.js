import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverUsers';

const URL = `http://${url}:${port}`;

const resolvers = {
    Query: {
        allUsers: (_) =>
			getRequest(URL, 'user')
    },
    Mutation: {
        createUser: (_, { user }) =>
            generalRequest(`${URL}/user/`, 'POST', user),
        updateUser: (_, { id, user }) =>
            generalRequest(`${URL}/user/${id}`, 'PUT', user),
        deleteUser: (_, { id }) =>
            generalRequest(`${URL}/user/${id}`, 'DELETE')
    }
};

export default resolvers;
