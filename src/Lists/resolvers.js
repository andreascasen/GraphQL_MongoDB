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
			let userIds = parent.users
			let ownerId = parent.owner
			let users = ctx.data.users.filter(singleUser => {
				if (singleUser.id === ownerId) {
					return true
				}

				userIds.forEach(singleUserId => {
					if (singleUserId === singleUser.id) {
						return true
					}
				})

				return false
			})
			return users
		}
	}
}

export default listResolvers
