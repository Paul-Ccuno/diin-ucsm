import { createTheme } from '@mui/material'

export const fonts = {
	base: `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
}

export const colors = {
	primary: '#38b4bf',
	// secondary: '#fbf100',
	secondary: '#bbb',
	success: '#00bf66',
}

const theme = createTheme({
	palette: {
		primary: {
			// light: ,
			main: colors.primary,
			// dark: '',
			// contrastText
		},
		secondary: {
			// light: ,
			main: colors.secondary,
			// dark: '#e5db00',
			dark: '#ababab',
			contrastText: '#fff',
		},
		success: {
			// light: ,
			main: colors.success,
			dark: '#00ad5c',
			contrastText: '#fff',
		},
	},
})

export const textFieldStyles = {
	fullWidth: true,
	variant: 'standard',
	size: 'small',
	color: 'success',
}

export const datePickerStyles = {}

export default theme
