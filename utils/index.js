import { isDate, parse } from 'date-fns'

export const maxDateAdult = () => {
	const currentDate = new Date()
	const eighteenYears = 1000 * 60 * 60 * 24 * 360 * 18
	return new Date(currentDate - eighteenYears)
}

//
export const dateReadOnly = (e) => {
	if (
		e.key === 'Backspace' ||
		e.key === 'Delete' ||
		e.key.match(/^(\w|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\])$/)
	)
		e.preventDefault()
}

// Solo funciona para la función transform de la librería yup
export const parseDateString = (value, originalValue) => {
	const parseDate = isDate(originalValue)
		? originalValue
		: parse(originalValue, 'dd/MM/yyyy', new Date())
	return parseDate
}
