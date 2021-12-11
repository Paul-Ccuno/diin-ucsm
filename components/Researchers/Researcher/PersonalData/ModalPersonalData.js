import { Dialog, DialogTitle, useMediaQuery, Slide } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ModalContext } from 'contexts'
import { forwardRef, useContext, useState } from 'react'
import { colors } from 'styles/theme'
import PersonalDataForm from './PersonalDataForm'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

export default function ModalPersonalData({ researcher, token }) {
	const { open } = useContext(ModalContext)

	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth="sm"
				fullScreen={fullScreen}
				TransitionComponent={Transition}
				open={open}
				aria-labelledby="responsive-dialog-personal-data"
			>
				<DialogTitle
					id="responsive-dialog-personal-data"
					color={colors.success}
				>
					Actualización de Datos personales
				</DialogTitle>
				<PersonalDataForm
					fullScreen={fullScreen}
					researcher={researcher}
					token={token}
				/>
			</Dialog>
		</>
	)
}
