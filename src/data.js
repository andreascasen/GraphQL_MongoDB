const users = [
	{
		id: '1',
		email: 'ab@test.com',
		password: 'admin',
		lists: ['101'],
		items: ['1024']
	},
	{
		id: '2',
		email: 'ace@test.com',
		password: 'admin',
		lists: ['101'],
		items: ['1055']
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
		items: ['1024', '1055'],
		created: '2019-05-14',
		updated: '2019-05-25'
	}
]

const items = [
	{
		id: '1024',
		name: 'Tomatoes',
		qty: 5,
		prio: 1,
		added: '2019-05-15',
		user: '1',
		list: '101'
	},
	{
		id: '1055',
		name: 'Milk',
		qty: 1,
		prio: 2,
		added: '2019-05-16',
		user: '2',
		list: '101'
	}
]

const data = { users, lists, items }
export default data
