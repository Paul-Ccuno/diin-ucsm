import Head from 'next/head'

import Container from 'components/general/Container'
import LoginForm from 'components/login/loginForm'

export default function Login() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores UCSM - Login</title>
			</Head>

			<Container>
				<div className="Title">
					<h1>Login DIIN UCSM</h1>
				</div>
				<LoginForm />
			</Container>
		</>
	)
}
