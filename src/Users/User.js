import { users } from './data'

const User = {
	findById: userId => {
		let result = users.find(user => user.id === userId)
		return stripPassword(result)
	},
	findByEmail: userEmail => {
		let result = users.find(user => user.email === userEmail)
		return stripPassword(result)
	},
	getAll: () => users,
	filterById: userIds => {
		return users.reduce((results, singleUser) => {
			if (userIds.find(singleUser.id !== undefined)) {
				return stripPassword(singleUser)
			}
		}, [])
	},
	filterByEmail: userEmails => {
		return users.reduce((results, singleUser) => {
			if (userEmails.find(singleUser.email !== undefined)) {
				return stripPassword(singleUser)
			}
		}, [])
	}
}

const stripPassword = user => {
	if (user !== undefined) {
		delete user.password
	}
	return user
}

export default User
