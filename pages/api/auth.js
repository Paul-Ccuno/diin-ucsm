import cookie from 'cookie'

export default function handler(req, res) {
	const { method } = req

	switch (method) {
		case 'POST':
			post(req, res)
			break
		case 'DELETE':
			del(req, res)
			break
		default:
			res.setHeader('Allow', ['POST', 'DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
			break
	}
}

const post = (req, res) => {
	const { body } = req

	res.setHeader(
		'Set-Cookie',
		cookie.serialize('token', body.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			maxAge: 60 * 60 * 24,
			sameSite: 'strict',
			path: '/',
		})
	)
	res.statusCode = 200
	res.json({ success: true })
}

const del = (req, res) => {
	const removeCookieOptions = {
		maxAge: -1,
		path: '/',
	}
	res.setHeader('Set-Cookie', [
		cookie.serialize('token', '', removeCookieOptions),
		cookie.serialize('user', '', removeCookieOptions),
	])
	res.statusCode = 200
	res.json({ success: true })
}
