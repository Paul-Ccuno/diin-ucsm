import { colors } from 'styles/theme'
import Navbar from './navbar'

export default function Navigation() {
	return (
		<div className="Navigation-container">
			<Navbar />

			<style jsx>{`
				.Navigation-container {
					position: sticky;
					top: 0;
					padding: 0 1rem;
					min-width: 500px;
					max-width: 100vw;
					height: 70px;
					background-color: ${colors.success};
				}
			`}</style>
		</div>
	)
}
