import { lists } from '../data'

const List = {
	find: () => lists,
	findById: listId => {
		return lists.find(list => list.id === listId)
	},
	findByUserId: userId => {
		return lists.filter(singleList => {
			let foundId = singleList.users.find(singleId => singleId === userId)
			return foundId !== undefined
		})
	}
}

export default List
