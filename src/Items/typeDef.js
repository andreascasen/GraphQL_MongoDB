const itemTypeDef = `
	type Item {
		id: ID!
		name: String!
		qty: Int!
		prio: Int!
		added: String!
		user: User!
		list: List!
	}
`

export default itemTypeDef
