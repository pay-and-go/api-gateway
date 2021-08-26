import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './serverUsers';

const URL = `http://${url}`;

const resolvers = {
    Query: {
        allLogs: (_) =>
            getRequest(URL, 'log'),
        getUser: (_, { username, token }) =>
            generalRequest(`${URL}/detail/${username}`, 'GET', {},{"Authorization": `Token ${token}`}),
    },
    Mutation: {
        createUser: (_, { user }) =>
            generalRequest(`${URL}/register/`, 'POST', user),
        login: (_, { username, password }) =>
            generalRequest(`${URL}/login/`, 'POST', {"username": username,"password": password}),

        updateUser: (_, { username, user, token }) =>
            generalRequest(`${URL}/update/${username}`, 'PUT', user, {"Authorization": `Token ${token}`}),
        deleteUser: (_, { username, token }) =>
            generalRequest(`${URL}/delete/${username}`, 'DELETE', {},{"Authorization": `Token ${token}`}),
        createLog: (_, { log }) =>
            generalRequest(`${URL}/log/`, 'POST', log),
    }
};

export default resolvers;