const users = [
	{
		id: '1',
		email: 'ab@test.com',
		password: 'admin',
		lists: ['101'],
		items: []
	},
	{
		id: '2',
		email: 'ace@test.com',
		password: 'admin',
		lists: [],
		items: []
	},
	{
		id: '3',
		email: 'andy@test.com',
		password: 'admin',
		lists: [],
		items: []
	}
]

const lists = [
	{
		id: '101',
		name: 'First List',
		owner: '1',
		users: ['1', '2'],
		items: [],
		created: '2019-05-14',
		updated: '2019-05-25'
	}
]

const items = []

const data = { users, lists, items }
export default data
