import Head from 'next/head'

import LoginForm from 'components/login/loginForm'

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
