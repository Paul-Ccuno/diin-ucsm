import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from 'components/general/Container'

export default function Researcher() {
	const router = useRouter()
	const { researcher } = router.query

	return (
		<>
			<Head>
				<title>Investigador {researcher}</title>
			</Head>

			<Container>
				<div className="Researcher">Investigador {researcher}</div>
			</Container>
		</>
	)
}
