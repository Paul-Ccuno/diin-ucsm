import { Button, TextField } from '@mui/material'

export default function LoginForm() {
	const handleSubmitLoginForm = (event) => {
		event.preventDefault()
		console.log('Hola mundo')
	}

	return (
		<form onSubmit={handleSubmitLoginForm}>
			<TextField
				fullWidth
				label="Email"
				variant="filled"
				size="small"
				color="success"
			/>
			<TextField fullWidth label="Email" variant="filled" size="small" />
			<Button fullWidth variant="contained" color="success" type="submit">
				Iniciar Sesión
			</Button>

			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			`}</style>
		</form>
	)
}
