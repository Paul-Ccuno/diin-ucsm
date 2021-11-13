import Navigation from 'components/Navigation'
import Container from 'components/General/Container'

import 'styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

function App({ Component, pageProps, user, token }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation user={user} token={token} />
				<Container>
					<Component {...pageProps} />
				</Container>
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
