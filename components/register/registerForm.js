import { Button, TextField } from '@mui/material'
import { useState } from 'react'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

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
				{...textFieldStyles}
				label="Nombre"
				value={registerForm.name}
				onChange={handleChangeRegisterForm('name')}
			/>
			<TextField
				{...textFieldStyles}
				label="Apellido"
				value={registerForm.lastName}
				onChange={handleChangeRegisterForm('lastName')}
			/>
			<TextField
				{...textFieldStyles}
				label="Email"
				value={registerForm.email}
				onChange={handleChangeRegisterForm('email')}
			/>
			<TextField
				{...textFieldStyles}
				type="password"
				label="Password"
				value={registerForm.password}
				onChange={handleChangeRegisterForm('password')}
			/>
			<TextField
				{...textFieldStyles}
				type="password"
				label="Confirmar Password"
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
