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

import {
	navigationMutations,
	navigationTypeDef

} from './gateway/navigation/typeDefsNavigation';

import tollResolvers from './gateway/tolls/resolvers';
import vehicleResolvers from './gateway/vehicles/resolversVehicles';
import navigationResolvers from './gateway/navigation/resolverNavigation';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		tollTypeDef,
		vehicleTypeDef,
		navigationTypeDef
	],
	[
		tollQueries,
		vehicleQueries
	],
	[
		tollMutations,
		vehicleMutations,
		navigationMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		tollResolvers,
		vehicleResolvers,
		navigationResolvers
	)
});
