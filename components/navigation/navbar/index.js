import NavbarLeft from './navbarLeft'
import NavbarRight from './navbarRight'

export default function Navbar() {
	return (
		<nav className="Navbar">
			<NavbarLeft />
			<NavbarRight />
			<style jsx>{`
				.Navbar {
					margin: auto;
					max-width: 1000px;
					padding: 0 1rem;
					height: 100%;
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</nav>
	)
}
