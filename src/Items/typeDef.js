const itemTypeDef = `
	extend type Query {
		item(itemId: ID!): Item!
	}

	extend type Mutation {
		newItem(item: ItemInput): Item
	}

	type Item {
		id: ID!
		name: String!
		qty: Int!
		prio: Int!
		added: String!
		user: User!
		list: List!
	}

	input ItemInput {
		name: String!
		qty: Int!
		prio: Int!
		list: ID!
	}
`

export default itemTypeDef
