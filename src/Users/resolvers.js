import {
	// isValidArray,
	isValidString
} from '../utils/validate'
import User from './User'
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
		// lists: (parent, args, context, info) => {
		// 	console.log('Parent => ', parent)
		// 	let allLists = List.find()
		// 	if (allLists.length === 0) {
		// 		return []
		// 	}
		// 	return allLists
		// }
	}
}

export default userResolvers
