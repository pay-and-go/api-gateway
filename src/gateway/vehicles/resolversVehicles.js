import { generalRequest } from '../../utilities';
import { url, port } from './serverVehicles';

const URL = `http://${url}:${port}/vehiculo`;

const resolvers = {
    Query: {
        vehicleById: (_, { id }) =>
            generalRequest(`${URL}`, 'GET',{"id": id}),
        vehicleByIdUser: (_, { iduser }) =>
            generalRequest(`${URL}`, 'GET',{"iduser": iduser}),
        vehicleByLicense: (_, { placa }) =>
            generalRequest(`${URL}`, 'GET',{"placa": placa}),        
    },
    Mutation: {
        createVehicle: (_, { vehicle }) =>
            generalRequest(`${URL}`, 'POST', vehicle),
        updateVehicle: (_, { id, vehicle }) =>
            generalRequest(`${URL}/${id}`, 'PUT', vehicle),
        deleteVehicle: (_, { id }) =>
            generalRequest(`${URL}`, 'DELETE', {"id": id})
    }
};

export default resolvers;
