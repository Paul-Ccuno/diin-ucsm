import axios from 'axios'
import { setCookies } from 'cookies-next'
import { post } from 'services/api/axios.service'

const URL = '/auth'

export const signin = async (data) => {
	try {
		const res = await post({
			url: `${URL}/signin`,
			data,
		})
		console.log(res)
		if (res.success) {
			const { user, token } = res.data
			setCookies('user', user)
			const resToken = await axios.post('/api/auth', { token })
			return res
		}
		throw res.message
	} catch (error) {
		throw error
	}
}

export const signup = async (data) => {
	try {
		const res = await post({
			url: `${URL}/signup`,
			data,
		})
		if (res.success) return res
		else throw new Error(res)
	} catch (error) {
		throw new Error(error)
	}
}
