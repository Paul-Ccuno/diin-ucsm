import NavbarLeft from './navbarLeft'
import NavbarRight from './navbarRight'

export default function Navbar({ user }) {
	return (
		<nav className="Navbar">
			<NavbarLeft />
			<NavbarRight user={user} />
			<style jsx>{`
				.Navbar {
					margin: auto;
					max-width: 1000px;
					height: 100%;
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</nav>
	)
}
