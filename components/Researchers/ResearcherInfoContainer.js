export default function ResearcherInfoContainer({ children }) {
	return (
		<>
			<div className="Researcher-info-container">{children}</div>
			<style jsx>{`
				.Researcher-info-container {
					display: flex;
					flex-direction: column;
					place-items: center;
					gap: 1rem;
				}
			`}</style>
		</>
	)
}
