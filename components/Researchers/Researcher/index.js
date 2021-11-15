import PersonalData from './PersonalData'

export default function Researcher({ researcher, token }) {
	console.log(researcher)
	return (
		<>
			<div className="Researcher">
				<PersonalData researcher={researcher} token={token} />
			</div>
			<style jsx>{``}</style>
		</>
	)
}
