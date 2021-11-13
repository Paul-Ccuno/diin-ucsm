import { useRouter } from 'next/router'

import { Button } from '@mui/material'
import { setCookies } from 'cookies-next'
import axios from 'axios'

const buttonStyles = {
	fullWidth: true,
	color: 'inherit',
	style: { justifyContent: 'left', textTransform: 'initial' },
	size: 'large',
}

export default function Logout({ color = '#fff' }) {
	const router = useRouter()

	const handleClickLogout = async () => {
		try {
			const res = await axios.delete('/api/auth')
			router.push('/login')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<span className="Logout">
			<Button onClick={handleClickLogout} {...buttonStyles}>
				Logout
			</Button>
			<style jsx>{`
				.Logout {
					display: flex;
					align-items: center;
					color: ${color};
				}
			`}</style>
		</span>
	)
}
