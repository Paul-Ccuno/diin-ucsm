import Link from 'next/link'

import Sidebar from './Sidebar'
import { Button } from '@mui/material'

import { publicRoutes, privateRoutes } from './routes'
import { colors } from 'styles/theme'

export default function Navigation() {
	const profile = {
		id: 2,
		name: 'Paul Ccuno',
	}
	privateRoutes[0].text = `${profile.name}`

	const routes = (profile ? privateRoutes : publicRoutes) || []

	return (
		<div className="Navigation-container">
			<nav className="Navigation">
				<section className="Left">
					<Link href="/">
						<a>DIIN UCSM</a>
					</Link>
				</section>
				<section className="Rigth">
					{routes.map(({ href, text }) => (
						<Link key={`route-${text}`} href={href}>
							<a>
								<Button variant="text" color="inherit">
									{text}
								</Button>
							</a>
						</Link>
					))}
					{profile ? (
						<span className="Logout">
							<Button color="inherit">Logout</Button>
						</span>
					) : (
						'Nada'
					)}
					<Sidebar routes={routes} />
				</section>
			</nav>

			<style jsx>{`
				.Navigation-container {
					position: sticky;
					top: 0;
					min-width: 400px;
					max-width: 100vw;
					height: 70px;
					background-color: ${colors.success};
				}
				.Navigation {
					margin: auto;
					max-width: 1000px;
					height: 100%;
					display: flex;
					justify-content: space-between;
				}
				.Navigation a {
					color: #fff;
				}
				.Left,
				.Rigth {
					display: flex;
					gap: 0.5rem;
					align-items: center;
				}
				.Logout {
					display: flex;
					align-items: center;
					color: #fff;
				}
			`}</style>
		</div>
	)
}
