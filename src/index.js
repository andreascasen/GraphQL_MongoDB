import { ApolloServer, makeExecutableSchema } from 'apollo-server'

import DB from './utils/db.util'
import { DB_URI } from './env'

import { userTypes, userResolvers } from './Users'
import { itemTypes } from './Items'
import { listTypes } from './Lists'
import { rootTypes } from './root.typedefs'

const dbInstance = new DB(DB_URI)

let schema = makeExecutableSchema({
	typeDefs: [
		userTypes,
		itemTypes,
		listTypes,
		rootTypes
	],
	resolvers: {
		...userResolvers
	},
	context: async ({ req }) => {
		const token = req.headers.authorization || ''
		const user = getUser(token)
		return {
			user,
			db: dbInstance
		}
	}
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
	console.log(`Server readt at ${ url }`)
})

const getUser = token => token
