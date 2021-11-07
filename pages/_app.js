import Navigation from 'components/navigation'
import Container from 'components/general/container'

import 'styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import cookie from 'cookie'
// import { getCookie } from 'cookies-next'

function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation />
				<Container>
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
