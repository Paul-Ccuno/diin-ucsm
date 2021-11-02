import Head from 'next/head'

import Container from 'components/general/container'
import RegisterForm from 'components/register/registerForm'

export default function Register() {
	return (
		<>
			<Head>
				<title>Directorio de Investigadores - UCSM</title>
			</Head>

			<Container>
				<div className="Title">
					<h1>Register DIIN UCSM</h1>
				</div>
				<RegisterForm />
			</Container>
		</>
	)
}
