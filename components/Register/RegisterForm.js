import Register, { registerFields } from 'schemas/Register.schema'
import { Alert, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import { useRouter } from 'next/router'
import api from 'services/api'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export default function RegisterForm() {
	const router = useRouter()

	const [successRequest, setSuccessRequest] = useState(false)
	const [badRequest, setBadRequest] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Register),
	})

	const handleSubmitRegisterForm = async (values) => {
		try {
			setIsLoading(true)
			const res = await api.auth.signup(values)
			console.log(res)
			setSuccessRequest(true)
			router.push('/login')
		} catch (error) {
			console.error(error)
			setBadRequest('El usuario ingresado ya existe')
			setIsLoading(false)
		}
	}
	return (
		<form
			className="Register-form"
			onSubmit={handleSubmit(handleSubmitRegisterForm)}
		>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.dni)}
				type="number"
				label="DNI"
				error={errors[registerFields.dni]?.message}
				helperText={errors[registerFields.dni]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.name)}
				label="Nombre"
				error={errors[registerFields.name]?.message}
				helperText={errors[registerFields.name]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.lastName)}
				label="Apellido"
				error={errors[registerFields.lastName]?.message}
				helperText={errors[registerFields.lastName]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.email)}
				type="email"
				label="Correo Electrónico"
				error={errors[registerFields.email]?.message}
				helperText={errors[registerFields.email]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.password)}
				type="password"
				label="Contraseña"
				error={errors[registerFields.password]?.message}
				helperText={errors[registerFields.password]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(registerFields.confirmPassword)}
				type="password"
				label="Confirmar Contraseña"
				error={errors[registerFields.confirmPassword]?.message}
				helperText={errors[registerFields.confirmPassword]?.message}
			/>
			<LoadingButton
				loading={isLoading}
				fullWidth
				variant="contained"
				color="success"
				type="submit"
			>
				Registrar
			</LoadingButton>
			{successRequest ? (
				<Alert severity="success">Usuario registrado correctamente</Alert>
			) : (
				badRequest && <Alert severity="error">{badRequest || ''}</Alert>
			)}

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
