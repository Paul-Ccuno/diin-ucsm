import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import api from 'services/api'
import Register, { registerFields } from 'schemas/Register.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { dateReadOnly, maxDateAdult } from 'utils'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { es } from 'date-fns/locale'

import { Alert, TextField, useMediaQuery, useTheme } from '@mui/material'

import {
	DesktopDatePicker,
	LoadingButton,
	LocalizationProvider,
	MobileDatePicker,
} from '@mui/lab'
import { textFieldStyles, datePickerStyles } from 'styles/theme'

export default function RegisterForm() {
	const router = useRouter()

	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	const [successRequest, setSuccessRequest] = useState(false)
	const [badRequest, setBadRequest] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const maxDate = maxDateAdult()

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Register),
		defaultValues: {
			[registerFields.birthDate]: maxDate.toString(),
		},
	})

	const [birthDate, setBirthDate] = useState(
		getValues(registerFields.birthDate)
	)

	useEffect(() => {
		console.log('input', getValues(registerFields.birthDate))
		console.log('moment', birthDate)
	}, [getValues, birthDate])

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
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
				{fullScreen ? (
					<MobileDatePicker
						maxDate={maxDate}
						{...datePickerStyles}
						onChange={(value) => {
							setBirthDate(value)
							setValue(registerFields.birthDate, value)
						}}
						value={birthDate}
						renderInput={(params) => (
							<TextField
								{...params}
								{...textFieldStyles}
								{...register(registerFields.birthDate)}
								onKeyDown={dateReadOnly}
								label="Fecha de nacimiento"
								error={errors[registerFields.birthDate]?.message && true}
								helperText={errors[registerFields.birthDate]?.message}
							/>
						)}
					/>
				) : (
					<DesktopDatePicker
						maxDate={maxDate}
						{...datePickerStyles}
						onChange={(value) => {
							setBirthDate(value)
							setValue(registerFields.birthDate, value)
						}}
						value={birthDate}
						renderInput={(params) => (
							<TextField
								{...params}
								{...textFieldStyles}
								{...register(registerFields.birthDate)}
								onKeyDown={dateReadOnly}
								label="Fecha de nacimiento"
								error={errors[registerFields.birthDate]?.message && true}
								helperText={errors[registerFields.birthDate]?.message}
							/>
						)}
					/>
				)}
			</LocalizationProvider>
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
