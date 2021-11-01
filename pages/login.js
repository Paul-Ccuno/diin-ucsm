import Head from 'next/head'

import LoginContainer from 'components/login/loginContainer'
import LoginForm from 'components/login/loginForm'

export default function Login() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores UCSM - Login</title>
			</Head>

			<LoginContainer>
				<div className="Title">
					<h1>Login DIIN UCSM</h1>
				</div>
				<LoginForm />
			</LoginContainer>
		</>
	)
}
