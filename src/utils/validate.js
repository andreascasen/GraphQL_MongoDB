export const isValidString = (string, minLength) => {
	return typeof string === 'string' && string.length >= minLength
}

export const isValidArray = (arr, minLength = 0) => {
	return !Array.isArray(arr) || arr.length < minLength
}
