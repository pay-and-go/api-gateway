import { generalRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}/nodeday/`;

const resolvers = {
    Mutation: {
        createDay: (_, { date }) =>
            generalRequest(`${URL}`+ 'createDay', 'POST', date)    }
};

export default resolvers;
