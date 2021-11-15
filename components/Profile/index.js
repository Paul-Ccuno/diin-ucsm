import PersonalData from 'components/Researchers/Researcher/PersonalData'

export default function Profile({ profile, token }) {
	console.log(profile)
	return (
		<>
			<div className="Profile">
				<PersonalData researcher={profile} token={token} />
			</div>
			<style jsx>{``}</style>
		</>
	)
}
