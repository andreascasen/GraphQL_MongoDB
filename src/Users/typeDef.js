const userTypeDef = `
	extend type Query {
		user(userId: ID, email: String): User!
		users(listId: ID): [User!]!
	}

	type User {
		id: ID!
		email: String!
		lists: [List!]!
		items: [Item!]!
	}

	input UserSearchInput {
		id: ID!
	}
`

export default userTypeDef
