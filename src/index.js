import { ApolloServer, makeExecutableSchema } from 'apollo-server'

// import DB from './utils/db.util'
// import { DB_URI } from './env'

import { userTypes, userResolvers } from './Users/'
import { listTypes, listResolvers } from './Lists'
import { itemTypes } from './Items'
import { rootTypes } from './root.typedefs'

import data from './data'

// const dbInstance = new DB(DB_URI)

let schema = makeExecutableSchema({
	typeDefs: [
		userTypes,
		itemTypes,
		listTypes,
		rootTypes
	],
	resolvers: {
		Query: {
			...userResolvers.Query,
			...listResolvers.Query
		},
		...userResolvers.User,
		...listResolvers.List
	}
})

const server = new ApolloServer({
	schema,
	context: async ({ req }) => ({
		token: req.headers.authorization,
		data: data
	})
})

server.listen().then(({ url }) => {
	console.log(`Server readt at ${ url }`)
})
