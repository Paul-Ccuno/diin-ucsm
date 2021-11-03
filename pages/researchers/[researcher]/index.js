import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Researcher() {
	const router = useRouter()
	const { researcher } = router.query

	return (
		<>
			<Head>
				<title>Investigador {researcher}</title>
			</Head>

			<div className="Researcher">Investigador {researcher}</div>
		</>
	)
}
