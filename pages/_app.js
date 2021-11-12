import Navigation from 'components/Navigation'
import Container from 'components/General/Container'

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

	// console.log({ ...req.cookies })
	// const { user, token } = req.cookies
	// console.log(user, token)
	return { props: {} }
}

export default App
