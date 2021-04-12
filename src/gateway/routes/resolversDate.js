import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}/api/nodeday/`;

const resolvers = {
    Mutation: {
        createDay: (_, { date }) =>
            generalRequest(`${URL}`+ 'createDay', 'POST', date)    }
};

export default resolvers;
