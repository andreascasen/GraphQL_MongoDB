const itemTypeDef = `
	extend type Query {
		item(itemId: ID!): Item!
	}

	extend type Mutation {
		newItem(item: ItemInput): Item
		editItem(itemId: ID!, data: EditItemInput!): Item
		editItems(itemIds: [ID!]!, data: EditItemsInput!): [Item!]!
		deleteItems(itemIds: [ID!]!, listId: ID!): [Item!]!
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

	input EditItemInput {
		name: String
		qty: Int
		prio: Int
	}
	input EditItemsInput {
		qty: Int
		prio: Int
	}
`

export default itemTypeDef
