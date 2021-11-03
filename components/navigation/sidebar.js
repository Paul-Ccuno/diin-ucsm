import Link from 'next/link'
import { useState } from 'react'

import { Button, Box, SwipeableDrawer } from '@mui/material'
import { colors } from 'styles/theme'

export default function Sidebar({ routes }) {
	const [openSidebar, setOpenSidebar] = useState(false)

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setOpenSidebar(open)
	}

	return (
		<>
			<Button
				variant="outlined"
				onClick={toggleDrawer(true)}
				style={{ color: '#fff', borderColor: '#fff' }}
			>
				Left
			</Button>
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
						{routes.map(({ href, text }) => (
							<Link key={text} href={href}>
								<a>
									<Button
										fullWidth
										color="inherit"
										style={{ justifyContent: 'left' }}
									>
										{text}
									</Button>
								</a>
							</Link>
						))}
					</div>
				</Box>
			</SwipeableDrawer>
			<style jsx>{`
				.Sidebar {
					display: flex;
					flex-direction: column;
				}
				.Sidebar a {
					width: 100%;
					color: ${colors.success};
				}
			`}</style>
		</>
	)
}
