import Title from 'components/General/Title'
import Profile from 'components/Profile'
import ProfileContainer from 'components/Researchers/ProfileContainer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from 'services/api'

export default function Researcher({ personalData }) {
	const fullName = personalData.name + ' ' + personalData.lastName

	return (
		<>
			<Head>
				<title>Investigador {fullName}</title>
			</Head>

			<Title>Investigador {fullName}</Title>
			<div className="Researcher">
				<ProfileContainer>
					<Profile profile={personalData} />
				</ProfileContainer>
			</div>
		</>
	)
}

export const getServerSideProps = async ({ req, res, query }) => {
	try {
		const { researcher } = query
		const personalData = await api.researchers.getResearcher({ id: researcher })
		return {
			props: { personalData },
		}
	} catch (error) {
		console.log(error)
		return { props: {} }
	}
}
