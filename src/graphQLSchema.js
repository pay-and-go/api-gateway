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
	logMutations,
	logQueries,
	logTypeDef,
	userMutations,
	userQueries,
	userTypeDef
} from './gateway/users/typeDefsUser';

import {
	carMutations,
	carQueries,
	carTypeDef
} from './gateway/routes/typeDefsCars';

import {
	dateMutations,
	dateTypeDef
} from './gateway/routes/typeDefsDate';

import {
	routesMutations,
	routesQueries,
	routesTypeDef
} from './gateway/routes/typeDefsRoutes';

import {
	relCDMutations,
	relCDQueries,
	relCDTypeDef
} from './gateway/routes/typeDefsRelCD';

import {
	relDRMutations,
	relDRQueries,
	relDRTypeDef
} from './gateway/routes/typeDefsRelDR';

import {
	navigationMutations,
	navigationTypeDef
} from './gateway/navigation/typeDefsNavigation';

import {
	paymentMutations,
	paymentQueries,
	paymentTypeDef
} from './gateway/payment/typeDefsPayments';

import tollResolvers from './gateway/tolls/resolvers';
import vehicleResolvers from './gateway/vehicles/resolversVehicles';
import userResolvers from './gateway/users/resolversUsers';

import nodeCarResolvers from './gateway/routes/resolversCars';
import nodeDateResolvers from './gateway/routes/resolversDate';
import nodeRouteResolvers from './gateway/routes/resolversRoutes';
import relationCDResolvers from './gateway/routes/resolversRelCD';
import relationDRResolvers from './gateway/routes/resolversRelDR';

import navigationResolvers from './gateway/navigation/resolverNavigation';
import paymentResolvers from './gateway/payment/resolversPayment';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		tollTypeDef,
		vehicleTypeDef,
		carTypeDef,
		dateTypeDef,
		routesTypeDef,
		relCDTypeDef,
		relDRTypeDef,
		userTypeDef,
		logTypeDef,
		navigationTypeDef,
		paymentTypeDef
	],
	[
		tollQueries,
		vehicleQueries,
		carQueries,
		routesQueries,
		relCDQueries,
		relDRQueries,
		userQueries,
		logQueries,
		paymentQueries
	],
	[
		tollMutations,
		vehicleMutations,
		carMutations,
		dateMutations,
		routesMutations,
		relCDMutations,
		relDRMutations,
		userMutations,
		logMutations,
		navigationMutations,
		paymentMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		tollResolvers,
		vehicleResolvers,
		nodeCarResolvers,
		nodeDateResolvers,
		nodeRouteResolvers ,
		relationCDResolvers,
		relationDRResolvers,
		userResolvers,
		navigationResolvers,
		paymentResolvers
	)
});
