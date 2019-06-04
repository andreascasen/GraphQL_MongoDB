export const rootTypes = `
	schema {
		query: Query
	}

	type Query {
		hello: String!
	}

	type Mutation {
		root: String
	}
`
