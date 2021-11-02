import Link from 'next/link'

export default function Navigation() {
	const routes = [
		{
			href: '/login',
			text: 'Login',
		},
		{
			href: '/register',
			text: 'Register',
		},
	]

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
							<a>{text}</a>
						</Link>
					))}
				</section>
			</nav>

			<style jsx>{`
				.Navigation-container {
					position: sticky;
					top: 0;
					width: 100%;
					min-width: 300px;
					height: 50px;
					background-color: var(--theme-color);
				}
				.Navigation {
					margin: auto;
					max-width: 1000px;
					min-width: 300px;
					height: 100%;
					display: flex;
					justify-content: space-between;
				}
				.Left,
				.Rigth {
					display: flex;
				}
				.Navigation a {
					display: flex;
					align-items: center;
					padding: 0 1rem;
					height: 100%;
					color: #fff;
				}
				.Navigation .Rigth a:hover {
					backdrop-filter: saturate(0.8);
				}
			`}</style>
		</div>
	)
}
