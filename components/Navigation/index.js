import { colors } from 'styles/theme'
import Navbar from './Navbar'

export default function Navigation() {
	return (
		<div className="Navigation-container">
			<Navbar />

			<style jsx>{`
				.Navigation-container {
					position: sticky;
					top: 0;
					min-width: 430px;
					max-width: 100vw;
					height: 3.75rem;
					background-color: ${colors.success};
					z-index: 1;
				}
				@media (max-width: 500px) {
					.Navigation-container {
					}
				}
			`}</style>
		</div>
	)
}
