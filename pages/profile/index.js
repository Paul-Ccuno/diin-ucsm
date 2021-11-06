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

			<div className="Profile">Hola {profile.name}</div>
			<style jsx>{`
				.Profile {
				}
			`}</style>
		</>
	)
}
