import Head from 'next/head'

import RegisterForm from 'components/Register/RegisterForm'
import Title from 'components/General/Title'

export default function Register() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores - UCSM</title>
			</Head>
			<div className="Register-container">
				<Title>Register DIIN UCSM</Title>
				<RegisterForm />
			</div>
			<style jsx>{`
				.Register-container {
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
