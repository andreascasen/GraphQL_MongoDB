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
			let currentDate = new Date()
			item.addded = currentDate.toISOString().split(':')[0]
			item.user = '1'
			item.id = '1082'
			console.log('Input => ', item)
			ctx.data.items.push(item)
			return item
		},
		editItem: async (parent, args, ctx, info) => {
			const { itemId, data } = args
			let targetItemIndex = ctx.data.items.findIndex(singleItem => singleItem.id === itemId)
			if (targetItemIndex === -1) {
				throw new Error('Item doesn\'t exist')
			}
			let targetItem = { ...ctx.data.items[targetItemIndex] }

			const { name = null, qty = null, prio = null } = data
			if (name === null && qty === null && prio === null) {
				throw new Error('Invalid update data')
			}

			if (name !== null) {
				targetItem.name = name
			}
			if (qty !== null) {
				targetItem.qty = qty
			}
			if (prio !== null) {
				targetItem.prio = prio
			}

			ctx.data.items[targetItemIndex] = targetItem
			return targetItem
		},
		editItems: async (parent, args, ctx, info) => {
			const { itemIds, data } = args
			return ctx.data.items
		},
		deleteItems: async (parent, args, ctx, info) => {
			const { itemIds, listId } = args
			let listItems = ctx.data.items.filter(singleItem => singleItem.list === listId)
			let remainingItems = listItems.filter(singleItem => {
				let matches = false
				itemIds.forEach(singleId => {
					if (singleId === singleItem.id) {
						matches = true
					}
				})
				return !matches
			})
			ctx.data.items = remainingItems
			return remainingItems
		}
	}
}

export default itemResolvers
