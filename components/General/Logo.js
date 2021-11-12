import Image from 'next/image'
import logo from 'assets/images/logo-diin.svg'

export default function LogoDiin() {
	return (
		<>
			<span className="Logo-diin">
				<Image src={logo} alt="ucsm investigacion" width={60} height={30} />
				<span className="text">DIIN</span>
			</span>
			<style jsx>{`
				.Logo-diin {
					display: flex;
					align-items: center;
					font-size: 1.2rem;
					font-weight: 500;
					color: #fff;
				}
			`}</style>
		</>
	)
}
