import Head from 'next/head'
import Link from 'next/link'
import api from 'services/api'

export default function Researchers({ researchers }) {
	console.log(researchers)
	return (
		<>
			<Head>
				<title>Investigadores</title>
			</Head>
			<div className="Researchers">
				Investigadores
				<div className="Table">
					{researchers.map((researcher) => (
						<Link
							key={`researcher-${researcher._id}`}
							href={`/researchers/${researcher._id}`}
						>
							<a>{researcher.name}</a>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export const getServerSideProps = async ({ req, res }) => {
	const researchers = await api.researchers.getResearchers()

	return {
		props: {
			researchers,
		},
	}
}
