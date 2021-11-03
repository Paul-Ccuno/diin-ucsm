export default function Container({ children }) {
	return (
		<div className="Container">
			{children}

			<style jsx>{`
				.Container {
					margin: auto;
					min-width: 400px;
					max-width: 800px;
					min-height: 500px;
				}
			`}</style>
		</div>
	)
}
