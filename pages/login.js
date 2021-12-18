import Head from 'next/head'

import LoginForm from 'components/Login/LoginForm'
import Title from 'components/General/Title'

export default function Login() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores UCSM - Login</title>
			</Head>

			<div className="Login-container">
				<Title>Login DIIN UCSM</Title>
				<LoginForm />
			</div>
			<style jsx>{`
				.Login-container {
					margin: auto;
					max-width: 450px;
				}
			`}</style>
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
