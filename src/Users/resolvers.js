import { isValidString, isValidArray } from '../utils/validate'
import User from './User'

const userResolvers = {
	user: async (parent, args, context, info) => {
		const { userId = '', userEmail = '' } = args
		if (!isValidString(userId) && !isValidString(userEmail)) {
			throw new Error('Invalid arguments')
		}

		if (isValidString(userId)) {
			return User.findById(userId)
		}

		return User.findByEmail(userEmail)
	},
	users: async (parent, args, context, info) => {
		const { userIds = [], userEmails = [] } = args
		if (!isValidArray(userIds, 1) && !isValidArray(userEmails, 1)) {
			throw new Error('Invalid arguments')
		}

		if (userIds.length > 0) {
			return User.filterById(userIds)
		}

		return User.filterByEmail(userEmails)
	}
}

export default userResolvers
