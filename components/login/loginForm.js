import { useRouter } from 'next/router'
import { useState } from 'react'

import Login, { loginFields } from 'schemas/Login'
import { Button, TextField, Loading } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import theme from 'styles/theme'
import { setCookies } from 'cookies-next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export default function LoginForm() {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(Login) })

	const handleSubmitLoginForm = async (values) => {
		try {
			setIsLoading(true)
			const res = await fetch('http://localhost:8000/api/auth/signin', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(values),
			})
			const { user, token } = await res.json()
			setCookies('user', user)
			const resToken = await fetch('/api/auth', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ token }),
			})
			router.push('/profile')
			setIsLoading(false)
		} catch (error) {
			console.error(error)
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitLoginForm)}>
			<TextField
				{...textFieldStyles}
				{...register(loginFields.email)}
				label="Correo Electrónico"
				error={errors[loginFields.email]?.message}
				helperText={errors[loginFields.email]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(loginFields.password)}
				type="password"
				label="Contraseña"
				error={errors[loginFields.password]?.message}
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
