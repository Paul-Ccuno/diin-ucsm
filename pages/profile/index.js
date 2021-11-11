import Head from 'next/head'
import { useState } from 'react'
import api from 'services/api'

function Profile({ user, token, researcher }) {
	const [profile, setProfile] = useState(researcher.data)

	return (
		<>
			<Head>
				<title>{profile.name}</title>
			</Head>

			<div className="Profile">
				Hola {profile.name}
				DNI: {profile.dni}
				Nombre: {profile.name}
				Apellido: {profile.lastName}
				Email: {profile.email}
			</div>
			<style jsx>{`
				.Profile {
				}
			`}</style>
		</>
	)
}

export const getServerSideProps = async ({ req, res }) => {
	try {
		const user = JSON.parse(req.cookies.user || null)
		const token = req.cookies.token || null

		if (!user && !token) {
			return {
				redirect: {
					destination: '/login',
					permanent: false,
				},
			}
		}

		const researcher = await api.researchers.getResearcher({
			id: user._id,
			token,
		})

		return { props: { user, token, researcher } }
	} catch (error) {}
}

export default Profile
