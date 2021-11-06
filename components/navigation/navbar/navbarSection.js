export default function NavbarSection({ children }) {
	return (
		<section className="Section">
			{children}
			<style jsx>{`
				.Section {
					display: flex;
					gap: 0.5rem;
					align-items: center;
				}
			`}</style>
		</section>
	)
}
