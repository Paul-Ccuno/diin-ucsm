export default function Container({ children }) {
	return (
		<div className="Container">
			{children}

			<style jsx>{`
				.Container {
					margin: auto;
					padding: 0 1rem;
					min-width: 430px;
					max-width: 1000px;
					min-height: 500px;
				}
				@media (max-width: 500px) {
					.Container {
					}
				}
			`}</style>
		</div>
	)
}
