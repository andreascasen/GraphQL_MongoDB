export const rootTypes = `
	schema {
		query: Query,
		mutation: Mutation
	}

	type Query {
		hello: String!
	}

	type Mutation {
		root: String
	}
`
