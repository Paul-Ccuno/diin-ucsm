import Sidebar from '../sidebar'
import { Button } from '@mui/material'

import { publicRoutes, privateRoutes } from '../routes'
import NavbarSection from './navbarSection'
import NavigationLink from '../navigationLink'

export default function NavbarRight({ children }) {
	const profile = {
		id: 2,
		name: 'Paul Ccuno',
	}
	privateRoutes[0].text = `${profile.name}`

	const routes = (profile ? privateRoutes : publicRoutes) || []

	return (
		<>
			<NavbarSection>
				{routes.map(({ href, text }) => (
					<NavigationLink key={`route-${text}`} href={href}>
						<Button variant="text" color="inherit">
							{text}
						</Button>
					</NavigationLink>
				))}
				{profile ? (
					<span className="Logout">
						<Button color="inherit">Logout</Button>
					</span>
				) : (
					'Nada'
				)}
				<Sidebar routes={routes} />
			</NavbarSection>
			<style jsx>{`
				.Logout {
					display: flex;
					align-items: center;
					color: #fff;
				}
			`}</style>
		</>
	)
}
