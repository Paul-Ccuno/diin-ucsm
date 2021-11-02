export default function Container({ children }) {
	return (
		<div className="Container">
			{children}

			<style jsx>{`
				.Container {
					margin: auto;
					min-width: 300px;
					max-width: 500px;
					min-height: 500px;
				}
			`}</style>
		</div>
	)
}
