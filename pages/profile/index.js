import Sidebar from 'components/navigation/Sidebar'
import Head from 'next/head'

import { publicRoutes } from 'components/navigation/routes'

export default function User() {
	const profile = {
		id: 2,
		name: 'Paul Ccuno',
	}

	return (
		<>
			<Head>
				<title>{profile.name}</title>
			</Head>

			<div className="Profile">
				Hola {profile.name}
				<Sidebar routes={publicRoutes} />
			</div>
			<style jsx>{`
				.Profile {
				}
			`}</style>
		</>
	)
}
