import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export default function RegisterForm() {
	const [registerForm, setRegisterForm] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleChangeRegisterForm = (prop) => async (event) => {
		await setRegisterForm({
			...registerForm,
			[prop]: event.target.value,
		})
	}

	const handleSubmitRegisterForm = (event) => {
		event.preventDefault()
		if (registerForm.password === registerForm.confirmPassword) {
			console.log('bien')
		}
		console.log(registerForm)
	}
	return (
		<form className="Register-form" onSubmit={handleSubmitRegisterForm}>
			<TextField
				fullWidth
				label="Nombre"
				variant="filled"
				size="small"
				color="success"
				value={registerForm.name}
				onChange={handleChangeRegisterForm('name')}
			/>
			<TextField
				fullWidth
				label="Apellido"
				variant="filled"
				size="small"
				color="success"
				value={registerForm.lastName}
				onChange={handleChangeRegisterForm('lastName')}
			/>
			<TextField
				fullWidth
				label="Email"
				variant="filled"
				size="small"
				color="success"
				value={registerForm.email}
				onChange={handleChangeRegisterForm('email')}
			/>
			<TextField
				fullWidth
				type="password"
				label="Password"
				variant="filled"
				size="small"
				color="success"
				value={registerForm.password}
				onChange={handleChangeRegisterForm('password')}
			/>
			<TextField
				fullWidth
				type="password"
				label="Confirmar Password"
				variant="filled"
				size="small"
				color="success"
				value={registerForm.confirmPassword}
				onChange={handleChangeRegisterForm('confirmPassword')}
			/>
			<Button fullWidth variant="contained" color="success" type="submit">
				Registrar
			</Button>

			<style jsx>{`
				.Register-form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			`}</style>
		</form>
	)
}
