const listTypeDef = `
	extend type Query {
		list: List!
		lists: [List!]!
	}

	type List {
		id: ID!
		name: String!
		owner: User!
		users: [User!]!
		items: [Item!]!
		created: String!
		updated: String!
	}
`

export default listTypeDef
