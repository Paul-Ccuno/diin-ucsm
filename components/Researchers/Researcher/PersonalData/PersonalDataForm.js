import {
	DesktopDatePicker,
	LoadingButton,
	LocalizationProvider,
	MobileDatePicker,
} from '@mui/lab'
import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import AdapterMoment from '@mui/lab/AdapterMoment'
import { ModalContext } from 'contexts'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import PersonalData, { personalDataFields } from 'schemas/PersonalData.schema'
import { maxDateAdult } from 'utils'
import moment from 'moment'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export default function PersonalDataForm({ researcher, fullScreen }) {
	const { setOpen } = useContext(ModalContext)
	const [isLoading, setIsLoading] = useState(false)

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
			[personalDataFields.birthDate]: researcher?.birthDate || maxDateAdult(),
		},
	})
	const [birthDate, setBirthDate] = useState(
		getValues(personalDataFields.birthDate)
	)

	const handleSubmitPersonalData = async (values) => {
		try {
			setIsLoading(true)
			console.log(values)
			setIsLoading(false)
		} catch (error) {
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
						<LocalizationProvider dateAdapter={AdapterMoment}>
							{fullScreen ? (
								<MobileDatePicker
									maxDate={moment(maxDateAdult())}
									inputFormat="DD/MM/YYYY"
									mask="__/__/___"
									onChange={(value) => {
										setBirthDate(value)
										setValue(
											personalDataFields.birthDate,
											value.format('DD/MM/YYYY')
										)
									}}
									value={birthDate}
									renderInput={(params) => (
										<TextField
											{...params}
											{...textFieldStyles}
											{...register(personalDataFields.birthDate)}
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
									maxDate={moment(maxDateAdult())}
									inputFormat="DD/MM/YYYY"
									mask="__/__/___"
									onChange={(value) => {
										setBirthDate(value)
										setValue(
											personalDataFields.birthDate,
											value.format('DD/MM/YYYY') || undefined
										)
									}}
									value={birthDate}
									renderInput={(params) => (
										<TextField
											{...params}
											{...textFieldStyles}
											{...register(personalDataFields.birthDate)}
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
						Cancel
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
