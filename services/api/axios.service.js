import axios from 'axios'
import { API_BASE_URL, AUTH_SECRET } from 'env'

async function send({ method, url, data, token }) {
	try {
		const res = await axios({
			headers: {
				'Content-Type': 'application/json',
				...(token ? { Authorization: `${AUTH_SECRET} ${token}` } : {}),
			},
			method,
			baseURL: API_BASE_URL,
			url,
			data,
		})

		return new Promise((resolve) => resolve(res.data))
	} catch (error) {
		return error.response.data
	}
}

function post({ url, data, token = null }) {
	return send({ method: 'POST', url, data, token })
}

function put({ url, data, token = null }) {
	return send({ method: 'PUT', url, data, token })
}

function del({ url, data, token = null }) {
	return send({ method: 'DELETE', url, data, token })
}

function get({ url, data = {}, token = null }) {
	const params = Object.keys(data)
		.map((key) => `${key}=${data[key]}`)
		.join('&')

	return send({
		method: 'GET',
		url: `${url}${params ? '?' + params : ''}`,
		token,
	})
}

export { get, post, put, del }
