import {
	isValidString
} from '../utils/validate'

import List from './List'

const listResolvers = {
	Query: {
		lists: async (parent, args, context, info) => {
			return context.data.lists
		}
	},
	List: {}
}

export default listResolvers
