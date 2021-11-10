import { EMPTY, VALID } from 'schemas/errors/es'
import * as yup from 'yup'

export const loginFields = {
	email: 'email',
	password: 'password',
}

const Login = yup.object().shape({
	email: yup.string().email(VALID.EMAIL).required(EMPTY.EMAIL),
	password: yup.string().required(EMPTY.PASSWORD).min(8, VALID.PASSWORD),
})

export default Login
