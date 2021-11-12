import PersonalData from 'components/Researchers/Researcher/PersonalData'

export default function Profile({ profile }) {
	return (
		<>
			<div className="Profile">
				<PersonalData researcher={profile} />
			</div>
			<style jsx>{``}</style>
		</>
	)
}
