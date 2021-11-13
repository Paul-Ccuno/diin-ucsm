import Sidebar from '../Sidebar'
import { Button } from '@mui/material'

import { commonRoutes, publicRoutes, privateRoutes } from '../routes'
import NavbarSection from './NavbarSection'
import NavigationLink from '../NavigationLink'
import { useEffect, useState } from 'react'
import Logout from '../Logout'

const buttonStyles = {
	variant: 'text',
	color: 'inherit',
	style: {
		textTransform: 'initial',
	},
}

const getWindowSize = () => {
	const { innerWidth } = window
	return innerWidth
}

export default function NavbarRight({ user, token }) {
	const [routes, setRoutes] = useState([])
	const [windowSize, setWindowSize] = useState(null)

	useEffect(() => {
		setWindowSize(getWindowSize)
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
						<Button {...buttonStyles} size="large">
							{text}
						</Button>
					</NavigationLink>
				))}
				{routes.map(({ href, text }) => (
					<NavigationLink key={`route-${text}`} href={href}>
						<Button {...buttonStyles}>{text}</Button>
					</NavigationLink>
				))}
				{user && <Logout />}
			</>
		)
	}

	const MobileNavbar = () => {
		return (
			<>
				<Sidebar
					routes={[...commonRoutes, ...routes]}
					user={user}
					token={token}
				/>
			</>
		)
	}

	return (
		<>
			<NavbarSection>
				{windowSize < 600 ? MobileNavbar() : DesktopNavbar()}
			</NavbarSection>
			<style jsx>{``}</style>
		</>
	)
}
