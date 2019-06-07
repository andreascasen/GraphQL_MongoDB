const itemResolvers = {
	Query: {
		item: async (parent, args, ctx, info) => {
			const { itemId = null } = args
			if (itemId === null || itemId.length === 0) {
				throw new Error('Missing arguments')
			}

			return args.data.items.find(singleItem => singleItem.id === itemId)
		}
	},
	Item: {
		user: async (parent, args, ctx, info) => {
			return ctx.data.users.find(singleUser => singleUser.id === parent.user)
		},
		list: async (parent, args, ctx, info) => {
			return ctx.data.lists.find(singleList => singleList.id === parent.list)
		}
	},
	Mutation: {
		newItem: async (parent, args, ctx, info) => {
			const { item = null } = args
			console.log('Input => ', item)
			return ctx.data.items[0]
		}
	}
}

export default itemResolvers
