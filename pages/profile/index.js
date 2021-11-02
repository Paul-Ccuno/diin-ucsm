import Container from 'components/general/container'
import Head from 'next/head'

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

			<Container>
				<div className="Profile">Hola {profile.name}</div>
			</Container>
			<style jsx>{`
				.Profile {
				}
			`}</style>
		</>
	)
}
