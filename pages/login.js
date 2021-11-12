import Head from 'next/head'

import LoginForm from 'components/Login/LoginForm'

export default function Login() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores UCSM - Login</title>
			</Head>

			<div className="Title">
				<h1>Login DIIN UCSM</h1>
			</div>
			<LoginForm />
		</>
	)
}

export const getServerSideProps = ({ req, res }) => {
	const user = JSON.parse(req.cookies.user || null)
	const token = req.cookies.token || null

	if (user && token) {
		return {
			redirect: {
				destination: '/profile',
				permanent: false,
			},
		}
	}

	return { props: {} }
}
