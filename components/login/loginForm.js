import { useRouter } from 'next/router'
import { useState } from 'react'

import { Button, TextField, ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { setCookies } from 'cookies-next'

export default function LoginForm() {
	const router = useRouter()

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
		try {
			event.preventDefault()
			const res = await fetch('http://localhost:8000/api/auth/signin', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(loginForm),
			})
			const { user, token } = await res.json()
			setCookies('token', token)
			setCookies('user', user)
			console.log(user)
		} catch (error) {
			console.error(error)
		}
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

			<ThemeProvider theme={theme}>
				<Button fullWidth variant="contained" color="success" type="submit">
					Iniciar Sesión
				</Button>
			</ThemeProvider>

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
