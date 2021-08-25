import { generalRequest} from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}/nodeCar/`;

const resolvers = {
    Query: {
        getCars: (_) =>
            generalRequest(`${URL}`+ 'getCars', 'GET'),
        idCarbyLicense: (_, { licensecar }) =>
            generalRequest(`${URL}`+ 'getIdCarbyLicense', 'POST', licensecar),
        carbyLicense: (_, { licensecar }) =>
            generalRequest(`${URL}`+ 'getCarbyLicense', 'POST', licensecar),
    },
    Mutation: {
        createCar: (_, { car }) =>
            generalRequest(`${URL}`+ 'createCar', 'POST', car),
        modifyCar: (_, { car }) =>
            generalRequest(`${URL}`+ 'modifyCar', 'PUT', car),
        deleteCar: (_, { licensecar }) =>
            generalRequest(`${URL}`+ 'deleteCar', 'DELETE', licensecar),   
    }
};

export default resolvers;
