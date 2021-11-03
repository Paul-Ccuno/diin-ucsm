import Navigation from 'components/navigation'
import Container from 'components/general/container'

import 'styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
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

export default MyApp
