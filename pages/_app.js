import Navigation from 'components/navigation'
import Container from 'components/general/container'

import 'styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { getCookie } from 'cookies-next'

function App({ Component, pageProps, user = null }) {
	console.log('user', user)
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation user={user} />
				<Container>
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</>
	)
}

App.getInitialProps = ({ ctx }) => {
	const { req, res } = ctx
	const user = JSON.parse(req.cookies.user || null)
	console.log(user)

	return { user: user }
}

export default App
