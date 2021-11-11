import NavbarSection from './navbarSection'
import NavigationLink from '../navigationLink'
import LogoDiin from 'components/general/logo'

export default function NavbarLeft() {
	return (
		<>
			<NavbarSection>
				<NavigationLink href="/">
					<LogoDiin />
				</NavigationLink>
			</NavbarSection>
			<style jsx>{``}</style>
		</>
	)
}
