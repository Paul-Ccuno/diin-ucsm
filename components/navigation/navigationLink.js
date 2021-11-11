import Link from 'next/link'

export default function NavigationLink({
	children,
	href = '',
	color = '#fff',
	width = 'auto',
	fullwidth = false,
}) {
	return (
		<>
			<Link href={href}>
				<a className="Navigation-link">{children}</a>
			</Link>
			<style jsx>{`
				.Navigation-link {
					display: flex;
					align-items: center;
					color: ${color};
					width: ${fullwidth ? '100%' : width};
				}
			`}</style>
		</>
	)
}
