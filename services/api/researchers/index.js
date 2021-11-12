import { get } from 'services/api/axios.service'

const URL = '/researchers'

export const getResearcher = async ({ id, token }) => {
	try {
		const res = await get({
			url: `${URL}/${id}`,
			token,
		})

		if (res.success) return res.data
		throw res.message
	} catch (error) {
		console.error(error)
		throw error
	}
}
