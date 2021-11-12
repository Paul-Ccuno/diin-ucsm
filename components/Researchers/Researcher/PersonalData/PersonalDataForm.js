import { LoadingButton } from '@mui/lab'
import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import { ModalContext } from 'contexts'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import Researcher, { researcherFields } from 'schemas/Researcher'

const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export default function PersonalDataForm({ researcher }) {
	const { setOpen } = useContext(ModalContext)
	console.log(researcher)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(Researcher) })
	return (
		<>
			<form>
				<DialogContent>
					<div className="form-fields">
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.abstract)}
							multiline
							rows={4}
							label="Resumen"
							value={researcher?.abstract || ''}
						/>
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.dni)}
							type="number"
							label="DNI"
							value={researcher?.dni || ''}
						/>
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.name)}
							label="Nombre"
							value={researcher?.name || ''}
						/>
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.lastName)}
							label="Apellido"
							value={researcher?.lastName || ''}
						/>
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.email)}
							label="Correo electrónico"
							value={researcher?.email || ''}
						/>
						<TextField
							{...textFieldStyles}
							{...register(researcherFields.birthDate)}
							type="date"
							label="Fecha de nacimiento"
							value={researcher?.birthDate || ''}
						/>
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
					<LoadingButton color="success" variant="contained" type="submit">
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
