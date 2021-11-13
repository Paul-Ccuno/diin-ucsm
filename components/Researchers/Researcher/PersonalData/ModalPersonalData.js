import { Dialog, DialogTitle, useMediaQuery, Slide } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ModalContext } from 'contexts'
import { forwardRef, useContext, useState } from 'react'
import PersonalDataForm from './PersonalDataForm'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

export default function ModalPersonalData({ researcher }) {
	const { open } = useContext(ModalContext)

	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<>
			<Dialog
				fullScreen={fullScreen}
				TransitionComponent={Transition}
				open={open}
				aria-labelledby="responsive-dialog-personal-data"
			>
				<DialogTitle id="responsive-dialog-personal-data">
					Actualización de Datos personales
				</DialogTitle>
				<PersonalDataForm fullScreen={fullScreen} researcher={researcher} />
			</Dialog>
		</>
	)
}
