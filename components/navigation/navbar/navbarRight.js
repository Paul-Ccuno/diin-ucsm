import Sidebar from '../sidebar'
import { Button } from '@mui/material'

import { publicRoutes, privateRoutes } from '../routes'
import NavbarSection from './navbarSection'
import NavigationLink from '../navigationLink'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

export default function NavbarRight({ children, user }) {
	const [profile, setProfile] = useState(user)
	const [routes, setRoutes] = useState(publicRoutes)
	useEffect(() => {
		if (user) {
			setRoutes(privateRoutes)
			privateRoutes[0].text = user.name
		} else setRoutes(publicRoutes)
		console.log('user', user)
		const sss = getCookie('user', {})
		console.log(sss)
	}, [user])

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
					<></>
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
