import Sidebar from '../sidebar'
import { Button } from '@mui/material'

import { commonRoutes, publicRoutes, privateRoutes } from '../routes'
import NavbarSection from './navbarSection'
import NavigationLink from '../navigationLink'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

export default function NavbarRight({ children }) {
	const user = JSON.parse(getCookie('user') || null)

	const [profile, setProfile] = useState(user)
	const [routes, setRoutes] = useState([])

	useEffect(() => {
		if (user) {
			privateRoutes[0].text = user.name
			setRoutes(privateRoutes)
		} else {
			setRoutes(publicRoutes)
		}
	}, [user])

	return (
		<>
			<NavbarSection>
				{commonRoutes.map(({ href, text }) => (
					<NavigationLink key={`route-${text}`} href={href}>
						<Button variant="text" color="inherit">
							{text}
						</Button>
					</NavigationLink>
				))}
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
					<></>
				)}
				<Sidebar routes={[...commonRoutes, ...routes]} />
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
