import { colors } from 'styles/theme'

export default function Title({ children }) {
	return (
		<>
			<div className="Title">
				<h1>{children}</h1>
			</div>
			<style jsx>{`
				.Title {
					color: ${colors.success};
					margin-bottom: 8px;
					justify-content: space-between;
				}
			`}</style>
		</>
	)
}
