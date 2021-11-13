export const maxDateAdult = () => {
	const currentDate = new Date()
	const eighteenYears = 1000 * 60 * 60 * 24 * 360 * 18
	return new Date(currentDate - eighteenYears)
}
