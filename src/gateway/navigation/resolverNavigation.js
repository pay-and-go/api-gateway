import { generalRequest } from '../../utilities';
import { url, port } from './serverNavigation';
import tollResolver from '../tolls/resolvers'

const URL = `http://${url}:${port}/`;

const resolvers = {
    Mutation: {
        findToll: async (_, { coor_lat, coor_lng }) => {
            console.log("llego hasta aqui 1");
            const tolls = await tollResolver.Query.allTolls();
            return await generalRequest(`${URL}findToll`, 'POST', {"coor_lat": coor_lat, "coor_lng": coor_lng, "tolls": tolls});
        }
    }
};

export default resolvers;
