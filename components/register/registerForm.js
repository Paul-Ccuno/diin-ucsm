import Researcher, { researcherFields } from 'schemas/Researcher'
import { Button, TextField } from '@mui/material'
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

	const [badRequest, setBadRequest] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Researcher),
	})

	const handleSubmitRegisterForm = async (values) => {
		try {
			setIsLoading(true)
			const res = await api.auth.signup(values)
			console.log(res)
			setIsLoading(false)
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
				{...register(researcherFields.dni)}
				type="number"
				label="DNI"
				error={errors[researcherFields.dni]?.message}
				helperText={errors[researcherFields.dni]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(researcherFields.name)}
				label="Nombre"
				error={errors[researcherFields.name]?.message}
				helperText={errors[researcherFields.name]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(researcherFields.lastName)}
				label="Apellido"
				error={errors[researcherFields.lastName]?.message}
				helperText={errors[researcherFields.lastName]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(researcherFields.email)}
				label="Correo Electrónico"
				error={errors[researcherFields.email]?.message}
				helperText={errors[researcherFields.email]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(researcherFields.password)}
				type="password"
				label="Contraseña"
				error={errors[researcherFields.password]?.message}
				helperText={errors[researcherFields.password]?.message}
			/>
			<TextField
				{...textFieldStyles}
				{...register(researcherFields.confirmPassword)}
				type="password"
				label="Confirmar Contraseña"
				error={errors[researcherFields.confirmPassword]?.message}
				helperText={errors[researcherFields.confirmPassword]?.message}
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
			{badRequest && badRequest}

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
