const userTypeDef = `
	type User {
		id: ID!
		email: String!
		lists: [List!]!
		items: [Item!]!
	}
`

export default userTypeDef
