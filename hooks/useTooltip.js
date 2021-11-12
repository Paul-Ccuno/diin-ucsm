export const useTooltip =
	(element) =>
	({ target }) => {
		if (element?.clientHeight < element?.scrollHeight) {
			target.title = target.innerText
			return
		}
		target.title = ''
	}
