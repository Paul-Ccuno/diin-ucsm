import { get } from 'services/api/axios.service'

const URL = '/researchers'

export const getResearcher = async ({ id, token }) => {
	try {
		const res = await get({
			url: `${URL}/${id}`,
			token,
		})
		console.log('usuario encontrado', res)
		if (res.success) return res
		throw res.message
	} catch (error) {
		console.error(error)
		throw error
	}
}
