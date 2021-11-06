import { colors } from 'styles/theme'
import Navbar from './navbar'

export default function Navigation({ user }) {
	return (
		<div className="Navigation-container">
			<Navbar user={user} />

			<style jsx>{`
				.Navigation-container {
					position: sticky;
					top: 0;
					min-width: 430px;
					max-width: 100vw;
					height: 70px;
					background-color: ${colors.success};
				}
			`}</style>
		</div>
	)
}
