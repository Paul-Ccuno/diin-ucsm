import Head from 'next/head'
import Link from 'next/link'

import Container from 'components/general/container'

export default function Researchers() {
	return (
		<>
			<Head>
				<title>Investigadores</title>
			</Head>
			<Container>
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
			</Container>
		</>
	)
}
