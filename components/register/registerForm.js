import Researcher from 'schemas/Researcher'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

const formFields = {
	dni: 'dni',
	email: 'email',
	password: 'password',
	confirmPassword: 'confirmPassword',
	name: 'name',
	lastName: 'lastName',
	birthDate: 'birthDate',
	avatar: 'avatar',
	abstract: 'abstract',
}

export default function RegisterForm() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Researcher),
	})

	const handleSubmitRegisterForm = async (values) => {
		try {
			setLoading(true)
			const res = await fetch('http://localhost:8000/api/auth/signup', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(values),
			})
			const data = await res.json()
			setLoading(false)
			console.log(data)
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}
	return (
		<form
			className="Register-form"
			onSubmit={handleSubmit(handleSubmitRegisterForm)}
		>
			<TextField
				{...textFieldStyles}
				{...register(formFields.dni)}
				type="number"
				label="DNI"
				error={errors[formFields.dni]?.message}
				helperText={errors[formFields.dni]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(formFields.name)}
				label="Nombre"
				error={errors[formFields.name]?.message}
				helperText={errors[formFields.name]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(formFields.lastName)}
				label="Apellido"
				error={errors[formFields.lastName]?.message}
				helperText={errors[formFields.lastName]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(formFields.email)}
				label="Correo Electrónico"
				error={errors[formFields.email]?.message}
				helperText={errors[formFields.email]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(formFields.password)}
				type="password"
				label="Contraseña"
				error={errors[formFields.password]?.message}
				helperText={errors[formFields.password]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(formFields.confirmPassword)}
				type="password"
				label="Confirmar Contraseña"
				error={errors[formFields.confirmPassword]?.message}
				helperText={errors[formFields.confirmPassword]?.message}
			/>
			<Button fullWidth variant="contained" color="success" type="submit">
				{loading ? 'Cargando...' : 'Registrar'}
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
