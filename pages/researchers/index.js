import Head from 'next/head'
import Link from 'next/link'

export default function Researchers() {
	return (
		<>
			<Head>
				<title>Investigadores</title>
			</Head>
			<div className="Researchers">
				Investigadores
				<div className="Table">
					<Link href={'/researchers/2'}>
						<a>2</a>
					</Link>
					<Link href={'/researchers/1'}>
						<a>1</a>
					</Link>
				</div>
			</div>
		</>
	)
}
