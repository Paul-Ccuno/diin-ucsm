import Sidebar from '../sidebar'
import { Button } from '@mui/material'

import { commonRoutes, publicRoutes, privateRoutes } from '../routes'
import NavbarSection from './navbarSection'
import NavigationLink from '../navigationLink'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

const getWindowSize = () => {
	const { innerWidth } = window
	return innerWidth
}

export default function NavbarRight({ children }) {
	const user = JSON.parse(getCookie('user') || null)

	const [profile, setProfile] = useState(user)
	const [routes, setRoutes] = useState([])
	const [windowSize, setWindowSize] = useState(null)

	useEffect(() => {
		if (!windowSize) setWindowSize(getWindowSize)
		window.addEventListener('resize', () => {
			setWindowSize(getWindowSize)
		})
		return () => window.removeEventListener('resize', getWindowSize)
	}, [])

	useEffect(() => {
		if (user) {
			privateRoutes[0].text = user.name
			setRoutes(privateRoutes)
		} else {
			setRoutes(publicRoutes)
		}
	}, [user])

	const DesktopNavbar = () => {
		return (
			<>
				{commonRoutes.map(({ href, text }) => (
					<NavigationLink key={`route-${text}`} href={href}>
						<Button variant="text" color="inherit" size="large">
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
				{profile && (
					<span className="Logout">
						<Button color="inherit">Logout</Button>
					</span>
				)}
			</>
		)
	}

	const MobileNavbar = () => {
		return (
			<>
				<Sidebar routes={[...commonRoutes, ...routes]} />
			</>
		)
	}

	return (
		<>
			<NavbarSection>
				{windowSize < 600 ? MobileNavbar() : DesktopNavbar()}
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
