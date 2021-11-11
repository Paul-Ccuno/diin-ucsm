import { useRouter } from 'next/router'
import { useState } from 'react'

import Login, { loginFields } from 'schemas/Login'
import { Button, TextField, Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import api from 'services/api'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export default function LoginForm() {
	const router = useRouter()

	const [badRequest, setBadRequest] = useState(null)
	const [successRequest, setSuccessRequest] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(Login) })

	const handleSubmitLoginForm = async (values) => {
		try {
			setIsLoading(true)
			const res = await api.auth.signin(values)
			setSuccessRequest(true)
			setIsLoading(false)
			router.push('/profile')
		} catch (error) {
			setBadRequest(error || '')
			// setBadRequest('Correo electrónico o contraseña incorrecta')
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitLoginForm)}>
			<TextField
				{...textFieldStyles}
				{...register(loginFields.email)}
				label="Correo Electrónico"
				error={errors[loginFields.email]?.message && true}
				helperText={errors[loginFields.email]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(loginFields.password)}
				type="password"
				label="Contraseña"
				error={errors[loginFields.password]?.message && true}
				helperText={errors[loginFields.password]?.message}
			/>

			<LoadingButton
				fullWidth
				loading={isLoading}
				variant="contained"
				color="success"
				type="submit"
			>
				Iniciar Sesión
			</LoadingButton>
			{successRequest ? (
				<Alert severety="success">Usuario logeado correctamente</Alert>
			) : (
				badRequest && <Alert severity="error">{badRequest || ''}</Alert>
			)}

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
