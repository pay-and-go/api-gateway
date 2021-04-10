import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	tollMutations,
	tollQueries,
	tollTypeDef
} from './gateway/tolls/typeDefs';

import {
	vehicleMutations,
	vehicleQueries,
	vehicleTypeDef
} from './gateway/vehicles/typeDefsVehicles';

import tollResolvers from './gateway/tolls/resolvers';
import vehicleResolvers from './gateway/vehicles/resolversVehicles';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		tollTypeDef,
		vehicleTypeDef
	],
	[
		tollQueries,
		vehicleQueries
	],
	[
		tollMutations,
		vehicleMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		tollResolvers,
		vehicleResolvers
	)
});
