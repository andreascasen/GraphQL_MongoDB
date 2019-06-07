import {
	// isValidArray,
	isValidString
} from '../utils/validate'
// import List from '../Lists/List'

const userResolvers = {
	Query: {
		user: async (parent, args, context, info) => {
			const { userId = null } = args
			if (!isValidString(userId, 1)) {
				throw new Error('Invalid arguments')
			}

			return context.data.users.find(singleUser => singleUser.id === userId)
		},
		users: async (parent, args, context, info) => {
			return context.data.users
		}
	},
	User: {
		lists: async (parent, args, ctx, info) => {
			const userId = parent.id
			return ctx.data.lists.filter(singleList => {
				if (singleList.owner === userId) {
					return true
				}

				let userFound = singleList.users.find(singleUserId => singleUserId === userId)
				return userFound !== undefined
			})
		},
		items: async (parent, args, ctx, info) => {
			return ctx.data.items.filter(singleItem => singleItem.user === parent.id)
		}
	}
}

export default userResolvers
