import { EMPTY, VALID } from 'schemas/errors/es'
import { maxDateAdult, parseDateString } from 'utils'
import * as yup from 'yup'

export const registerFields = {
	dni: 'dni',
	email: 'email',
	password: 'password',
	confirmPassword: 'confirmPassword',
	name: 'name',
	lastName: 'lastName',
	birthDate: 'birthDate',
	avatar: 'avatar',
	abstract: 'abstract',
}

const Register = yup.object().shape({
	dni: yup
		.string()
		.matches(/^\d{8}(?:[-\s]\d{4})?$/, VALID.DNI)
		.required(EMPTY.DNI),
	email: yup.string().email(VALID.EMAIL).required(EMPTY.EMAIL),
	password: yup.string().required(EMPTY.PASSWORD).min(8, VALID.PASSWORD),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], VALID.CONFIRMPASSWORD)
		.required(EMPTY.CONFIRMPASSWORD),
	name: yup.string().required(EMPTY.NAME),
	lastName: yup.string().required(EMPTY.LASTNAME),
	birthDate: yup
		.date('Ingrese una fecha valida')
		.transform(parseDateString)
		.max(maxDateAdult(), VALID.BIRTHDATE)
		.required(EMPTY.BIRTHDATE),
	avatar: yup.object(),
	abstract: yup.string(),
})

export default Register
