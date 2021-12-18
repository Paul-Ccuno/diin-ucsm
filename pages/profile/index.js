import Head from 'next/head'
import { useState } from 'react'
import api from 'services/api'

import ProfileContainer from 'components/Researchers/ProfileContainer'
import Profile from 'components/Profile'

function ProfilePage({ user, token, researcher }) {
	const [profile, setProfile] = useState(researcher)

	return (
		<>
			<Head>
				<title>{profile.name}</title>
			</Head>

			<ProfileContainer>
				<Profile profile={researcher} token={token} />
			</ProfileContainer>

			<style jsx>{`
				.Profile {
					font-size: 0.9rem;
					padding-top: 1rem;
				}
			`}</style>
		</>
	)
}

export const getServerSideProps = async ({ req, res }) => {
	try {
		const user = JSON.parse(req.cookies.user || null)
		const token = req.cookies.token || null

		if (!user || !token) {
			return {
				redirect: {
					destination: '/login',
					permanent: false,
				},
			}
		}

		const researcher = await api.researchers.getResearcher({
			id: user._id,
		})

		return { props: { user, token, researcher } }
	} catch (error) {
		console.error(error)
		return { props: {} }
	}
}

export default ProfilePage
