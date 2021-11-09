import Head from 'next/head'

import RegisterForm from 'components/register/registerForm'

export default function Register() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores - UCSM</title>
			</Head>

			<div className="Title">
				<h1>Register DIIN UCSM</h1>
			</div>
			<RegisterForm />
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
