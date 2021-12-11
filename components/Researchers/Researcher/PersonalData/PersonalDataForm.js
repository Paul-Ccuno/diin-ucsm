import {
	DesktopDatePicker,
	LoadingButton,
	LocalizationProvider,
	MobileDatePicker,
} from '@mui/lab'
import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { es } from 'date-fns/locale'
import { ModalContext } from 'contexts'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import PersonalData, { personalDataFields } from 'schemas/PersonalData.schema'
import { dateReadOnly, maxDateAdult } from 'utils'
import { textFieldStyles, datePickerStyles } from 'styles/theme'
import api from 'services/api'
import SnackbarContext from 'contexts/SnackbarContext'

export default function PersonalDataForm({ researcher, fullScreen, token }) {
	const { setOpen, setData } = useContext(ModalContext)
	const { setOpenSnackbar, setSnackbarMessage } = useContext(SnackbarContext)
	const [isLoading, setIsLoading] = useState(false)
	const maxDate = maxDateAdult()

	const {
		register,
		setValue,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(PersonalData),
		defaultValues: {
			[personalDataFields.abstract]: researcher?.abstract,
			[personalDataFields.dni]: researcher?.dni,
			[personalDataFields.name]: researcher?.name,
			[personalDataFields.lastName]: researcher?.lastName,
			[personalDataFields.email]: researcher?.email,
			[personalDataFields.birthDate]: new Date(researcher?.birthDate),
		},
	})
	const [birthDate, setBirthDate] = useState(
		getValues(personalDataFields.birthDate)
	)

	const handleSubmitPersonalData = async (values) => {
		try {
			setIsLoading(true)
			const res = await api.researchers.updateResearcher({
				id: researcher._id,
				data: values,
				token,
			})
			setSnackbarMessage('Datos personales actualizados')
			setOpenSnackbar(true)
			setData(res)
			setOpen(false)
		} catch (error) {
			setIsLoading(false)
			console.log(error)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(handleSubmitPersonalData)}>
				<DialogContent>
					<div className="form-fields">
						<TextField
							{...textFieldStyles}
							{...register(personalDataFields.abstract)}
							label="Resumen"
							error={errors[personalDataFields.abstract]?.message && true}
							multiline
							rows={4}
							maxRows={5}
							helperText={errors[personalDataFields.abstract]?.message}
						/>
						<TextField
							{...textFieldStyles}
							{...register(personalDataFields.dni)}
							type="number"
							label="DNI"
							error={errors[personalDataFields.dni]?.message && true}
							helperText={errors[personalDataFields.dni]?.message}
						/>
						<TextField
							{...textFieldStyles}
							{...register(personalDataFields.name)}
							label="Nombre"
							error={errors[personalDataFields.name]?.message && true}
							helperText={errors[personalDataFields.name]?.message}
						/>
						<TextField
							{...textFieldStyles}
							{...register(personalDataFields.lastName)}
							label="Apellido"
							error={errors[personalDataFields.lastName]?.message && true}
							helperText={errors[personalDataFields.lastName]?.message}
						/>
						<TextField
							{...textFieldStyles}
							{...register(personalDataFields.email)}
							label="Correo electrónico"
							error={errors[personalDataFields.email]?.message && true}
							helperText={errors[personalDataFields.email]?.message}
						/>
						<LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
							{fullScreen ? (
								<MobileDatePicker
									maxDate={maxDate}
									{...datePickerStyles}
									onChange={(value) => {
										setBirthDate(value)
										setValue(personalDataFields.birthDate, value)
									}}
									value={birthDate}
									renderInput={(params) => (
										<TextField
											{...params}
											{...textFieldStyles}
											{...register(personalDataFields.birthDate)}
											onKeyDown={dateReadOnly}
											label="Fecha de nacimiento"
											error={
												errors[personalDataFields.birthDate]?.message && true
											}
											helperText={errors[personalDataFields.birthDate]?.message}
										/>
									)}
								/>
							) : (
								<DesktopDatePicker
									maxDate={maxDate}
									{...datePickerStyles}
									onChange={(value) => {
										setBirthDate(value)
										setValue(personalDataFields.birthDate, value)
									}}
									value={birthDate}
									renderInput={(params) => (
										<TextField
											{...params}
											{...textFieldStyles}
											{...register(personalDataFields.birthDate)}
											onKeyDown={dateReadOnly}
											label="Fecha de nacimiento"
											error={
												errors[personalDataFields.birthDate]?.message && true
											}
											helperText={errors[personalDataFields.birthDate]?.message}
										/>
									)}
								/>
							)}
						</LocalizationProvider>
					</div>
				</DialogContent>
				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						onClick={() => setOpen(false)}
					>
						Cancelar
					</Button>
					<LoadingButton
						loading={isLoading}
						type="submit"
						color="success"
						variant="contained"
					>
						Enviar
					</LoadingButton>
				</DialogActions>
			</form>
			<style jsx>{`
				.form-fields {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			`}</style>
		</>
	)
}
