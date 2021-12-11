import Navigation from 'components/Navigation'
import Container from 'components/General/Container'

import 'styles/globals.css'
import { Snackbar, ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import SnackbarContext from 'contexts/SnackbarContext'
import { useState } from 'react'

function App({ Component, pageProps, user, token }) {
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [snackbarMessage, setSnackbarMessage] = useState('')
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation user={user} token={token} />
				<SnackbarContext.Provider
					value={{
						openSnackbar,
						setOpenSnackbar,
						snackbarMessage,
						setSnackbarMessage,
					}}
				>
					<Container>
						<Component {...pageProps} />
					</Container>
				</SnackbarContext.Provider>
				<Snackbar
					open={openSnackbar}
					autoHideDuration={5000}
					onClose={() => {
						setOpenSnackbar(false)
						setSnackbarMessage('')
					}}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					message={snackbarMessage}
				/>
			</ThemeProvider>
			<style jsx>{`
				@media (max-width: 500px) {
					html,
					body {
					}
				}
			`}</style>
		</>
	)
}

App.getInitialProps = async (appContext) => {
	const { req, res } = appContext.ctx
	const user = JSON.parse(req.cookies.user || null)
	const token = req.cookies.token || null

	return {
		user,
		token,
	}
}

export default App
