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

export const updateResearcher = async ({ id, data, token }) => {
	try {
		const res = await put({
			url: `${URL}/${id}`,
			data,
			token,
		})
		if (res.success) return res.data
		throw res.message
	} catch (error) {
		console.log(error)
		throw error
	}
}
