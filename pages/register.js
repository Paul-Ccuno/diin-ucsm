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
