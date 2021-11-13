import { useState, useEffect } from 'react'
import HamburgerIcon from 'assets/icons/hamburgerIcon'
import { Button, Box, SwipeableDrawer, Avatar, IconButton } from '@mui/material'
import { colors } from 'styles/theme'
import NavigationLink from '../NavigationLink'
import LogoDiin from 'components/General/Logo'
import { getCookie } from 'cookies-next'
import Logout from '../Logout'
import { MenuRounded } from '@mui/icons-material'

const buttonStyles = {
	fullWidth: true,
	color: 'success',
	style: { justifyContent: 'left', textTransform: 'initial' },
	size: 'large',
}

export default function Sidebar({ routes, user, token }) {
	const [openSidebar, setOpenSidebar] = useState(false)

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		)
			return

		setOpenSidebar(open)
	}
	return (
		<>
			<IconButton style={{ color: '#fff' }} onClick={toggleDrawer(true)}>
				<MenuRounded />
			</IconButton>
			<SwipeableDrawer
				anchor="left"
				open={openSidebar}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<div className="Sidebar">
						<section className="Profile">
							{user ? (
								<>
									<Avatar
										alt="Nombre del usuario"
										style={{ backgroundColor: '#ddd' }}
									/>
									<span className="Profile__text">{`${user.name} ${user.lastName}`}</span>
								</>
							) : (
								<LogoDiin />
							)}
						</section>
						{routes.map(({ href, text }) => (
							<NavigationLink
								key={text}
								href={href}
								color={colors.success}
								fullWidth
							>
								<Button {...buttonStyles}>{text}</Button>
							</NavigationLink>
						))}
						{user && <Logout color={colors.success} />}
					</div>
				</Box>
			</SwipeableDrawer>
			<style jsx>{`
				.Sidebar {
					display: flex;
					flex-direction: column;
				}
				.Profile {
					display: flex;
					align-items: center;
					padding: 0 1rem;
					height: 60px;
					background-color: ${colors.success};
					color: #fff;
				}
				.Profile__text {
					display: -webkit-inline-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					margin-left: 0.5rem;
					font-size: 0.95rem;
				}
			`}</style>
		</>
	)
}
