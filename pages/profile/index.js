import Head from 'next/head'
import { useState } from 'react'

function Profile({ user, token }) {
	const [profile, setProfile] = useState(user)

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

export const getServerSideProps = ({ req, res }) => {
	const user = JSON.parse(req.cookies.user)
	const token = req.cookies.token

	if (user && token) {
		return { props: { user, token } }
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
