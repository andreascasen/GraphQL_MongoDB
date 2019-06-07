const listResolvers = {
	Query: {
		lists: async (parent, args, context, info) => {
			return context.data.lists
		}
	},
	List: {
		owner: async (parent, args, ctx, info) => {
			let ownerId = parent.owner
			let ownerFound = ctx.data.users.find(singleUser => singleUser.id === ownerId)
			if (ownerFound === undefined) {
				throw new Error('List owner does not exist')
			}

			return ownerFound
		},
		users: async (parent, args, ctx, info) => {
			let users = ctx.data.users.filter(singleUser => {
				if (singleUser.id === parent.owner) {
					return true
				}
				let foundUser = parent.users.findIndex(listUser => listUser === singleUser.id)
				return foundUser !== -1
			})
			return users
		},
		items: async (parent, args, ctx, info) => {
			let listItems = ctx.data.items.filter(singleItem => singleItem.list === parent.id)
			return listItems
		}
	}
}

export default listResolvers
