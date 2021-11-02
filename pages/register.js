import Head from 'next/head'

import LoginContainer from 'components/login/loginContainer'
import RegisterForm from 'components/register/registerForm'

export default function Register() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores - UCSM</title>
			</Head>

			<LoginContainer>
				<div className="Title">
					<h1>Register DIIN UCSM</h1>
				</div>
				<RegisterForm />
			</LoginContainer>
		</>
	)
}
