export default function LoginContainer({ children }) {
	return (
		<div className="Login-container">
			{children}

			<style jsx>{`
				.Login-container {
					margin: auto;
					min-width: 300px;
					max-width: 500px;
					min-height: 500px;
				}
			`}</style>
		</div>
	)
}
