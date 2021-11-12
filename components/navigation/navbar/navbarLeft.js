import NavbarSection from './NavbarSection'
import NavigationLink from '../NavigationLink'
import LogoDiin from 'components/General/Logo'

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
