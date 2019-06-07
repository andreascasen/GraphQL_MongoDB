import { ApolloServer, makeExecutableSchema } from 'apollo-server'

// import DB from './utils/db.util'
// import { DB_URI } from './env'

import { userTypes, userResolvers, User } from './Users/'
import { listTypes, listResolvers, List } from './Lists'
import { itemTypes, itemResolvers } from './Items'
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
			...listResolvers.Query,
			...itemResolvers.Query
		},
		Mutation: {
			...itemResolvers.Mutation
		},
		User: userResolvers.User,
		List: listResolvers.List,
		Item: itemResolvers.Item
	}
})

const server = new ApolloServer({
	schema,
	context: async ({ req }) => ({
		token: req.headers.authorization,
		data: data,
		user: User,
		list: List
	})
})

server.listen().then(({ url }) => {
	console.log(`Server readt at ${ url }`)
})
