import cookie from 'cookie'

export default function post(req, res) {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('token', req.body.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			maxAge: 60 * 60,
			sameSite: 'strict',
			path: '/',
		})
	)
	res.statusCode = 200
	res.json({ success: true })
}

export function del(req, res) {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('token', '', {
			expires: new Date(),
		})
	)
	res.statusCode = 200
	res.json({ success: true })
}
