import { createContext } from 'react'

const SnackbarContext = createContext({
	openSnackbar: false,
	setOpenSnackbar: () => {},
	snackbarMessage: '',
	setSnackbarMessage: () => {},
})

export default SnackbarContext
