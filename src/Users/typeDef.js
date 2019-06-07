const userTypeDef = `
	extend type Query {
		user(userId: ID, email: String): User!
		users(listId: ID!): [User!]!
	}

	extend type Mutation {
		register(data: NewUserInput!): String!
		login(data: UserLoginInput!): LoginResponse!
		deleteAccount(userId: ID!): Boolean!
	}

	type User {
		id: ID!
		email: String!
		lists: [List!]!
		items: [Item!]!
	}

	input NewUserInput {
		email: String!
		password: String!
	}

	input UserLoginInput {
		email: String!
		password: String!
	}
	type LoginResponse {
		token: String!,
		userId: ID!
		email: String!
	}
`

export default userTypeDef
