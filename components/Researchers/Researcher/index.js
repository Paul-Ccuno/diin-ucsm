import PersonalData from './PersonalData'

export default function Researcher({ researcher }) {
	return (
		<>
			<div className="Researcher">
				<PersonalData researcher={researcher} />
			</div>
			<style jsx>{``}</style>
		</>
	)
}
