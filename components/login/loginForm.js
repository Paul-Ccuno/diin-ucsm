import { useState } from 'react'

import { Button, TextField } from '@mui/material'

const user = {
	name: 'Paul',
	email: 'pallccuno@gmail.com',
}

export default function LoginForm() {
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	})

	const handleChangeLoginForm = (prop) => (event) => {
		setLoginForm({
			...loginForm,
			[prop]: event.target.value,
		})
	}

	const handleSubmitLoginForm = async (event) => {
		event.preventDefault()
		console.log(loginForm)
		const res = await fetch('/api/hello')
		const data = await res.json()
		console.log(data.name)
		setLoginForm({
			...loginForm,
			email: data.name,
		})
		localStorage.setItem('user', JSON.stringify(user))
	}

	return (
		<form onSubmit={handleSubmitLoginForm}>
			<TextField
				fullWidth
				label="Email"
				variant="filled"
				size="small"
				color="success"
				value={loginForm.email}
				onChange={handleChangeLoginForm('email')}
			/>
			<TextField
				fullWidth
				label="Password"
				variant="filled"
				size="small"
				color="success"
				value={loginForm.password}
				onChange={handleChangeLoginForm('password')}
			/>

			<Button fullWidth variant="contained" color="success" type="submit">
				Iniciar Sesión
			</Button>

			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			`}</style>
		</form>
	)
}
