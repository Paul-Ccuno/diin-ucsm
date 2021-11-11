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
	const user = JSON.parse(req.cookies.user || null)
	const token = req.cookies.token || null
	console.log(user)

	const response = await api.researchers.getResearcher({
		id: user._id,
		token,
	})
	const researcher = response

	if (user && token) {
		return { props: { user, token, researcher } }
	} else {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}
}

export default Profile
